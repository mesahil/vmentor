import {React,useEffect,useState} from 'react'
import CardComp from './Card'
import '../Styles/Homepage.css'



function Homepage() {
    const [posts,setPosts]=useState();

    useEffect(() => {
        const GetData = async()=>{
            const response = await (await fetch('http://jsonplaceholder.typicode.com/posts/?_limit=9')).json();
            setPosts(response)
        }
        GetData()
      },[]);
    
  return (
    <div className='DisplayGrid'>
        {
            posts?.map(item=>(<CardComp data={item}></CardComp>)
            )
        }
        
    </div>
  )
}

export default Homepage;