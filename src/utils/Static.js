import  AsyncStorage  from "@react-native-community/async-storage";
// import base64 from 'react-native-base64'

export const URL = "http://192.168.0.129:5000";
export const config = {
    headers: {
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
};
// export const headers ={
//     'authorization' : await AsyncStorage.getItem('token'),
//     'Content-Type' : 'application/json'
// };

// export const convertImageIntoBase64 = (string) => {
//     console.log(string.data);
//     return base64.encode(string.data)
// }