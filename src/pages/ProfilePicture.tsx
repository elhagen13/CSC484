function ProfilePicture(){
    return(
        <div style={{width: '100%', height: '100%', fontFamily: 'Inter',
            display: 'flex', justifyContent: 'center',
            flexDirection: 'column', gap:'30px', padding:'80px'
        }}>
            <text style={{fontWeight: 'bolder', fontSize: '30px', width:'100%',
                    textAlign:'left'}}>
                CREATE PROFILE
            </text>
            <div style={{width: '200px', height: '200px', backgroundColor:'#F3F3F3', 
            display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px'}}>
                <text style={{fontSize:'80px', color:'gray'}}>
                    +
                </text>
            </div>
        </div>
    )
}
export default ProfilePicture