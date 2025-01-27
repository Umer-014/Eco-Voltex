import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon from react-icons
import "./LiveChat.css"

const LiveChat = () => {
    const handleClick = () => {
        const phoneNumber = '+923208431556'; // Replace with your WhatsApp phone number
        const message = 'Hi';  // Default message
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="chat-icon" onClick={handleClick}>
            <FaWhatsapp size={30} color="white" />
        </div>
    );
};

export default LiveChat;
