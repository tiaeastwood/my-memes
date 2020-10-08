import React from 'react'



// props is whatever the pass the function when you call it 
// in this case: showImages={this.state.showImages}

const PuppyList = (props) => {
    return (   
        <ul>
            {props.dogList.map(({ name, img }) => {
                return (
                    <li key={name}>
                        <p><b>{name}</b></p>
                        {props.showImages && (
                            <img src={img} alt={`Famous meme dog, ${name}`} />
                        )}
                        {/* {props.showImages && (
                            <p>Rating: {rating}</p>
                        )} */}
                    </li>
                );
            })}
        </ul>
    );
};

export default PuppyList;