import React, { useEffect } from 'react'
import './srilanka.css'

import sl1 from '../Assets/1.jpg'
import sl2 from '../Assets/2.jpg'
import sl3 from '../Assets/3.jpg'
import sl4 from '../Assets/4.jpg'
import sl5 from '../Assets/5.jpg'


export const Srilanka = () => {

    useEffect(() => {
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');

        next.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        });

        prev.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        });

        
    }, []);

  return (
    <div>
        <div className="container">
            <div className="slide">

                <div className="item" style={{ backgroundImage: `url(${sl1})` }}> 
                <div className="content">
                <div className="name">Visit Sri Lanka</div>
                <div className="des">Explore the Wonders of Sri Lanka: Uncover the Rich Culture, Breathtaking
                                     Landscapes, and Exotic Adventures Await!</div>
                <button>See More</button>
                </div>
                </div>

                <div className="item" style={{ backgroundImage: `url(${sl2})` }}> 
                <div className="content">
                <div className="name">Visit Sri Lanka</div>
                <div className="des">Explore the Wonders of Sri Lanka: Uncover the Rich Culture, Breathtaking
                                     Landscapes, and Exotic Adventures Await!</div>
                <button>See More</button>
                </div>
                </div>

                <div className="item" style={{ backgroundImage: `url(${sl3})` }}> 
                <div className="content">
                <div className="name">Visit Sri Lanka</div>
                <div className="des">Explore the Wonders of Sri Lanka: Uncover the Rich Culture, Breathtaking
                                     Landscapes, and Exotic Adventures Await!</div>
                <button>See More</button>
                </div>
                </div>

                <div className="item" style={{ backgroundImage: `url(${sl4})` }}> 
                <div className="content">
                <div className="name">Visit Sri Lanka</div>
                <div className="des">Explore the Wonders of Sri Lanka: Uncover the Rich Culture, Breathtaking
                                     Landscapes, and Exotic Adventures Await!</div>
                <button>See More</button>
                </div>
                </div>

                <div className="item" style={{ backgroundImage: `url(${sl5})` }}> 
                <div className="content">
                <div className="name">Visit Sri Lanka</div>
                <div className="des">Explore the Wonders of Sri Lanka: Uncover the Rich Culture, Breathtaking
                                     Landscapes, and Exotic Adventures Await!</div>
                <button>See More</button>
                </div>
                </div>

            </div>
        </div>

        <div className='btn'>
            <button className="prev">prev</button>
            <button className="next">next</button>
        </div>
        


    </div>
  )
}




