import React from 'react';
import './Category.css';
import veg from '../images/veg.png';

function Category() {
  return (
    <div class="scrolling-container">
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>Veg</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>Non veg</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>Chaat</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>juices</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>Chaat</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>juices</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>Chaat</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>juices</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>Chaat</p>
            </div>
            <div class="scroll-item">
                <img src={veg} className="circular-image" alt="img" />
                <p>juices</p>
            </div>
    </div>
  )
}

export default Category