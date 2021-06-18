import axios from 'axios';
import api from '../utils/api';
import {config, URL} from '../utils/Static';
import setAuthToken from '../utils/setAuthToken'
import { ToastAndroid } from 'react-native';
import { OWNER_SUCCESS, OWNER_FAIL, SHOP_SUCCESS, SHOP_FAIL, EMPLOYEE_SUCCESS, EMPLOYEE_FAIL, GET_PLAN_SUCCESS, GET_PLAN_FAIL, GET_SERVICE_SUCCESS, GET_SERVICE_FAIL, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, FORGOT_PASS_SUCCESS, FORGOT_PASS_FAIL, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAIL, UPDATE_PASS_SUCCESS, UPDATE_PASS_FAIL, AUTH_LOADED, AUTH_ERROR, GET_JOB_SUCCESS, GET_JOB_FAIL, GET_SHOP_SUCCESS, GET_SHOP_FAIL, GET_APPOINTMENT_SUCCESS, GET_APPOINTMENT_FAIL, GET_OWNER_SHOPS_SUCCESS, GET_OWNER_SHOPS_FAIL } from './types';
import AsyncStorage from '@react-native-community/async-storage';

//REGISTER OWNER
export const register_owner = ({firstname,lastname,email,password,image}) => async dispatch => {
    const body = JSON.stringify({firstname,lastname,email,password,role:'OWNER',image})
   console.log("body",body);
    try{
        const res = await api.post('/users/signup',body)
        console.log("hit", res.data);
        dispatch({
            type: OWNER_SUCCESS,
            payload: res.data&&res.data
        })
        
    }catch(err){
        console.log(err);
        ToastAndroid.show(err, ToastAndroid.SHORT);
        dispatch({
            type: OWNER_FAIL
        })
    }
}

//REGISTER SHOP
export const register_shop = ({owner,title,work_type,plan,shop_type,location,address,images,services,country,zip_code}) => async dispatch => {
    
    
    const a= await AsyncStorage.getItem('owner-token');
    console.log(api.defaults.headers.common['Authorization']);
    const body = JSON.stringify({owner,title,work_type,plan:"607a61a195aa091540cd1d3d",shop_type,location,from:'9:00am',to:'6:00pm',address,services,images,no_of_employees:"10",country,zip_code})
    console.log(body);
    try{
        const res = await api.post('/shops',body)
        console.log(res.data);

        dispatch({
            type: SHOP_SUCCESS,
            payload: res.data.shop_id
        })
        
    }catch(err){
        console.log(err);
        dispatch({
            type: SHOP_FAIL
        })
    }
}

//REGISTER EMPLOYEES
export const register_employee = ({shop,name,type,phone,services}) => async dispatch => {
    
    const body = JSON.stringify({shop,name,description:'employee',phone_no:phone,type,services})
    console.log(body);
    try{
        const res = await api.post('/employees/register',body)
        console.log(res.data);

        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: res.data
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
        
        const res = await api.get(`/plans`)
        console.log(res)

        dispatch({
            type: GET_PLAN_SUCCESS,
            payload: res.data
        })
        
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: GET_PLAN_FAIL
        })
    }
}

//GET APPOINTMENTS
export const get_appointment = () => async dispatch => {
    try{
        
        const res = await api.get(`/bookings/me`)
        console.log(res)

        dispatch({
            type: GET_APPOINTMENT_SUCCESS,
            payload: res
        })
        
    }catch(err){
        console.warn(err.message)
        dispatch({
            type: GET_APPOINTMENT_FAIL
        })
    }
}

//GET SERVICES
export const get_services = () => async dispatch => {
    try{
        const res = await api.get(`/services`)
        console.log(res.data)

        dispatch({
            type: GET_SERVICE_SUCCESS,
            payload: res.data
        })
        
    }catch(err){
        console.warn(err)
        // ToastAndroid.show(err, ToastAndroid.SHORT)
         
        // dispatch({
        //     type: GET_SERVICE_FAIL
        // })
    }
}

//GET SHOP
export const get_shop = (shopId) => async dispatch => {
    try{
        console.log("shop is here",shopId);
        const res = await api.get(`/shops/${shopId}`)
        console.log('res.data',res.data);

        dispatch({
            type: GET_SHOP_SUCCESS,
            payload: res.data
        })
        
    }catch(err){
        console.warn(err)
        ToastAndroid.show(err, ToastAndroid.SHORT)
         
        dispatch({
            type: GET_SHOP_FAIL
        })
    }
}

//GET ALL SHOP
export const get_owner_shops = () => async dispatch => {
    try{
        const res = await api.get(`/shops/me`)
        console.log('res.data',res.data);

        dispatch({
            type: GET_OWNER_SHOPS_SUCCESS,
            payload: res.data
        })
        
    }catch(err){
        console.warn(err)
        ToastAndroid.show(err, ToastAndroid.SHORT)
         
        dispatch({
            type: GET_OWNER_SHOPS_FAIL
        })
    }
}

//LOGIN OWNER
export const login_owner = ({email, password}) => async dispatch => {
    
    const body = JSON.stringify({email,password})
    try{
        const res = await api.post(`/auth/login`,body,config)
        console.log(res);
        
        if(res){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            // dispatch(loadUser())
        }
        // else{
        //     ToastAndroid.show(res.error, ToastAndroid.SHORT)
        // }
        
    }catch(err){
        console.log(err);
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

//FORGOT PASS
export const forgot_pass = ({email}) => async dispatch => {
    const body = JSON.stringify({email})
console.log(body);
    try{

        const res = await api.post('/auth/forgot',body)
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

//GET JOBS
export const get_jobs = () => async dispatch => {
    const a= await AsyncStorage.getItem('token');
    console.log(api.defaults.headers.common['Authorization']);
    console.log(a);
    try{
        console.log("JOBSSSSSS CALLS");
        const res = await api.get('/jobs/me')
        console.log(res.data)

        dispatch({
            type: GET_JOB_SUCCESS,
            payload: res.data
        })
        
    }catch(err){
        console.warn(err)
        dispatch({
            type: GET_JOB_FAIL
        })
    }
}

//CREATE JOBS
export const create_jobs = ({shop,name,description,email,type, area, packages,experience}) => async dispatch => {
    
    const body = JSON.stringify({shop,'title':name,description,email,type,area, 'package':packages,experience})
    console.log(body);
    try{
        console.log("JOBSSSSSS CREATE");
        const res = await api.post('/jobs/create', body)
        console.log(res.data)

        dispatch(get_jobs());
    }catch(err){
        console.warn(err)
       
    }
}