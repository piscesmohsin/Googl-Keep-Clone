import React from 'react'
import {Link } from 'react-router-dom'
import '../Style/homepage.css'
const Homepage = () => {
  return (
    <div className='home-main-container'>
    <ol>
        <li>
            <Link to='todolist'>Todolist</Link>   
        </li>
        <li> <Link to='googlekeep'>Google Keep</Link> </li>
    </ol>
    </div>
  )
}

export default Homepage