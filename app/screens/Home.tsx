import { NavigationProp } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { getFirestore } from 'firebase/firestore';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}
export default function Home({ navigation }: RouterProps) {
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;


    const signOutL = async () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    return (
        <View style={styles.container}>
            <View style={{ height: 50, borderWidth: 1, backgroundColor: '#FFB6C1', marginTop: 102, flexDirection: "row" }}>
                <Text style={{
                    marginLeft: 135,
                    marginTop: 0,
                    fontSize: 35,
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }}>Thato</Text>

                <Pressable onPress={signOutL} style={{ marginLeft: "27%", marginTop: 10 }}>
                    <MaterialIcons name="logout" size={34} color="black"  />
                </Pressable>
            </View>
            <View style={{ marginTop: 35 }}>
                <Text style={{ marginLeft: "5%", fontWeight: 'bold' }}>Welcome {user?.email}</Text>
            </View>

            <View style={styles.iconBorder}>
            <TouchableOpacity><Entypo name="home" size={24} color="black" style={styles.icon} /></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Details') }}><FontAwesome name="user" size={24} color="black" style={styles.icon} /></TouchableOpacity>
            <TouchableOpacity><MaterialIcons name="qr-code-scanner" size={24} color="black" style={styles.icon} /></TouchableOpacity>
            <TouchableOpacity><Fontisto name="history" size={24} color="black" style={styles.icon} /></TouchableOpacity>
            </View>
        </View>

    )
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
    },
    itemHeading: {
        fontWeight: 'bold'
    },
    icon: {
        marginLeft: 43,
        marginTop: 10,
        justifyContent: "space-between",

    },
    iconBorder: {
        height: 50,
        width: "80%",
        marginLeft: 30,
        borderRadius: 30,
        marginTop: 450,
        flexDirection: 'row',
        backgroundColor: '#FFB6C1',
        marginBottom:100,
    },

});
