import React from 'react';
import { produce } from 'immer';
import axios from 'axios';

class AddPerson extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: ''
    }

    onTextChange = e => {
        const newState = produce(this.state, draftState => {
            draftState[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }

    onSubmitClick = async () => {
        const { firstName, lastName, age } = this.state;
        await axios.post('/api/people/addperson', { firstName, lastName, age });
        this.props.history.push('/');
    }

    render() {
        const { firstName, lastName, age } = this.state;

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 card card-body bg-light">
                        <h2>Add a New Person</h2>
                        <input 
                            className="form-control" 
                            name="firstName" 
                            placeholder="First Name" 
                            value={firstName} 
                            onChange={this.onTextChange} />
                        <br />
                        <input 
                            className="form-control" 
                            name="lastName" 
                            placeholder="Last Name" 
                            value={lastName} 
                            onChange={this.onTextChange} />
                        <br />
                        <input 
                            className="form-control" 
                            name="age" 
                            placeholder="Age" 
                            value={age} 
                            onChange={this.onTextChange} />
                        <br />
                        <button 
                            className="btn btn-primary btn-lg btn-block"
                            onClick={this.onSubmitClick}
                        >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPerson;