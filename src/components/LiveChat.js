import React, { forwardRef, useImperativeHandle } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import "./LiveChat.css";

const LiveChat = forwardRef((props, ref) => {
  const handleClick = () => {
    const phoneNumber = '+923208431556'; // Replace with your WhatsApp phone number
    const message = 'Hi';  // Default message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Expose the handleClick method to the parent component
  useImperativeHandle(ref, () => ({
    handleClick
  }));

  return (
    <div className="chat-icon" onClick={handleClick}>
      <FaWhatsapp size={30} color="white" />
    </div>
  );
});

export default LiveChat;
