

import axios from "axios";



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

export function check_for_session (loc: Location, navigate = true) {
  return new Promise(async (resolve, reject)=>{
    try {
        let res = await (await axios.get('api/util/session')).data;
    console.log(res);
    if(!res){ 
        if(navigate)  loc.href = "/login";
          resolve(false);
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

