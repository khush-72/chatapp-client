import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="" />
      <div className="sidebarChat__info">
        <h2>Khush</h2>
        <p>This was the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
