import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const useauthHooks = ()=>{
    
    const cookie = Cookies.get("cookie")
const useDecode = jwtDecode(cookie)
    
    console.log(useDecode,'authHook')
return  {useDecode}


}