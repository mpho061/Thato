
import { useState } from 'react';
import { ActivityIndicator, Alert, Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { FIREBASE_AUTH } from '../../../FIrebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({navigation}:{navigation: any}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
           /* const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);*/

                const response = await signInWithEmailAndPassword(auth, email, password)
                  .then(() => console.log("Login success"))
                  .catch((err) => Alert.alert("Login error", err.message));
              

        } catch (error: any) {
            console.log(error);
            alert('Sign in Failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }
     
    return (
        <View style={styles.container}>
             
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

                {loading ? (
                    <ActivityIndicator size='large' color='#0000ff' />
                ) : (<>
                    <Pressable onPress={signIn}>
                        <Text style={styles.button}>Login</Text>
                    </Pressable>

                </>)
                }
            <Text style={{ marginLeft: 130, marginTop:10 }}>Don't have an account? <Pressable onPress={() => navigation.navigate("Register")}><label>Sign Up</label></Pressable> </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',

    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginTop: 15,
        width: "80%",
        backgroundColor: '#fff',
        marginLeft: "10%",
    },
    button: {
        marginTop: 20,
        borderRadius: 30,
        borderWidth: 1,
        paddingLeft: 130,
        paddingTop: 15,
        height: 50,
        width: "80%",
        marginLeft: "10%",
    }
});
