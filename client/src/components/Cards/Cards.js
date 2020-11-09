import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Products</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="https://i.ibb.co/qpPZ5ZW/marvin-meyer-SYTO3xs06f-U-unsplash.jpg"
                        text="description"
                        label="name of plant"
                        path="/"
                        />
                        <CardItem src="https://via.placeholder.com/150"
                        text="description"
                        label="name of plant"
                        path="/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="https://via.placeholder.com/150"
                        text="description"
                        label="name of plant"
                        path="/"
                        />
                        <CardItem src="https://via.placeholder.com/150"
                        text="description"
                        label="name of plant"
                        path="/"
                        />
                        <CardItem src="https://via.placeholder.com/150"
                        text="description"
                        label="name of plant"
                        path="/"
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards;