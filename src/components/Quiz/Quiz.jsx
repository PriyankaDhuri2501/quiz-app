import React from 'react'
import './Quiz.css'

const quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz App</h1>
        <hr/>
        <h2>Which device is required for Internet connection</h2>
        <ul>
            <li>Router</li>
            <li>Modem</li>
            <li>LAN Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className='index'>1 0f 5</div>
    </div>
  )
}

export default quiz
