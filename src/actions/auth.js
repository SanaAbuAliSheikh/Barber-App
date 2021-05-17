import axios from 'axios';
import { URL, config, headers } from '../utils/Static';
import { ToastAndroid } from 'react-native';
import { OWNER_SUCCESS, OWNER_FAIL, SHOP_SUCCESS, SHOP_FAIL, EMPLOYEE_SUCCESS, EMPLOYEE_FAIL, GET_PLAN_SUCCESS, GET_PLAN_FAIL, GET_SERVICE_SUCCESS, GET_SERVICE_FAIL, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, FORGOT_PASS_SUCCESS, FORGOT_PASS_FAIL, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAIL, UPDATE_PASS_SUCCESS, UPDATE_PASS_FAIL, AUTH_LOADED, AUTH_ERROR } from './types';

//REGISTER OWNER
export const register_owner = ({firstName,lastName,email,password,image}) => async dispatch => {
    const body = JSON.stringify({firstName,lastName,email,password,role:'OWNER',image})
   
    console.log(config);
    try{
        const res = await axios.post(`${URL}/api/users/signup`,body, config)
        console.log(res);

        // if(!res.status){
        //     ToastAndroid.show(res.error, ToastAndroid.SHORT)
        // }
        dispatch({
            type: OWNER_SUCCESS,
            payload: res
        })
        
    }catch(err){
        console.log(err);
        dispatch({
            type: OWNER_FAIL
        })
    }
}

//REGISTER SHOP
export const register_shop = ({owner,title,work_type,plan,shop_type,description,location,from,to,address,services,images,no_of_employees}) => async dispatch => {
    
    const body = JSON.stringify({owner,title,work_type,plan,shop_type,description,location,from,to,address,services,images,no_of_employees})
    
    try{
        const res = await axios.post(`${URL}/api/shops`,body, headers)
        console.log(res);

        if(!res.status){
            ToastAndroid.show(res.error, ToastAndroid.SHORT)
        }
        dispatch({
            type: SHOP_SUCCESS,
            payload: res.response.token
        })
        
    }catch(err){
        console.log(err);
        dispatch({
            type: SHOP_FAIL
        })
    }
}

//REGISTER EMPLOYEES
export const register_employee = ({shop,name,description,type,services}) => async dispatch => {
    
    const body = JSON.stringify({shop,name,description,type,services})
    
    try{
        const res = await axios.post(`${URL}/api/employees/register`,body, headers)
        console.log(res);

        if(!res.status){
            ToastAndroid.show(res.error, ToastAndroid.SHORT)
        }
        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: res.response.token
        })
        
    }catch(err){
        console.log(err);
        dispatch({
            type: EMPLOYEE_FAIL
        })
    }
}

//GET PLANS
export const get_plans = () => async dispatch => {
    try{
        
        const res = await axios.get(`${URL}/api/plans`)
        console.log(res)

        dispatch({
            type: GET_PLAN_SUCCESS,
            payload: res
        })
        
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: GET_PLAN_FAIL
        })
    }
}

//GET SERVICES
export const get_services = () => async dispatch => {
    try{
        
        const res = await axios.get(`${URL}/api/services`,{
            headers:headers
        })
        console.log(res)

        dispatch({
            type: GET_SERVICE_SUCCESS,
            payload: res
        })
        
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: GET_SERVICE_FAIL
        })
    }
}

//LOGIN OWNER
export const login_owner = ({email, password}) => async dispatch => {
    
    const body = JSON.stringify({email,password})

    try{
        const res = await axios.post(`${URL}/api/auth/login`,body,config)
        console.log(res);
        
        if(res.status){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.response.token
            })
            dispatch(loadUser())
        }
        else{
            ToastAndroid.show(res.error, ToastAndroid.SHORT)
        }
        
    }catch(err){
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

//FORGOT PASS
export const forgot_pass = ({email}) => async dispatch => {
    const body = JSON.stringify({email})

    try{

        const res = await axios.post(`${URL}/api/auth/forgotpassword`,body,config)
        console.log(res);
        
        dispatch({
            type: FORGOT_PASS_SUCCESS,
            payload: res
        })
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: FORGOT_PASS_FAIL
        })
    }
}

//VERIFY CODE
export const verify_otp = ({resetCode}) => async dispatch => {
    const body = JSON.stringify({resetCode})
    try{

        const res = await axios.post(`${URL}/api/auth/verifycode`,body,config)
        console.log(res);
        
        dispatch({
            type: VERIFY_OTP_SUCCESS,
            payload: res
        })
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: VERIFY_OTP_FAIL
        })
    }
}

//UPDATE PASS
export const update_pass_login = ({code,newpassword,confirmpassword}) => async dispatch => {
    
    const body = JSON.stringify({code,newpassword,confirmpassword})

   try{

        const res = await axios.post(`${URL}/api/auth/reset/${code}`,body,config)
        console.log(res);
        
        dispatch({
            type: UPDATE_PASS_SUCCESS,
            payload: res
        })
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: UPDATE_PASS_FAIL
        })
    }
}

//LOGOUT OWNER
export const logout = () => dispatch => {
    dispatch({
        type : LOGOUT
    })
}

//LOAD USER
export const loadUser = () => async dispatch => {
    try{
        
        const res = await axios.get(`${URL}/api/auth`,{
            headers:headers
        })
        console.log(res);

        dispatch({
            type: AUTH_LOADED,
            payload: res
        })
        
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: AUTH_ERROR
        })
    }
}