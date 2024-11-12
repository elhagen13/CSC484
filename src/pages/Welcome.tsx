import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

function Welcome(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }

    return(
        <div style={{width: '100%', height: '100%', fontFamily: 'Inter',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            flexDirection: 'column', gap:'30px'
        }}>
            <img src='/logo.svg'/>
            <text style={{fontWeight: 'bolder', fontSize: '30px'}}>
                Welcome to <br/> Hobby Hive!
            </text>
            <img src='/people.png' style={{height:'250px'}}/>
            <Button style={{backgroundColor: '#EFCA47', borderRadius:'30px', 
            boxShadow:'2px 4px 10px rgba(0, 0, 0, 0.2)'}} onClick={handleClick}>
                Get Started →
            </Button>


        </div>
    )

}
export default Welcome