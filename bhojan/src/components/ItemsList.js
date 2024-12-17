import React from 'react';
import veg from '../images/veg.png';
import './ItemsList.css';
function ItemsList() {
  return (
    <>
    <h1>Top picks</h1>
    <div class="grid-container">
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
        <div class="grid-item">
            <img src={veg} className="square-image" alt="item" />
            <div class="item-info">
                <p class="item-name">Food Name 1</p>
                <p class="item-price">$10.00</p>
                <p class="item-rating">Rating: 4.5 ★</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemsList