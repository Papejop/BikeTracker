import AsyncStorage from '@react-native-async-storage/async-storage';

async function refreshToken()
{
    const url =  'http://10.0.2.2:8000/api/token/refresh';
    try  {
        const response = awaut fetch(url);
        if (!response.ok) {
            
        }
    }
}