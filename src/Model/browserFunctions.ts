

import axios from "axios";
import type { Iuser } from "./application";



export const handleNotification = (message: string, win: any, type: string, title: string, image: string = '', func: any = ()=>{}) => {
    win.iziToast[type]({
        title: title,
        'message': message,
        position: 'topRight',
        image: image,
        onClosed: func
    })
    
    return func || 0
}

export const handleBrowserError = (error) =>{
    console.log(error);
}

export function check_for_session (loc: Location, navigate = true, user:Iuser ={}) {
  return new Promise(async (resolve, reject)=>{
    try {
        let res = await (await axios.get('api/util/session')).data;
    console.log(res);
    if(!res){ 
        user.userName
        if(navigate)  loc.href = "/login";
       if(user.email){
        let mon = await axios.put(`api/util/session?_id=${user._id}&email=${user.email}&userName=${user.userName}`);
        if(mon){
          resolve(true);
        }
       }
       else{
        resolve(false);
       }
    } 
    else {
        resolve(true);
    }
    } catch (error) {
        console.log(error);
        reject(error);
    }
  })
}

