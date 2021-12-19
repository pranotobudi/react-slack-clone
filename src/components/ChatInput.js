import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { firebaseConfig } from '../firebase';
import { initializeApp } from "firebase/app";
import { collection, addDoc, doc, getDoc, getFirestore, Timestamp } from "firebase/firestore"; 
import { useSelector } from "react-redux"
import { selectRoomId, selectRoomName } from '../features/appSlice'

export default function ChatInput(channelName, channelId) {
    const [input, setInput] = useState("");
    const roomId = useSelector(selectRoomId);
    const roomName = useSelector(selectRoomName);
    console.log("ChatInput-selectRoomId: ", roomId);    
    console.log("ChatInput-channelName: ", channelName);    
    console.log("ChatInput-channelId: ", channelId);    

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    // const docRef = doc(db, "rooms", channelId);
    // const docSnap = await getDoc(docRef);
    
    // await setDoc(doc(db, "cities", "new-city-id"), data);
     
    const sendMessage = async (e) => {
        channelId=roomId
        console.log("input: ", input)
        console.log("channelID: ", channelId)
        e.preventDefault(); // prevent refresh
        if (!channelId){
            return false;
        }
        try {
            const docRef = await addDoc(collection(db, "rooms", channelId.toString(), "messages"), {
                message: input,
                timestamp: Timestamp.now(),
                user:'Pranoto Budi',
                userImage: "https://randomuser.me/api/portraits/men/17.jpg",
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setInput("");
    };

    return (
        <ChatInputContainer>
            <form>
                <input 
                value={input} 
                onChange={(e)=>setInput(e.target.value)}
                placeholder={`Message #${roomName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position : fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;