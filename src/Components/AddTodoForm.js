import React from 'react';
import PropTypes from 'prop-types';
// import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


class AddTodoForm extends React.Component
{
    constructor(props) // nepotrebno, može se pisati samo state =
    {
        super(props);
        this.state = {
            newItem: ''
        }

        this.ref = React.createRef(); // za autofocus
    }

    handleChange = (event) => {
        const newItem = event.target.value;
        this.setState({ newItem });
    };

    handleAddTodoClick = (event) => {
        event.preventDefault();

        const { newItem } = this.state;
        const { addTodo } = this.props;

        if(!newItem || !newItem.trim()){
            alert('Enter your task!');
            return; // obavezno da ne pozove addTodo
        }

        addTodo(newItem);

        this.setState({ newItem: '' });

        if(this.ref.current){   // za autofocus
            this.ref.current.focus();
        }
    }

    render()
    {
        const { newItem } = this.state;

        return(
            <Form>
                <InputGroup size="lg">
                    <FormControl
                        placeholder="Enter new task"
                        value={newItem}
                        onChange={this.handleChange}
                        autoFocus
                        ref={this.ref}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="outline-secondary"
                            type="submit"
                            onClick={this.handleAddTodoClick}
                        >Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default AddTodoForm;

AddTodoForm.propTypes = {
    addTodo: PropTypes.func
};
