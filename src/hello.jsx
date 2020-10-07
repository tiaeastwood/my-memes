import React from 'react'


const CreateGreeting = (props) => {
    const name = props.user;
    console.log(`Hello ${name}`)
    return (
            props.showGreeting && (
                <p>Hello {name}</p>
            )
    );
};

export default CreateGreeting;