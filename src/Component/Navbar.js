import React from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
import Cart from './Cart'
import Home from './Home'

function Navbar() {
        return (
            <div >
              <div >
                  <nav >
                        <ul >
                            <li ><Link to="/" >Home</Link></li>
                            <li ><Link to="/carts" >Carts </Link></li>
                        </ul>
                  </nav>
              </div>
            </div>
        )
    }


export default Navbar
