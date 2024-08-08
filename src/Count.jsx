import React from 'react'
import {useState} from 'react' 

const Count = () => {

  const [count, setCount]= useState(0);
  const [count2, setCount2]= useState(0);

  const [comments, setComments]=useState("");

  const like = ()=>{
    setCount(count +1)
  }

  const dislike = ()=>{
    setCount2(count2 + 1)
  }

  const comment =()=>{
    setComments(<>
      <form >
       <input type='text'
    placeholder='comments'
    id='commentbox'/>
  <button  id='commentbutton'   >submit</button>
  </form> </>)
  

  

   }

  return (
    <div>
       <button onClick={like}> {count}   like👍</button>

      

       <button onClick={dislike}> {count2}   dislike👎</button>


          <button onClick={comment}>{comments}comment</button>
       
    </div>
  )
}

export default Count