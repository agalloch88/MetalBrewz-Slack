import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';

function Chat() {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot) => {
            setChannel(snapshot.data());
        })
    }

    useEffect(() => {
        getChannel();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                <ChannelName>
                   # {channel && channel.name}
                </ChannelName>
                    <ChannelInfo>
                        Project-wide announcements and content-related matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default Chat;

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    justify-content: space-between;
`

const Channel = styled.div`

`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

const MessageContainer = styled.div`
    
`

