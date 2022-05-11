import React from 'react';
import { produce } from 'immer';
import axios from 'axios';

class AddCar extends React.Component {
    state = {
        make: '',
        model: '',
        year: ''
    }

    getPersonName = () => {
        const { firstName, lastName } = this.props.match.params;
        return `${firstName} ${lastName}`;
    }

    onTextChange = e => {
        const newState = produce(this.state, draftState => {
            draftState[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }

    onSubmitClick = async () => {
        const { make, model, year } = this.state;
        const { id } = this.props.match.params;
        await axios.post('/api/people/addcar', { make, model, year, personId: id });
        this.props.history.push('/');
    }

    render() {
        const { make, model, year } = this.state;

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 card card-body bg-light">
                        <h2>Add a Car for {this.getPersonName}</h2>
                        <input
                            className="form-control"
                            name="make"
                            placeholder="Make"
                            value={make}
                            onChange={this.onTextChange} />
                        <br />
                        <input
                            className="form-control"
                            name="model"
                            placeholder="Model"
                            value={model}
                            onChange={this.onTextChange} />
                        <br />
                        <input
                            className="form-control"
                            name="year"
                            placeholder="Year"
                            value={year}
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

export default AddCar;