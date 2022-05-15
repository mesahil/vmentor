import React, { useState } from 'react'
import '../Styles/AddPost.css'

function AddPost() {
    const [id,setId]=useState();
    const [userId,setUserId]=useState();
    const [title,setTitle]=useState();
    const [body,setBody]=useState();


    const FormReset=()=>{
        setId('');
        setUserId('');
        setTitle('');
        setBody('');
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`,{
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
              }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const json = await response.json()
        console.log('response in json', json)
        alert('New post created successfully !!')
        FormReset()
    }

  return (
    <div className='wrapper'>
        <form className='form' onSubmit={(e)=>handleSubmit(e)}>
            <div className='form__field'>
                <label className='form__label'>ID</label>
                <input className='form__input' type={"number"} onChange={e=>setId(e.target.value)} value={id} placeholder="Enter ID here"/>
            </div>
            <div className='form__field'>
                <label className='form__label'>User ID</label>
                <input className='form__input' type={"text"} onChange={e=>setUserId(e.target.value)} value={userId} placeholder="Enter User ID here"/>
            </div>
            <div className='form__field'>
                <label className='form__label'>Title</label>
                <input className='form__input' type={"text"} onChange={e=>setTitle(e.target.value)} value={title} placeholder="Enter Title here"/>
            </div>
            <div className='form__field'>
                <label className='form__label'>Body</label>
                <textarea className='form__body' rows={4} onChange={e=>setBody(e.target.value)} value={body} placeholder="Enter Body here"/>
            </div>
            <button className='form__submit'>Submit</button>
            
        </form>
    </div>
  )
}

export default AddPost