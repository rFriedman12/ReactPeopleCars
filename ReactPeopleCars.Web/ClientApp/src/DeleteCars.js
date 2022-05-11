import React from 'react';
import axios from 'axios';

class DeleteCars extends React.Component {
    state = {
        cars: []
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/people/getcars?id=${id}`);
        this.setState({ cars: data });
    }

    onNoClick = () => {
        this.props.history.push('/');
    }

    onYesClick = async () => {
        const { id } = this.props.match.params;
        await axios.post('/api/people/deletecars', { id });
        this.props.history.push('/');
    }

    render() {
        const { cars } = this.state;

        return (
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map(c => {
                                    return <tr key={c.id}>
                                        <td>{c.make}</td>
                                        <td>{c.model}</td>
                                        <td>{c.year}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete all of these cars?</h3>
                    </div>
                    <div className="col-md-6 mt-2">
                        <button className="btn btn-primary btn-lg btn-block" onClick={this.onNoClick}>No</button>
                    </div>
                    <div className="col-md-6 mt-2">
                        <button className="btn btn-danger btn-lg btn-block" onClick={this.onYesClick}>Yes</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteCars;