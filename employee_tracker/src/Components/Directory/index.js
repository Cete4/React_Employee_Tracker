import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API";
import "./style.css";

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
            </div >
        );
    }
}

export default Directory;
