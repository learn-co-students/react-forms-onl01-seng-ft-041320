import React from 'react'; 
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
    state = {
        firstName: "John",
        lastName: "Cena",
    }

    // handleFirstNameChange = event => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }

    // handleLastNameChange = event => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleNameUpdate = (event) => {
        event.preventDefault();
        event.persist();
        let firstInput = event.target.children[0].value;
        let lastInput = event.target.children[1].value;
        this.setState({
            firstName: firstInput,
            lastName: lastInput,
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
            <Form
            handleNameUpdate={this.handleNameUpdate}
            formData={this.state}
            handleChange={this.handleChange}
            />
            <DisplayData  formData={this.state} />
            </div>
        )
    }
}

export default ParentComponent;