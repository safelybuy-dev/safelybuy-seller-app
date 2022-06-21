import React, { useState } from 'react';
import moment from 'moment';
import person3 from 'assets/images/image3.jpeg';
import { PaperClip, Send } from 'svg';
import { Avatar } from './Avatar';

const Message = ({ user, imageUrl, text, status, isEven, time }) => {
  return (
    <div
      className={`flex mb-4 ${isEven && 'justify-items-end flex-row-reverse'}`}>
      <Avatar image={imageUrl} status={status} styles="h-[2.5rem] w-[2.5rem]" />
      <div className={`${isEven ? 'mr-4' : 'ml-4'}`}>
        <div className={`flex items-center mb-1 ${isEven && 'text-right'}`}>
          <h4 className="mr-4 text-sm">{user}</h4>
          <small className="text-[#828282] tracking-[0.04em] text-xs">
            {moment(time).format('LT')}
          </small>
        </div>
        <div>
          <p
            className={`w-fit py-2 px-4 rounded text-sm ${
              isEven ? 'bg-[#F7F7F7]' : 'border border-[#E0E0E0]'
            }`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const CurrentChat = ({ selectedContact }) => {
  const { name, imageUrl, messages, status } = selectedContact;
  const [chat, setChat] = useState('');
  return (
    <div className="relative">
      <div className="px-8">
        <div className=" border-b pb-4 border-[#E0E0E0]">
          <h2 className="text-[1.3rem] font-semibold tracking-[0.04em]">
            {name}
          </h2>
          <p className="flex items-center mt-1">
            <span
              className={`block h-[0.65rem] w-[0.65rem] rounded-full mr-3 ${
                status === 'online' ? 'bg-[#4BBF75]' : 'bg-gray-400'
              }`}
            />
            <span className="text-[#828282] text-[1.125rem] leading-[1.438rem] tracking-[0.04em]">
              {status}
            </span>
          </p>
        </div>

        {/* Messages Here */}
        <div className="h-[20rem] py-8 px-6 overflow-y-scroll">
          {messages.map((message, index) => {
            const isEven = (index + 1) % 2 === 0;
            if (isEven) {
              return (
                <Message
                  key={index}
                  user="Me"
                  text={message.text}
                  status="online"
                  imageUrl={person3}
                  isEven
                  time={message.time}
                />
              );
            }
            return (
              <Message
                key={index}
                user={name}
                text={message.text}
                status={status}
                imageUrl={imageUrl}
                time={message.time}
              />
            );
          })}
        </div>
      </div>
      <div className="border-t border-[#E0E0E0] bg-white z-50  py-4 px-6  w-full">
        <div className="flex items-center">
          <div className="flex-[0.07]">
            <button type="button">
              <PaperClip />
            </button>
          </div>
          <div className="flex items-center flex-[0.8] border-2 border-[#8661FF] border-opacity-40 h-[2.813rem] rounded-full py-1 px-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 mr-2 h-full outline-none"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
            <button
              type="button"
              className="rounded-full bg-[#4BBF75] bg-opacity-10 h-[2.125rem] w-[2.125rem] flex justify-center items-center text-center">
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Chat({ selectedContact }) {
  return (
    <div className="flex-[0.6]">
      {!selectedContact ? (
        <div className="p-5">
          <p className="text-gray-400 text-2xl">
            Select a chat to start messaging
          </p>
        </div>
      ) : (
        <CurrentChat selectedContact={selectedContact} />
      )}
    </div>
  );
}

export default Chat;
