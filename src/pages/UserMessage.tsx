import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import fakeMessages from '@/fakeMessages';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserMessage() {
  const { userId } = useParams();
  const [val, setVal] = useState('');
  const [newMessages, setNewMessages] = useState<string[]>([]);
  const [isShift, setIsShift] = useState(false);  // Track shift state for uppercase
  const [isCapsLock, setIsCapsLock] = useState(false);  // Track caps lock state

  const onKeyPress = (button: string) => {
    if (button === '{enter}') {
      setNewMessages((prevMessages) => [...prevMessages, val]);
      setVal('');
    }
    else if (button === '{bksp}') {
      setVal((prevVal) => prevVal.slice(0, -1));  // Remove last character
    }
    else if (button === '{space}') {
      setVal((prevVal) => prevVal + ' ');  // Add space
    }
    else if (button === '{shift}') {
    }
    else if (button === '{lock}') {
      setIsCapsLock((prev) => !prev);  // Toggle caps lock state
    }
    else {
      // Determine if the character should be upper or lowercase
      const charToAdd = (isCapsLock || isShift) ? button.toUpperCase() : button.toLowerCase();
      setVal((prevVal) => prevVal + charToAdd);  // Add the character to the input
    }
  };

  const user = fakeMessages.find((message) => message.id === parseInt(userId ?? '1'));

  return (
    <div style={{ position: 'fixed', width: '500px', height: '100%'}}>
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

      {/* Display new messages typed by the user */}
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
