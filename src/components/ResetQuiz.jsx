import React from 'react'

// million-ignore
export default function ResetQuiz() {
    function handleClick() {
        window.location.reload();
    }
  return (
   <div className="center">
     <button onClick={handleClick} className='reset-button' >Play again!</button>
   </div>
  )
}
