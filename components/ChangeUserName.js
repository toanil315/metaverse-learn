import React from 'react';
import { useMoralis } from 'react-moralis';

export default function ChangeUserName() {
    const {user, setUserData} = useMoralis();

    const handleChangeUserName = () => {
        const userName = prompt(`Change user name (current: ${user.getUsername()}):`);
        if(!userName) return;
        setUserData({
            username: userName
        });
    }

  return <p onClick={handleChangeUserName} className="absolute top-5 right-5 text-sm text-pink-500 cursor-pointer hover:text-pink-600 transition duration-150">
      Change user name
  </p>;
}
