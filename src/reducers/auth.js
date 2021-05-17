import { OWNER_SUCCESS, OWNER_FAIL, SHOP_SUCCESS, SHOP_FAIL, EMPLOYEE_SUCCESS, EMPLOYEE_FAIL, GET_PLAN_SUCCESS, GET_PLAN_FAIL, GET_SERVICE_SUCCESS, GET_SERVICE_FAIL, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, FORGOT_PASS_SUCCESS, FORGOT_PASS_FAIL, VERIFY_OTP_SUCCESS, VERIFY_OTP_FAIL, UPDATE_PASS_SUCCESS, UPDATE_PASS_FAIL, AUTH_LOADED, AUTH_ERROR } from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    user:null,
    loading:true,
    token:null,
    isAuthenticated:false
};

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case OWNER_SUCCESS:
            AsyncStorage.setItem('owner_id',payload);
            return {
                ...state,
                ...payload,
                loading:false,
            };

        case OWNER_FAIL:
            AsyncStorage.removeItem('owner_id');
            return{
                ...state,
                loading:null,
            }

        default:
            return state;
    };
}