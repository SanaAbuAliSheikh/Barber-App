import  AsyncStorage  from "@react-native-community/async-storage";
// import base64 from 'react-native-base64'

export const URL = "https://barberp.herokuapp.com/api";
export const config = {
    headers: {
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
};
// export const headers ={
//     'authorization' : await AsyncStorage.getItem('token'),
//     'Content-Type' : 'application/json',
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
// };

// export const convertImageIntoBase64 = (string) => {
//     console.log(string.data);
//     return base64.encode(string.data)
// }