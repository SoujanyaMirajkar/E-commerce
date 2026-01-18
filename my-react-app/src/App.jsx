import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


 function App() { 
        const[chatMessages,setChatMessages] = useState([{
            message:"hello", sender:"user",id:'id1'
        },
        {
            message:"hey! how can i help u", sender:"robot", id:'id2'
        },
        {
            message:"can you tell me today's date?", sender:"user", id:'id3'
        },
        {
            message:"Today is January 15", sender:"robot", id:'id4'
        }
        ])

        
        /*
        const chatMessages=array[0];
        const setChatMessages = array[1];
        */

        return (
        <div className="app-container">
        
        <ChatMessages
            chatMessages={chatMessages}
        />
        <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        />
      </div>
        );
      }

export default App
