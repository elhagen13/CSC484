import {UserContext} from "@/components/UserProvider";
import {useContext} from "react";

function Profile(){
    const { user } = useContext(UserContext)!;
    console.log(user?.username)

    return(
        <div style={{width: '100%', height: '100%'}}>

        </div>
    )
}
export default Profile