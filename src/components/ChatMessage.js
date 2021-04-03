import React from 'react';
import styled from 'styled-components';

function ChatMessage() {
    return (
        <Container>
            <UserPic>
                <img src="https://randomuser.me/api/portraits/men/34.jpg" />
            </UserPic>
            <MessageContent>
                <Name>
                    Ryan Kirsch
                    <span>4/3/2021 1:23:00 PM</span>
                </Name>
                <Text>
                    Yooooo
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage;

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

`

const UserPic = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    :hover {
        background: opaque;
    }
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    
    span {
        margin-left: 8px;
        font-weight: 400;
        color: rgba(97,96,97);
        font-size: 13px;
    }
`

const Text = styled.span`
    
`
