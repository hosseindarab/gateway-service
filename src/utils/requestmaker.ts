type APIs = | 'auth' ;
interface Reqmaker{
    service: APIs,
    action: string,
    method: Method,
    data?: any,
    headers?: Object,
}
export default function({service, action, method, data = '', headers = {} }: Reqmaker){
return new Promise( (resolve, reject) => {
const url = ((services.find((el) => el.name === service )).url) + '/' + action;
axios({
    url: url,
    method: method,
    headers: headers,
    data: data
         }).then((response) => {
             resolve(response.data)
         }).catch((error) => {
             console.log('Error', error.message);
         });
    });
}