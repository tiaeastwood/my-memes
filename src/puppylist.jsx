import React from 'react'

const puppies = [
    {
        name: 'Doge',
        img:
            './img/doge.jpg',
        rating: '⭐⭐⭐⭐⭐'
    },
    {
        name: 'Pun Dog',
        img:
            './img/pundog.png',
        rating: '⭐⭐⭐⭐'
    },
    {
        name: '"Yes, This is Dog"',
        img:
            './img/yesthisisdog.jpg',
        rating: '⭐⭐⭐'
    },
];

// props is whatever the pass the function when you call it 
// in this case: showImages={this.state.showImages}

const PuppyList = (props) => {
    return (
        <ul>
            {puppies.map(({ name, img, rating }) => {
                return (
                    <li key={name}>
                        <p><b>{name}</b></p>
                        {props.showImages && (
                            <img src={img} alt={`Famous meme dog, ${name}`} />
                        )}
                        {props.showImages && (
                            <p>Rating: {rating}</p>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default PuppyList;