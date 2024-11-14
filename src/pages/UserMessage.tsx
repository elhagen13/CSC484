import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import fakeMessages from '@/fakeMessages';
import { useState } from 'react';
import {useParams} from 'react-router-dom'

function UserMessage() {
  const {userId} = useParams();
  const [input, setInput] = useState('');
  const newMessages = []
  const onChange = (input : string) => {
    setInput(input);
  };

  const user = fakeMessages.find((message) => message.id === parseInt(userId ?? "1"))
  
  return (
    <div style={{ width: "500px", height: "100%", padding: '20px', position: 'relative' }}>
      {
        user?.messages.map((message, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: message.other ? 'blue' : 'green',
                margin: '10px',
                padding: '10px 20px 10px 20px',
                maxWidth: '250px',
                width: 'fit-content',
                borderRadius: '20px',
                color: 'white',
                alignSelf: message.other ? 'flex-start' : 'flex-end', 
                marginLeft: message.other ? '0' : 'auto',
                marginRight: message.other ? 'auto' : '0', 
              }}
            >
              {message.message}
            </div>
          );
        })
      }
      <input value={input} placeholder="Tap to type" readOnly />
      <div style={{ position: 'absolute', left:'0px', bottom: '60px', width: '500px' }}>
        <Keyboard />
      </div>
    </div>
  );
}
export default UserMessage;
