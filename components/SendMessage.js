import React, { useState } from "react";
import { useMoralis } from "react-moralis";

export default function SendMessage({lastMessagePositionRef}) {
  const [message, setMessage] = useState("");
  const { user, Moralis } = useMoralis();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages.save({
        message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
    }).then(
        (message) => {

        },
        (error) => {
            console.log("error: ", error);
        }
    )

    setMessage("");
    lastMessagePositionRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <form className="fixed bottom-10 bg-slate-900 py-3 px-5 rounded-full border-4 border-blue-500 max-w-2xl left-1/2 -translate-x-1/2 w-11/12 flex">
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder={`Enter your message ${user.getUsername()}...`}
        className="outline-none bg-transparent flex-grow mr-5 text-gray-300"
        type="text"
      />
      <button onClick={handleSendMessage} type="submit" className="text-pink-600 text-base font-semibold">
        Send
      </button>
    </form>
  );
}
