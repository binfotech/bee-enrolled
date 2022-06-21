import axios from 'axios';
import c from './../Constants'
const intance = axios.create({
    baseURL: c.API_BASE_URL
});
intance.interceptors.request.use((request) => {
    const token = localStorage.getItem("bi-token");
    if(token){
        request.headers.authorization = `${token}`;
    }
    return request;
},(error) => {
    return Promise.reject(error);
});
intance.interceptors.response.use((response) => response,async(error) => {
    if(error.response.data.status === 401){
        localStorage.removeItem("bi-token");
        if(window.location.pathname !== '/'){
            window.location.href = '/';
        }else{
            window.location.reload()
        }
    }
    return Promise.reject(error);
});
export default intance;