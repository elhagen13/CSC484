import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home')
    }

    return(
        <div style={{width: '100%', height: '100%', fontFamily: 'Inter',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            flexDirection: 'column', gap:'30px', padding:'80px'
        }}>
        <text style={{fontWeight: 'bolder', fontSize: '30px', width:'100%',
                textAlign:'left'}}>
            LOGIN
        </text>
        <form style={{width:'100%', display:'flex', flexDirection:'column', gap:'10px'}}>
            <text>username:</text>
            <input style={{backgroundColor:'#F3F3F3', height:'50px', borderRadius:'30px', paddingLeft:'25px'}}/>
            <text>password:</text>
            <input type='password' style={{backgroundColor:'#F3F3F3', height:'50px', borderRadius:'30px', paddingLeft:'25px'}}/>
        </form>
        <div style={{width:'100%', alignItems:'flex-end', display: 'flex', flexDirection: 'column', gap:"10px"}}>
            <a href='/createAccount'>new user?</a>
            <Button onClick={handleClick} style={{backgroundColor: '#EFCA47', borderRadius:'30px', 
            boxShadow:'2px 4px 10px rgba(0, 0, 0, 0.2)', fontWeight: 'bold', width: '100px'}} >
                login
            </Button>
        </div>


    </div>
    )
}
export default Login
