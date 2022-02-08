import React from 'react';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import TimeAgo from 'timeago-react';

export default function Message({message}) {
    const {user} = useMoralis();
    const isUserMessage = user.get("ethAddress") === message.get("ethAddress");
  return <div className={`relative flex items-end space-x-2 ${isUserMessage ? "justify-end" : ""}`}>
      <span className={`px-4 py-2 rounded-lg font-semibold text-gray-700 ${isUserMessage ? "rounded-br-none" : "rounded-bl-none"}
      ${isUserMessage ? "bg-pink-300" : "bg-blue-400"}`}>{message.get("message")}</span>
      <Avatar className={`relative h-6 w-6 ${isUserMessage ? "order-last" : "order-first"}`} userName={message.get("username")} />
      <p className={`absolute -bottom-6 text-sm ${isUserMessage ? "text-pink-500" : "text-blue-700"}`}>{message.get("username")}</p>
        <TimeAgo className={`text-sm text-gray-300 px-2 ${isUserMessage ? "order-first" : "order-last"}`} datetime={message.get("createdAt")} />
  </div>;
}
