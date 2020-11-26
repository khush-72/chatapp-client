import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  EmojiEmotions,
  MicTwoTone,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import axios from "./axios";
import "./Chat.css";

function Chat({ messages }) {
  const [newMessage, setNewMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: newMessage,
      name: "mkr",
      timestamp: new Date().toLocaleTimeString(),
      recieved: true,
    });

    setNewMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="" />
        <div className="chatheader__info">
          <h3>Room Name</h3>
          <p>Last seen at..</p>
        </div>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.recieved && "chat__reciever"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <EmojiEmotions />
        <form>
          <input
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
            type="text"
            placeholder="type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicTwoTone />
      </div>
    </div>
  );
}

export default Chat;
