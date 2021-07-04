import axios from 'axios';
import api from '../utils/api';
import {config, URL} from '../utils/Static';
import setAuthToken from '../utils/setAuthToken'
import { ToastAndroid } from 'react-native';
import { OWNER_SUCCESS, OWNER_FAIL, SHOP_SUCCESS, SHOP_FAIL, EMPLOYEE_SUCCESS, EMPLOYEE_FAIL, GET_PLAN_SUCCESS, GET_PLAN_FAIL, GET_SERVICE_SUCCESS, GET_SERVICE_FAIL, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, FORGOT_PASS_SUCCESS, FORGOT_PASS_FAIL, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAIL, UPDATE_PASS_SUCCESS, UPDATE_PASS_FAIL, AUTH_LOADED, AUTH_ERROR, GET_JOB_SUCCESS, GET_JOB_FAIL, GET_SHOP_SUCCESS, GET_SHOP_FAIL, GET_APPOINTMENT_SUCCESS, GET_APPOINTMENT_FAIL, GET_OWNER_SHOPS_SUCCESS, GET_OWNER_SHOPS_FAIL, GET_NOTIFICATION_SUCCESS, NOTIFICATION_DETAILS_SUCCESS, NOTIFICATION_DETAILS_FAILURE, CREATE_PACKAGE, GET_PACKAGE, CONTACT, DELETE_PACKAGE } from './types';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

//REGISTER OWNER
export const register_owner = ({firstname,lastname,email,password,image}) => async dispatch => {
    const body = JSON.stringify({firstname,lastname,email,password,role:'OWNER',image})
    try{
        const res = await api.post('/users/signup',body)
        console.log("hit", res.data);
        dispatch({
            type: OWNER_SUCCESS,
            payload: res.data&&res.data
        })
        Toast.show("Owner Registered Successfully", Toast.SHORT)
        return res.data
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        dispatch({
            type: OWNER_FAIL
        })
    }
}

//REGISTER SHOP
export const register_shop = ({daysTimings,owner,title,work_type,plan,shop_type,location,address,images,services,country,zip_code}) => async dispatch => {
    
    
    const a= await AsyncStorage.getItem('owner-token');
    console.log(api.defaults.headers.common['Authorization']);
    const body = JSON.stringify({daysTimings,owner,title,work_type,plan:plan,shop_type,location,from:'9:00am',to:'6:00pm',address,services,images,no_of_employees:"10",country,zip_code})
    console.log(body);
    try{
        const res = await api.post('/shops',body)
        console.log(res.data);

        dispatch({
            type: SHOP_SUCCESS,
            payload: res.data.shop_id
        })

        Toast.show("Shop Registered Successfully", Toast.SHORT)
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        dispatch({
            type: SHOP_FAIL
        })
    }
}

//EDIT SHOP
export const edit_shop = ({images}) => async dispatch => {
    console.log('IMAGESS')
    const shop = await AsyncStorage.getItem('shop_id');
    const body = JSON.stringify({images})
    console.log(`shops/edit/${shop}`);
    try{
        const res = await api.post(`/shops/edit/${shop}`,{images})
        console.log("resp",res.data);

        dispatch(get_shop(shop));
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        
    }
}

//EDIT SHOP Info
export const edit_shopInfo = ({shop}) => async dispatch => {

    const shopId = await AsyncStorage.getItem('shop_id');
    // let shops = shop.shop;

    // const body = JSON.stringify({shop})
    console.log("EDIT SHOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",shop);
    console.log(`shops/edit/${shopId}`);
    try{
        const res = await api.post(`/shops/edit/${shopId}`,shop)
        console.log("resp",res);

        dispatch(get_shop(shopId));
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        
    }
}

//EDIT SHOP Info
export const edit_shopInfos = ({services}) => async dispatch => {
    console.log(services)

    const shopId = await AsyncStorage.getItem('shop_id');
    // let shops = shop.shop;

    // const body = JSON.stringify({shop})
    console.log("EDIT SHOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",services);
    console.log(`shops/edit/${shopId}`);
    try{
        const res = await api.post(`/shops/edit/${shopId}`,{"services":services})
        console.log("resp",res);

        dispatch(get_shop(shopId));
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        
    }
}

//REGISTER EMPLOYEES
export const register_employee = ({shop,name,type,phone,services}) => async dispatch => {
    
    const body = JSON.stringify({shop,name,description:'employee',phone_no:phone,type,services})
    console.log(body);
    try{
        const res = await api.post('/employees/register',body)
        console.log("#####################################################____________________________________________",res.data);

        dispatch({
            type: EMPLOYEE_SUCCESS,
            payload: res.data
        })

        dispatch(get_shop(shop))

        Toast.show("Employee Registered Successfully", Toast.SHORT)
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        dispatch({
            type: GET_PLAN_FAIL
        })
    }
}

//GET APPOINTMENTS
export const get_appointment = (val) => async dispatch => {
    console.log('APPOINTMENTTT')
    const shopId = await AsyncStorage.getItem('shop_id');
    console.log("BOOKINGSSSSSSSSSS",shopId);
    try{
        if(val!=null){
            const res = await api.get(`/bookings/shop/${shopId}?date=${val}`)
            console.log("appointmentsss today",res.data)

            dispatch({
                type: GET_APPOINTMENT_SUCCESS,
                payload: res.data
            })
        }else {
            const res = await api.get(`/bookings/shop/${shopId}`)
            console.log("appointmentsss today",res.data)

            dispatch({
                type: GET_APPOINTMENT_SUCCESS,
                payload: res.data
            })
        }

        
    }catch(err){
        console.log('hey',err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        dispatch({
            type: GET_APPOINTMENT_FAIL,
            payload: []
        })
       
    }
}

//STATUS APPOINTMENTS
export const status_appointment = ({bookingId,status}) => async dispatch => {
    
    console.log("BOOKINGSSSSSSSSSS STATUS");
    const body = JSON.stringify({"booking_id":bookingId,status})
    console.log(body);
    try{
        
        const res = await api.post(`/bookings/status`,{"booking_id":bookingId,status})
        console.log("appointmentsss today",res.data)

        dispatch(get_appointment())
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
       
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

        return res.data
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
         
        dispatch({
            type: GET_SHOP_FAIL
        })
    }
}

//GET ALL SHOP
export const get_owner_shops = () => async dispatch => {
    console.log("get owner shop");
      console.log(api.defaults.headers.common['Authorization']);
    try{
        const res = await api.get(`/shops/me`)
        console.log('res.data',res.data);

        dispatch({
            type: GET_OWNER_SHOPS_SUCCESS,
            payload: res.data
        })
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        // ToastAndroid.show(err, ToastAndroid.SHORT)
         
        // dispatch({
        //     type: GET_OWNER_SHOPS_FAIL
        // })
    }
}

//LOGIN OWNER
export const login_owner = ({email, password, deviceId, deviceType}) => async dispatch => {
    
    const body = JSON.stringify({email,password, deviceId, deviceType});
    console.log("body of login", body);
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
        Toast.show("Logged In Successfully", Toast.SHORT)
        // else{
        //     ToastAndroid.show(res.error, ToastAndroid.SHORT)
        // }
        
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
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

        Toast.show("Job Created Successfully", Toast.SHORT)
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
       
    }
}

//GET NOTIFICATION
export const get_notifications = () => async dispatch => {
    const shopId = await AsyncStorage.getItem('shop_id')
    const body = JSON.stringify({'shop_id':shopId});
    console.log("ppppppppppppppppppppppppppppppppppp",body);
    try{
        
        const res = await api.post(`/notifications/shop`,{'shop_id':shopId})
        console.log('NOTIFICATION))))))))',res.data);

        dispatch({
            type: GET_NOTIFICATION_SUCCESS,
            payload: res.data
        })
        
    }catch(err){
        console.warn(err)
        
    }
}

//NOTIFICATION DETAILS
export const notification_details = (deviceId, deviceOS) => async dispatch => {
    if(deviceId && deviceOS){
        dispatch({
            type:NOTIFICATION_DETAILS_SUCCESS,
            payload:{
                deviceId:deviceId,
                deviceOS:deviceOS
            }
        })
    }else{
        dispatch({
            type:NOTIFICATION_DETAILS_FAILURE
        })
    }
}



//CREATE PACKAGES
export const create_package = (data) => async dispatch => {
    try{
        const res = await api.post('/packages/create',data)
        dispatch({
            type:CREATE_PACKAGE,
            payload:res.data
        })
        dispatch(get_package(data.shop))
        Toast.show("Package Created Successfully", Toast.SHORT)
        return res.data
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
    }
}

//GET PACKAGES
export const get_package = (id) => async dispatch => {
    try{
        const data = {
            shop:id
        }
        const res = await api.post('/packages',data)
        dispatch({
            type:GET_PACKAGE,
            payload:res.data
        })
        return res.data
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
    }
}


//DELETE PACKAGE
export const delete_package = (id,shopId) => async dispatch => {
    try{
        const res = await api.post(`/packages/delete/${id}`)
        dispatch({
            type:DELETE_PACKAGE,
            payload:res.data
        })
        Toast.show("Package Deleted Successfully", Toast.SHORT)
        dispatch(get_package(shopId))
        return res.data
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
    }
}

export const contact = (data) => async dispatch => {
    try{
        const res = await api.post('/contact',data)
        dispatch({
            type:CONTACT,
            payload:res.data
        })
        Toast.show("Response Sent Successfully", Toast.SHORT)
        return res.data

    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
    }
}

