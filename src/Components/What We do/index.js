import React from 'react';

import Illustrator from '../../img/layers.svg';
import Desing from '../../img/paint-palette.svg';
import Animation from '../../img/vector.svg';


import './what-we-do.css';

class WhatWeDo extends React.Component{
    render (){
        return (
            <div className="container-ser">
                 <div className="title">
                    <div className="sectionTitle">
                        <h3>What We Do</h3>
                    </div>
                    <div className="descriptionSection">
                        <p className="descriptionSection_p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veniam laboriosam tenetur laborum commodi ipsam esse voluptates mollitia amet doloribus quidem animi, temporibus est aperiam consequuntur hic dolorem, accusamus nihil.
                        </p>
                    </div>
                </div>
                <div className="services">
                    <div className="services-container">
                        <img src={Illustrator} className="services-img"/>
                        <h2>Illustrator</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veniam laboriosam tenetur laborum commodi ipsam esse voluptates mollitia.</p>
                    </div>
                    <div className="services-container">
                        <img src={Desing} className="services-img"/>
                        <h2>Desing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veniam laboriosam tenetur laborum commodi ipsam esse voluptates mollitia.</p>
                    </div>
                    <div className="services-container">
                        <img src={Animation} className="services-img"/>
                        <h2>Animation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt veniam laboriosam tenetur laborum commodi ipsam esse voluptates mollitia.</p>
                    </div>
                </div>
                <div className="btn">
                    <button className="btn-project">BOTON PARA BAJAR</button>
                </div>
            </div>
        )
    }
}

export default WhatWeDo;