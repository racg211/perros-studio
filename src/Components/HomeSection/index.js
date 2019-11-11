import React from 'react';
import './home.css'

import Logo from '../../img/lg.jpg';
import BG from '../../img/BG.svg'

class Home extends React.Component{
    render(){
        return (
            <section className="main">
            <div className="container-main">
                <div className="cl">
                    <div className="main-logo">
                        <img src={Logo}  className="main-logo_container"/>
                    </div>
                </div>
            </div>
            <div className="i-bt">
            </div>
        </section>
        )
    }
}

export default Home;