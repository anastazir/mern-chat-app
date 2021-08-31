import React from 'react';
import { Chat } from 'stream-chat-react'
import {StreamChat} from 'stream-chat'
import Cookies from 'universal-cookie'

import { ChannelListContainer, ChannelContainer } from './components';

const apiKey = 'YOURAPIKEY'

const client= StreamChat.getInstance(apiKey)

function App() {
  return (
    <div className="App">
        <Chat client={client} theme= 'team light'>
            <ChannelListContainer
            
            />
            <ChannelContainer
            
            />
        </Chat>
    </div>
  );
}

export default App;
