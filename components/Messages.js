import React, { useEffect, useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MIN_DURATION = 15;

export default function Messages() {
  const { user } = useMoralis();
  const lastMessagePositionRef = useRef(null);
  const { data, error, isLoading } = useMoralisQuery(
    "Messages",
    (query) => {
      return query
        .ascending("createdAt")
        .greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MIN_DURATION));
    },
    [],
    {
        live: true
    }
  );

  useEffect(() => {
    lastMessagePositionRef.current.scrollIntoView({behavior: "smooth"});
  }, [data])

  return (
    <div className="pb-44 2xl:pb-56 max-w-5xl mx-auto px-5">
      <div className="mt-6">
        <ByMoralis variant="dark" style={{ margin: "0 auto" }} />
      </div>
      <div className="mt-8 space-y-8">
          {
              data.map((message) => {
                  return <Message key={message.id} message={message} />
              })
          }
      </div>
      <p ref={lastMessagePositionRef} className="pt-10 text-center text-gray-300 font-semibold">
        You're up to date {user.getUsername()}
      </p>
      <div className="">
        <SendMessage lastMessagePositionRef={lastMessagePositionRef} />
      </div>
    </div>
  );
}
