import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <ul>
            {/*<li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
            {/* BUT THERE IS A PROBLEM WITH ABOVE APPROACH THAT THE PAGE IS RELOADING SO WE WILL USE LINK COMPONENT PROVIDED BY REACT ROUTER.*/}

            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to ="/contact">Contact</Link></li>*/}

            {/* BUT THERE IS A PROBLEM WITH ABOVE Link AS WE CANNOT APPLY CSS IN THAT SO WE WILL BE USING NAVLINK  */}
            
            <li><NavLink to="/"  style={({isActive})=>{return{color:isActive?'violet':''}}}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive})=>{return{color:isActive?'green':''}}}>About</NavLink></li>
            <li><NavLink to ="/contact" style={({isActive})=>{return{color:isActive?'blue':''}}}>Contact</NavLink></li>
            <li><NavLink to ="/post/mobile" style={({isActive})=>{return{color:isActive?'orange':''}}}>Post</NavLink></li>
            <li><NavLink to ="/post/mobile/1" style={({isActive})=>{return{color:isActive?'yellow':''}}}>Post with ID</NavLink></li>

        </ul>
    
    </>
  )
}

export default Navbar