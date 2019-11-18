import React from 'react';

import './works.css'


//IMAGES

import IMG1 from '../../img/img-1.jpg'
import IMG2 from '../../img/img-2.jpg'
import IMG3 from '../../img/img-3.jpg'
import IMG4 from '../../img/img-4.jpg'
import IMG5 from '../../img/img-5.jpg'
import IMG6 from '../../img/img-6.jpg'
import IMG7 from '../../img/img-7.jpg'
import IMG8 from '../../img/img-8.jpg'
import IMG9 from '../../img/img-9.jpg'
import IMG10 from '../../img/img-10.jpg'

class Works extends React.Component{
    render(){
        return (
            <div className="container-works">
                <div className="title">
                    <div className="sectionTitle">
                        <h3>Works</h3>
                    </div>
                    <div className="category">
                        <ul>
                            <li>Work 1</li>
                            <li>Work 2</li>
                            <li>Work 3</li>
                            <li>Work 4</li>
                        </ul>
                    </div>
                </div>
                <div className="gallery">
                    <div className="columns">
                        <img className="img-long" src={IMG1}/>
                        <img className="img-short" src={IMG7}/>
                    </div>
                    <div className="columns">
                        <img className="img-middle-1" src={IMG4}/>
                        <img className="img-middle-2" src={IMG6}/>
                        <img className="img-middle-3" src={IMG9}/>
                    </div>
                    <div className="columns">
                        <img className="img-mid-1" src={IMG5}/>
                        <img className="img-mid-2" src={IMG2}/>
                    </div>
                    <div className="columns">
                        <img className="img-xxl" src={IMG10}/>
                    </div>
                    <div className="columns">
                        <img className="img-md-1" src={IMG3}/>
                        <img className="img-md" src={IMG8}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Works;