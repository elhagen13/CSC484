import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import fakeMessages from '@/fakeMessages';
import fakePeople from '@/fakePeople'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserMessage() {
  const { userId } = useParams();
  const [val, setVal] = useState('');
  const [newMessages, setNewMessages] = useState<string[]>([]);
  const [isCapsLock, setIsCapsLock] = useState(false);  
  const navigate = useNavigate();


  const onKeyPress = (button: string) => {
    if (button === '{enter}' && val !== '') {
      setNewMessages((prevMessages) => [...prevMessages, val]);
      setVal('');
    }
    else if (button === '{bksp}') {
      setVal((prevVal) => prevVal.slice(0, -1));  
    }
    else if (button === '{space}') {
      setVal((prevVal) => prevVal + ' ');  
    }
    else if (button === '{shift}') {
    }
    else if (button === '{lock}') {
      setIsCapsLock((prev) => !prev);  
    }
    else {
      const charToAdd = (isCapsLock) ? button.toUpperCase() : button.toLowerCase();
      setVal((prevVal) => prevVal + charToAdd); 
    }
  };

  const goBack = () =>{
    navigate(-1)
  }

  const user = fakeMessages.find((message) => message.id === parseInt(userId ?? '1'));
  const userInfo = fakePeople.find((person) => person.id === parseInt(userId ?? '1'));
  return (
    <div style={{ position: 'fixed', width: '500px', height: '100%'}}>
      <div style={{position: 'relative', width:'100%', height:'90px', backgroundColor:'#EFCA47', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <button style={{position: 'absolute', left: '20px', fontSize:'30px'}} onClick={goBack}>
            ←
        </button>
        <div style={{ marginRight: "15px",
          backgroundColor: "#333", borderRadius: "50%", 
          padding: "10px", display: "flex", alignItems: "center",
          justifyContent: "center", width: "50px", height: "50px"}}>
          <div style={{ width: "30px", height: "30px", color: "#EFCA47", marginTop: "5px"}}>
            {userInfo?.avatar}
          </div>
        </div>
        <div>
            {userInfo?.firstName} {userInfo?.lastName}
        </div>
      </div>
      <div style={{padding:'20px', height:'53%', overflowY:'scroll'}}>
      {user?.messages.map((message) => {
        return (
          <div
            style={{
              backgroundColor: message.other ? '#E4E4E4' : 'none',
              outline: message.other ? 'none' : '2px solid #E4E4E4',
              margin: '10px',
              padding: '10px 20px 10px 20px',
              maxWidth: '250px',
              width: 'fit-content',
              borderRadius: '20px',
              color: 'black',
              alignSelf: message.other ? 'flex-start' : 'flex-end',
              marginLeft: message.other ? '0' : 'auto',
              marginRight: message.other ? 'auto' : '0',
            }}
          >
            {message.message}
          </div>
        );
      })}

      {newMessages.map((message, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: 'none',
              outline: '2px solid #E4E4E4',
              margin: '10px',
              padding: '10px 20px 10px 20px',
              maxWidth: '250px',
              width: 'fit-content',
              borderRadius: '20px',
              color: 'black',
              alignSelf: 'flex-end',
              marginLeft: 'auto',
              marginRight: '0',
            }}
          >
            {message}
          </div>
        );
      })}
      </div>
      <div style={{ position: 'fixed', left: '0px', bottom: '60px', width: '500px' }}>
        <input
          value={val} readOnly 
          style={{width: '470px', padding: '5px 10px 5px 10px', borderRadius:'10px', outline: '2px solid #E4E4E4', margin:'10px 10px 10px 10px' }}
        />
        <Keyboard onKeyPress={onKeyPress} />
      </div>
    </div>
  );
}

export default UserMessage;
