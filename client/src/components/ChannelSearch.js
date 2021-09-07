import React, {useEffect,useState} from 'react'
import {useChatContext} from 'stream-chat-react'

import {SearchIcon} from "../assets"

function ChannelSearch() {
    const [query, setQuery]= useState('')
    const [loading, setLoading] = useState(false)
    const getChannels= async (text) => {
        try {
            //Todo: fetch channels
        } catch (error) {
            setQuery('')
        }
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input_wrapper">
                <SearchIcon />
                <input className="channel-search__input__text"
                placeholder="Search"
                type="text"
                value={query}
                // onChange={onSearch}
            />
            </div>
        </div>
    )
}

export default ChannelSearch
