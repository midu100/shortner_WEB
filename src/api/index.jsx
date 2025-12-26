import axios from 'axios';
import { getCookie } from '../components/common/Services';

const api = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL || 'http://localhost:2222/',
    withCredentials: true,
    headers : {
        "content-Type" : "application/json",
    }
})

/* =========================
   REQUEST INTERCEPTOR
========================= */
api.interceptors.request.use(
    (config) => {
        const token = getCookie('acc_token')
        console.log(token)
        if(token){
            config.headers.Authorization = `${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


const authServices = {

    login : async (loginData)=>{
       const res = await api.post('/auth/login',loginData)
       return res.data
    },
    signup : async (SignupData)=>{
       const res = await api.post('/auth/signup',SignupData)
       return res.data
    },
    getProfile : async ()=>{
        const res = await api.get('/auth/getProfile')
        return res.data
    }

}

const urlServices = {
    createShort : async (urlLong)=>{
        const res = await api.post('/url/create',{urlLong})
        return res.data
    },
    getAll : async()=>{
       const res =  await api.get('/url/geturls')
       return res.data
    }
}


export {authServices,urlServices}



