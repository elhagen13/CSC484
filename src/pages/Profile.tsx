import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom';

function Profile(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }

    return(
        <div style={{width: '100%', height: '100%', padding: 10, background: 'black', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{width: '100%', height: 150, paddingLeft: 31, paddingRight: 31, paddingTop: 8, paddingBottom: 8, background: '#FFFAEA', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{width: 78, height: 61, position: 'relative'}}>
            <div style={{width: 78, height: '50%', left: 0, top: 0, position: 'absolute'}}>
                <img src='/logo.svg'/>
            </div>
        </div>
    </div>
    <div style={{width: '100%', height: 38, background: 'black'}} />
    <div style={{width: 330, height: 704, padding: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
        <div style={{width: 167, height: 52, color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word'}}>PROFILE</div>
        <form style={{width:'100%', display:'flex', flexDirection:'column', gap:'10px'}}>
            <text>name:</text>
            <input style={{backgroundColor:'#F3F3F3', height:'50px', borderRadius:'30px', paddingLeft:'25px'}}/>
        </form>
        <text>upload profile picture:</text>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input id="picture" type="file" />
    </div>
        <form style={{width:'100%', display:'flex', flexDirection:'column', gap:'10px'}}>
            <text>bio:</text>
            <input type='password' style={{backgroundColor:'#F3F3F3', height:'50px', borderRadius:'30px', paddingLeft:'25px'}}/>
        </form>
    </div>
    <div style={{width: '100%', height: 139, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, background: '#FFFAEA', borderRadius: 20, overflow: 'hidden', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <div style={{width: 144, height: '50%', position: 'relative'}}>
            <Button style={{backgroundColor: '#EFCA47', borderRadius:'30px', 
            boxShadow:'2px 4px 10px rgba(0, 0, 0, 0.2)'}} onClick={handleClick}>
                continue →
            </Button>
        </div>
    </div>
</div>
    )
}
export default Profile
export {}