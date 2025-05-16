import React, { useState } from 'react';
import Header from '../Components/Header';
import { CiSearch } from 'react-icons/ci';
import ChatUser from '../Components/ChatUser';
import userdp from '/userdp.png';
import { GoDotFill } from "react-icons/go";
import { EllipsisVertical } from "lucide-react";
import { Link } from 'react-router-dom';
import { IoSend } from "react-icons/io5";

const Chat = () => {
  const users = [
    { id: 1, name: 'Sarthak', url: '/userdp2.png' },
    { id: 2, name: 'Arnav Sharma' },
    { id: 3, name: 'Piyush Srinivasan' },
    { id: 4, name: 'Anvesha shoumya' },
    { id: 5, name: 'Arnav Sharma' },
    { id: 6, name: 'Arnav Sharma' },
    { id: 7, name: 'Arnav Sharma', url: '/userdp.png' },
    { id: 8, name: 'Arnav Sharma', url: '/userdp.png' },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [report, setReport] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // On mobile, hide the sidebar after selecting a user
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  const handleReport = () => {
    setReport(!report);
  };

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (chatInput.trim()) {
      const newMessage = {
        text: chatInput,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setChatInput('');
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <Header color={"#394ff1"} textColor={"white"} />

      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile toggle button */}
        {!showSidebar && (
          <button
            onClick={toggleSidebar}
            className="md:hidden absolute top-2 left-2 z-50 bg-indigo-100 rounded-full p-2"
            aria-label="Toggle sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        )}

        {/* Left panel - Sidebar */}
        <div className={`${showSidebar ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-1/3 lg:w-1/4 bg-white border-r border-zinc-200 z-40 absolute md:relative inset-0`}>
          {/* Mobile close button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden self-end p-2 m-2"
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Search bar */}
          <div className="flex items-center bg-indigo-50 rounded-md border-[1.5px] border-zinc-100 px-2 mx-4 mt-2 font-poppins">
            <CiSearch className="text-[#64707D] text-xl md:text-2xl" />
            <input
              className="rounded-xl px-2 py-2 outline-none w-full placeholder:text-zinc-500 text-black text-sm bg-indigo-50"
              placeholder="Search chats..."
              type="text"
              name="search"
              id="search"
              aria-label="Search chats"
            />
          </div>

          {/* Chat user list */}
          <div className="flex-1 overflow-y-auto mx-4 mt-3 pl-2">
            {users.map((user) => (
              <ChatUser
                key={user.id}
                user={user}
                onClick={() => handleUserClick(user)}
                isSelected={selectedUser && selectedUser.id === user.id}
              />
            ))}
          </div>
        </div>

        {/* Right panel - Chat */}
        <div className={`${showSidebar && window.innerWidth < 768 ? 'hidden' : 'flex'} md:flex flex-col w-full md:w-2/3 lg:w-3/4`}>
          {/* Chat header */}
          {selectedUser ? (
            <div className="border-b border-zinc-200 p-3 md:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Mobile back button */}
                  <button
                    onClick={toggleSidebar}
                    className="md:hidden"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* User profile */}
                  <div className="flex items-center">
                    {selectedUser.url ? (
                      <img src={selectedUser.url} alt="user profile" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    ) : (
                      <img src={userdp} alt="user profile" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    )}

                    <div className="ml-3">
                      <h2 className="font-medium text-base md:text-lg">{selectedUser.name}</h2>
                      <div className="flex items-center text-green-500 text-xs md:text-sm">
                        <GoDotFill className="mr-1" />
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Options button */}
                <div className="relative">
                  <button onClick={handleReport} aria-label="More options">
                    <EllipsisVertical className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  {/* Dropdown menu */}
                  {report && (
                    <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md border border-zinc-200 z-50">
                      <Link to="/" className="block px-4 py-2 hover:bg-indigo-50 text-sm">
                        Report user
                      </Link>
                      <Link to="/" className="block px-4 py-2 hover:bg-indigo-50 text-sm">
                        Raise an issue
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-16 border-b border-zinc-200"></div>
          )}

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-indigo-50 to-sky-100 p-4">
            {selectedUser ? (
              messages.length > 0 ? (
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-white text-black'
                        }`}>
                        {msg.text}
                        <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-indigo-100' : 'text-zinc-500'}`}>
                          {msg.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-zinc-500 text-base md:text-lg">
                  Start chatting with {selectedUser.name}
                </div>
              )
            ) : (
              <div className="h-full flex items-center justify-center text-zinc-500 text-base md:text-lg">
                Select a chat to start messaging
              </div>
            )}
          </div>

          {/* Message input */}
          {selectedUser && (
            <form
              onSubmit={handleSendMessage}
              className="p-3 md:p-4 border-t border-zinc-200"
            >
              <div className="flex items-center border border-zinc-300 rounded-full">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 md:py-3 outline-none rounded-l-full text-sm md:text-base"
                />
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-2 md:p-3 mx-1"
                  aria-label="Send message"
                >
                  <IoSend className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;