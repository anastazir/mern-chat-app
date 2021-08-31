import React from 'react';
import { Chat } from 'stream-chat-react'
import {StreamChat} from 'stream-chat'
import Cookies from 'universal-cookie'

const apiKey = 'YOURAPIKEY'

const client= StreamChat.getInstance(apiKey)

function App() {
  return (
    <div className="App">
        <Chat client={client} theme= 'team light'>

        </Chat>
    </div>
  );
}

export default App;
