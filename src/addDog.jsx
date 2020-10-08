import React from 'react'


// props is whatever to pass the function when you call it 
// in this case: showImages={this.state.showImages}

class AddDog extends React.Component {

    state = {
        puppyName: '',
        puppyUrl: ''
    };

    handleChange = (event) => {
        const inputName = event.target.name;
        const value = event.target.value;
        this.setState(() => {
            return {
                [inputName]: value
            }
        })
    };



    render() {
        return <form onSubmit={(event) => {
            event.preventDefault();
            this.props.addDog({
                name: this.state.puppyName,
                img: this.state.puppyUrl
            });
            this.setState({
                puppyName: '',
                puppyUrl: ''
            })
        }}
        >
            <label htmlFor='puppy-name'>
                Pup name:
            </label>
            <input id='puppy-name' name='puppyName' onChange={this.handleChange} value={this.state.puppyName}/>
            <label htmlFor="puppy-img-src">
                Please provide image url:
            </label>
            <input id="puppy-img-src" name='puppyUrl' onChange={this.handleChange}  value={this.state.puppyUrl}/>
            <button>Add my pup</button>
        </form >
    }

};

export default AddDog;
