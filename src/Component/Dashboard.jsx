import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-screen flex items-center justify-center h-screen'>
      <div className='h-2/4 flex '>
        <div>
            <img src="src/pic/logodice.png" alt="" />
        </div>
        <div className='w-[50%] flex flex-col items-end gap-10 justify-center'>
            <p className='text-8xl font-extrabold'>DICE GAME</p>
            <Link to="/gamezone"> <button className='bg-black py-4 px-14 text-xl hover:bg-slate-800 rounded-lg text-white flex justify-center items-center'>Play Now</button>
            </Link>   </div>
      </div>
    </div>
  )
}

export default Dashboard
