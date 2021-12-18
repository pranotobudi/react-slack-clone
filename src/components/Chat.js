import React from 'react';
import styled from "styled-components";


export default function Chat() {
    return (
        <ChatContainer>
            <h1>Hello</h1>
            <Header>
                <HeaderLeft>

                </HeaderLeft>
                <HeaderRight>
                    
                </HeaderRight>
            </Header>
        </ChatContainer>
    )
}

const Header = styled.div``;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div``;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 56px;
`;