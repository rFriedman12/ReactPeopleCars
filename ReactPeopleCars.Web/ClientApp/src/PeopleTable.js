import React from 'react';
import PersonRow from './PersonRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PeopleTable extends React.Component {
    state = {
        people: []
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/people/getall');
        const people = response.data;
        this.setState({ people });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <Link to={'/addperson'} >
                            <button className="btn btn-success btn-lg btn-block" onClick={this.onAddClick}>Add Person</button>
                        </Link>
                    </div>
                </div>
                <table className="table table-hover table-striped table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map(p => {
                            return <PersonRow
                                key={p.id}
                                person={p} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;