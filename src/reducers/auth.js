import {
  OWNER_SUCCESS,
  OWNER_FAIL,
  SHOP_SUCCESS,
  SHOP_FAIL,
  EMPLOYEE_SUCCESS,
  EMPLOYEE_FAIL,
  GET_PLAN_SUCCESS,
  GET_PLAN_FAIL,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_FAIL,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FORGOT_PASS_SUCCESS,
  FORGOT_PASS_FAIL,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  UPDATE_PASS_SUCCESS,
  UPDATE_PASS_FAIL,
  AUTH_LOADED,
  AUTH_ERROR,
  GET_SHOP_SUCCESS,
  GET_SHOP_FAIL,
  GET_JOB_SUCCESS,
  GET_JOB_FAIL,
  GET_OWNER_SHOPS_SUCCESS,
  GET_NOTIFICATION_SUCCESS,
  GET_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAIL,
  NOTIFICATION_DETAILS_SUCCESS,
  NOTIFICATION_DETAILS_FAILURE
} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import api from '../utils/api';

const initialState = {
  user: null,
  loading: true,
  token: null,
  isAuthenticated: false,
  ownerId: null,
  services: [],
  employee:{},
  user: null,
  shopId:null,
  shop:[],
  jobs:[],
  plans:[],
  allShops:[],
  notifications:[],
  appointments:[],
  deviceId:null,
  deviceOS:null
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case OWNER_SUCCESS:
      AsyncStorage.setItem('owner_id', payload.createdUser._id.toString());
      AsyncStorage.setItem('owner-token', payload.token.toString());

      return {
        ...state,
        ...payload,
        loading: false,
        ownerId: payload,
      };

      case SHOP_SUCCESS:
        AsyncStorage.setItem('shop_id', payload.toString());
        return {
          ...state,
          ...payload,
          loading: false,
          shopId: payload,
        };

    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        services: payload,
      };
    
    case EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        employee:payload
      };

    case GET_SHOP_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        shop: payload,
      };

    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        notifications: payload,
      };
  
    case GET_APPOINTMENT_SUCCESS:
      console.log(payload,'REDUCER')
      return {
        ...state,
        ...payload,
        loading: false,
        appointments: payload,
      }
    
    case GET_APPOINTMENT_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
        appointments: payload,
      }

    case GET_OWNER_SHOPS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        allShops: payload,
      };
      

    case LOGIN_SUCCESS:
      api.defaults.headers.common['Authorization'] = `Bearer ${payload.token.toString()}`;
      AsyncStorage.setItem('token', payload.token.toString());
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
        user:payload,

      };

    case GET_JOB_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        job: payload,
      };

      
    case GET_PLAN_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        plans: payload,
      };

    case OWNER_FAIL:
      AsyncStorage.removeItem('owner_id');
      return {
        ...state,
        loading: null,
        ownerId: null,
      };

    case SHOP_FAIL:
      AsyncStorage.removeItem('shop_id');
      return {
        ...state,
        loading: null,
        shopId: null,
      };

    case EMPLOYEE_FAIL:
      return {
        ...state,
        loading: null,
        employee:null
      };

    case GET_SERVICE_FAIL:
      return {
        ...state,
        loading: null,
        ownerId: null,
        services: null,
      };

    case GET_SHOP_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
        shop: null,
      };

    case GET_OWNER_SHOPS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        allShops: null,
      };

    case LOGIN_FAIL:
      case LOGOUT:
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('shop_id');
        return {
          ...state,
          isAuthenticated: false,
          user:null,
          loading: null,
          token: null,
          ownerId: null,
          services: null,
          employee:null,
          user: null,
          shopId:null,
          shop:null,
          jobs:null
          
        };

      case GET_JOB_FAIL:
        return {
          ...state,
          ...payload,
          loading: false,
          job: null,
        };

      case GET_PLAN_FAIL:
        return {
          ...state,
          ...payload,
          loading: false,
          plans: null,
        };
      case NOTIFICATION_DETAILS_SUCCESS:
        return {
          ...state,
          ...payload,
          deviceId:payload.deviceId,
          deviceOS:payload.deviceOS
        }
      
      case NOTIFICATION_DETAILS_FAILURE:
        return {
          ...state,
          ...payload,
          deviceId:null,
          deviceOS:null
        }

    default:
      return state;
  }
}
