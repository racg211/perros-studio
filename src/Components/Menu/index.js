import React from 'react';
import './menu.css'

import Logo from '../../img/lg.jpg'
import Dribble from '../../img/dribbble.svg'
import Behance from '../../img/behance.svg';
import Instagram from '../../img/instagram-c.svg'



class Menu extends React.Component{
    render() {
        return (
           <div className="container">
               <div className="menu">
                   <div className="logo">
                       <img src={Logo} className="logo-img"/>
                   </div>
                   <div className="menu-items">
                    <div className="menu-items_a">
                        <a className="anchers">What we do</a>
                        <a className="anchers">Works</a>
                        <a className="anchers">Contact</a>
                        <a className="anchers-icons">
                            <img src={Behance} className="social-icons"/>
                        </a>
                        <a className="anchers-icons">
                            <img src={Dribble} className="social-icons"/>
                        </a>
                        <a className="anchers-icons">
                            <img src={Instagram} className="social-icons"/>
                        </a>
                        </div>
                   </div>
               </div>
           </div>
        )
    }    
}

export default Menu;