import { useRootNavigationState } from 'expo-router';
import React from 'react';
import {StyleSheet, TextInput, Button} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const handleLogin = async (user: string, passwd: string) => {
    try {
        const response = await fetch('http://10.0.2.2:8000/api/token/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                password: passwd, 
            }),
        });

        const json = await response.json();

        if (!response.ok) {
            console.error("Login failed:", json);
            return;
        }

        await AsyncStorage.setItem('access', json.access);
        await AsyncStorage.setItem('refresh', json.refresh);
        console.log("Login successful!");
    } catch (error) {
        console.error("Network error:", error);
    }
};

const LoginAndPasswordInput = () => {
    const [username, onChangeUsername] = React.useState('');
    const [passwd, onChangePasswd] = React.useState('');
    
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholder = "username"
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePasswd}
                    value={passwd}
                    placeholder = "password"
                    keyboardType="default"
                />
                <Button
                    title="login"
                    onPress={() => handleLogin(username, passwd)}
                />
            </SafeAreaView>            
        </SafeAreaProvider>
    )
}



const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginAndPasswordInput;
