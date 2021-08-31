import React from 'react';
import { Chat } from 'stream-chat-react'
import {StreamChat} from 'stream-chat'
import Cookies from 'universal-cookie'

import ChannelContainer from './components/ChannelContainer';
import ChannelListContainer from './components/ChannelListContainer';

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
