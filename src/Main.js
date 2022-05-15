import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Homepage from "./Components/Homepage"
import AddPost from "./Components/AddPost"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function Main() {
  return (
    <div>
      <Router>
        <>
      <Navbar></Navbar>
      
      <div style={{marginTop:'5em'}}>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route  path="/addpost" element={<AddPost/>}/>
            <Route path="*" element={<h1>404 Page not found</h1>}/>
          </Routes>
            </div>
        </>
        <Footer/>
        </Router>
      
    </div>
  )
}

export default Main