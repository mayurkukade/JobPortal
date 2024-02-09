import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const useauthHooks = ()=>{
    
    const cookie = Cookies.get("cookie")
    console.log(cookie)
    let useDecode
    if(cookie){
         useDecode = jwtDecode(cookie)
    }else{
         useDecode = null
    }

    
    console.log(useDecode,'authHook')
return  {useDecode}


}