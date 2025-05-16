import React, { useState } from 'react';
import Header from '../Components/Header';
import { CiSearch } from 'react-icons/ci';
import ChatUser from '../Components/ChatUser';
import userdp from '/userdp.png'
import { GoDotFill } from "react-icons/go";
import { EllipsisVertical } from "lucide-react";

const Chat = () => {

  const users = [
    { id: 1, name: 'Sarthak',url:'/userdp2.png' },
    { id: 2, name: 'Arnav Sharma' },
    { id: 3, name: 'Piyush Srinivasan' },
    { id: 4, name: 'Anvesha shoumya' },
    { id: 5, name: 'Arnav Sharma' },
    { id: 6, name: 'Arnav Sharma' },
    { id: 7, name: 'Arnav Sharma', url:'/userdp.png' },
    { id: 7, name: 'Arnav Sharma', url:'/userdp.png' },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  const [report, setReport] = useState(false);
  const handleReport = () => {
    setReport(!report);
  };
  return (
    <div className="w-full h-screen flex flex-col">
      <Header color={"#394ff1"} textColor={"white"} />
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left panel */}
        <div className="w-full lg:w-1/4 flex flex-col lg:pt-2">
          {/* Search bar */}
          <div className="flex items-center bg-indigo-50 rounded-md border-[1.5px] border-zinc-100 px-2 mx-4 mt-2 font-poppins">
            <CiSearch size={22} className="text-[#64707D] lg:size-7 lg:ml-1" />
            <input
              className="rounded-xl px-2 outline-none w-full placeholder:text-zinc-500 text-black py-2 text-sm bg-indigo-50"
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
              <ChatUser key={user.id} user={user} onClick={handleUserClick} />
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="w-full lg:w-3/4 flex flex-col relative">
          <div className="w-full h-[10vh] flex items-center px-6 font-semibold text-lg">
            {selectedUser ? <div className='flex items-center pt-2 pb-2 w-full cursor-pointer'>
              {selectedUser.url ? <img src={selectedUser.url} alt="user profile image" className='lg:size-12' /> : <img src={userdp} alt="user profile image" className='lg:size-12' />}
              <div className='flex justify-between lg:pl-3 lg:pr-3 w-full'>
                <div className='flex flex-col leading-5 text-black'>
                  <h1 className='font-robotoFlex font-medium lg:text-[1.1vw] tracking-wider'>{selectedUser.name}</h1>
                </div>
                <div className='flex items-center justify-center font-robotoFlex font-medium gap-7'>
                  <div className='flex items-center justify-center lg:pr-1 text-green-500 gap-2'>
                    <GoDotFill className='lg:size-3' />
                    <h1 className='lg:text-sm font-medium tracking-wider'>Active</h1>
                  </div>
                  <button onClick={handleReport}>
                    <EllipsisVertical />
                  </button>
                  <div
                    className={`bg-slate-400 text-black font-medium py-3 px-10 rounded-md ${report ? "block" : "hidden"
                      } absolute top-[18vh] right-11 flex flex-col gap-6 text-sm`}
                  >
                    <button className="w-full">
                      Report Product
                    </button>
                    <button className="w-full">
                      Report a user
                    </button>
                    <button className="w-full">
                      Raise a issue
                    </button>
                  </div>
                </div>
              </div>
            </div> : ''}
          </div>
          <div className="bg-gradient-to-b from-indigo-50 to-sky-100 w-full h-full flex items-center justify-center text-zinc-500 text-xl">
            {selectedUser ? (
              <div>Messages with {selectedUser.name} will appear here.</div>
            ) : (
              'Select a chat to start messaging'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
