
import { useState } from 'react';
import { ActivityIndicator, Alert, Button, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../../../FIrebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_DB } from '../../../FIrebaseConfig';
import { doc, setDoc } from 'firebase/firestore';


export default function Register({ navigation }: { navigation: any }) {
    const [fullname, setFullName] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [identityNo, setIdentityNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const db = FIREBASE_DB;

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            const userRef = doc(db, "users", user.uid)

            await setDoc(userRef, {

                name: name,
                surname: surname,
                email: email,
                uid: user.uid,
                identityNumber: identityNo,
                // photoURL: imageURL || profile,
                //   phoneNumber: "",
            });


            console.log(response);
            alert('Check your emails!');
        } catch (error: any) {
            console.log(error);
            alert('Sign up Failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <View style={styles.container}>

            <TextInput value={name} style={styles.input} placeholder='Name' autoCapitalize='none' onChangeText={(text) => setName(text)}></TextInput>
            <TextInput value={surname} style={styles.input} placeholder='Surname' autoCapitalize='none' onChangeText={(text) => setSurname(text)}></TextInput>
            <TextInput value={identityNo} style={styles.input} placeholder='Idenity Number' autoCapitalize='none' onChangeText={(text) => setIdentityNumber(text)}></TextInput>
            <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

            {loading ? (
                <ActivityIndicator size='large' color='#0000ff' />
            ) : (<>
                <Pressable onPress={signUp}>
                    <Text style={styles.button}>Create Account</Text>
                </Pressable>

            </>)
            }
            <Text style={{ marginLeft: 130, marginTop: 10 }}>Already have an account? <Pressable onPress={() => navigation.navigate("Login")}><label>Log in</label></Pressable> </Text>


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
        paddingLeft: 90,
        paddingTop: 15,
        height: 50,
        width: "80%",
        marginLeft: "10%",
    }
});
