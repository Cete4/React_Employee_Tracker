import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API";
import "./style.css";
import Table from 'react-bootstrap/Table'

class Directory extends Component {
    state = {
        search: "",
        employees: []
    };

    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        API.getEmployee()
            .then((res) => {
                this.setState({
                    employees: res.data.results
                });
            })
            .catch((err) => console.error());
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, search the OMDB API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
    };

    render() {
        return (
            <div>
                <div id="top">
                    <h1 id="header">Employee Tracker</h1>
                </div>
                <div className="input-group mx-auto">
                    <input onChange={this.handleInputChange} name="search" value={this.state.search} type="text" className="form-control" placeholder="Search" />
                </div>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((result, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{result.index}</td>
                                        <td>
                                            {result.name.first}
                                        </td>
                                        <td>
                                            {result.name.last}
                                        </td>
                                        <td>{result.phone}</td>
                                        <td>{result.email}</td>
                                        <td>{result.location.city}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div >
        );
    }
}

export default Directory;
