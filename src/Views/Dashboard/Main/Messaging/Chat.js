import React from "react";
import moment from "moment";
import { isToday } from "../NotificationDetails";
import person3 from "../../../../assets/images/image3.jpeg";
import { PaperClip, SearchIcon, Send } from "../../../../svg";

const Chat = ({ selectedContact }) => {
  return (
    // <div className="relative w-7/12 border-r border-b">
    <div className="w-7/12 border-r border-b relative overflow-scroll">
      <header className="sticky top-0 z-10 bg-white shadow-inner px-4 border-b py-4 border-gray-200">
        <h3 className="text-2xl">{selectedContact.name}</h3>
        <span
          className={`inline-block w-3 h-3 mr-2 bg-${
            selectedContact.status === "online" ? "green" : "gray"
          }-400 rounded-full`}
        ></span>
        <span className="capitalize text-gray-400">
          {selectedContact.status}
        </span>
      </header>
      <div className="flex overflow-y-scroll flex-col py-6">
        {selectedContact.messages.map((message) => (
          <div
            className={`p-6 text-sm flex ${
              message.sent ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start ${
                message.sent ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className={`relative ${message.sent ? "ml-4" : "mr-4"}`}>
                <img
                  className="rounded-full flex-shrink-0"
                  height="50"
                  width="50"
                  src={!message.sent ? selectedContact.imageUrl : person3}
                  alt={selectedContact.name}
                />
                <span
                  className={`inline-block w-3 h-3 mr-2 bg-${
                    selectedContact.status === "online" || message.sent
                      ? "green"
                      : "gray"
                  }-400 rounded-full bottom-1 absolute left-10`}
                ></span>
              </div>
              <div className={!message.sent ? "text-left" : "text-right"}>
                <span className="inline-block px-3 font-semibold">
                  {!message.sent ? selectedContact.name : "Me"}
                </span>
                <span className="opacity-40">
                  {isToday(new Date(message.time))
                    ? "Today, " + moment(message.time).format("hh:mm a")
                    : moment(message.time).format("MMM D, hh:mm a")}
                </span>
                <div
                  className={`${
                    message.sent ? "bg-gray-200" : "border border-gray-200"
                  } px-4 mt-2 py-2 rounded-lg shadow-inner`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bg-white flex bottom-0 right-0">
        <PaperClip />
        <input
          className="w-11/12 border-2 border-purple-300 focus:outline-none mb-4 px-8 py-2 rounded-full"
          type="search"
          placeholder="Search chats"
        />
        <span className="absolute top-3 right-16">
          <SearchIcon />
        </span>
      </div>
    </div>
    // </div>
  );
};

export default Chat;
