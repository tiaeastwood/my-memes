import React from 'react'

const puppies = [
    {
        name: 'Teddy',
        img:
            'https://i.pinimg.com/originals/39/6f/14/396f14bd9c68652906500047d677356c.jpg',
        cutenessrating: 5
    },
    {
        name: 'Buster',
        img:
            'https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog?w=1440&auto=compress&fm=jpg',
        cutenessrating: 4.5
    },
    {
        name: 'Paddy',
        img:
            'http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg',
        cutenessrating: 4
    },
];

// props is whatever the pass the function when you call it 
// in this case: showImages={this.state.showImages}

const PuppyList = (props) => {
    return (
        <ul>
            {puppies.map(({ name, img }) => {
                return (
                    <li key={name}>
                        <p>{name}</p>
                        {props.showImages && (
                            <img src={img} alt={`A puppy named ${name}`} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default PuppyList;