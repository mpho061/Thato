import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './app/screens/Login';
import Register from './app/screens/Register'

import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FIrebaseConfig';

 
import Details from './app/screens/Details';
import Home from './app/screens/Home';

const Stack = createNativeStackNavigator();




export default function App() {
  const [user, setUSer] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUSer(user);
    })
  }, [])



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="export default function Details() {
">
        {user ? (
          <Stack.Group>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />
          </Stack.Group>
        )
          :
          (
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
              
            </Stack.Group>
          )
        }


      </Stack.Navigator>
    </NavigationContainer>
  );
}


