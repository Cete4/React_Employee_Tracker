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
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // Sorts by index returned 
    sortEmployees = (event) => {
        event.preventDefault();
        const sorted = this.state.employees.sort((a, b) => a.name.index > b.name.index ? 1 : -1);
        this.setState({
            employees: sorted
        });
    }

    render() {
        return (
            <div>
                <div id="top">
                    <h1 id="header">Employee Tracker</h1>
                </div>
                <div className="form-group mx-auto">
                    <input
                        onChange={this.handleInputChange}
                        value={this.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        id="search"
                    />
                    <button onClick={this.sortEmployees} className="btn btn-primary mt-3">Sort</button>
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
                                        <td>{index + 1}</td>
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
