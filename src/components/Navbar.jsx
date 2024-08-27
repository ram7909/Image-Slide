import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="bg-image">
                <nav>
                    <div className="left">
                        <div className="logo">BrainyLingo</div>
                    </div>
                    <div className="mid">
                        <ul>
                            <li>Home</li>
                            <li>Leaderboard</li>
                            <li>Daily Quiz</li>
                        </ul>
                    </div>
                    <div className="right">
                        <button className='sign-out'>Sign Out</button>
                    </div>
                </nav>
                <div className="head"><h1>Science Fiction Stories</h1></div>
                
                <div className="status">
                    <button className='new'>New</button>
                    <button className='progres'>In Progress</button>
                    <button className='completed'>Completed</button>
                    <button className='clear'>Clear All</button>
                </div>
            </div>
        </>
    )
}

export default Navbar