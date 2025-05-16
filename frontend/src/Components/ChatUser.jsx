import React from 'react'
import userdp from '/userdp.png'
import dot from '/dot.png'


const ChatUser = ({ user, onClick }) => {

  return (
      <div onClick={() => onClick(user)} className='flex items-center pt-2 pb-2 w-full cursor-pointer active:bg-blue-200 duration-200 ease-linear hover:bg-blue-200'>
          {user.url ? <img src={user.url} alt="user profile image" className='lg:size-12' /> : <img src={userdp} alt="user profile image" className='lg:size-12' />}
          <div className='flex justify-between lg:pl-3 lg:pr-3 w-full'>
              <div className='flex flex-col leading-5 text-black'>
                  <h1 className='font-robotoFlex font-medium lg:text-sm tracking-wider'>{user.name}</h1>
                  <h3 className='font-light font-robotoFlex text-gray-500 lg:text-xs '>Hey, tell me your final price.</h3>
              </div>
              <div className='flex flex-col text-black font-robotoFlex font-medium'>
                  <h1 className='lg:text-xs tracking-wider'>19:44</h1>
                  <div className='flex items-center justify-center lg:pt-1'>
                      <img src={dot} alt="image" className='lg:size-2' />
                  </div>

              </div>
          </div>
    </div>
  )
}

export default  ChatUser