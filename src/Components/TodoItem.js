import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


class TodoItem extends React.Component
{
    constructor(props) // nepotrebno, može se pisati samo state =
    {
        super(props);
    }

    handleToggleTodoClick = () => {
        const { todo, toggleTodo } = this.props;
        toggleTodo(todo.id);
    };

    handleRemoveTodoClick = () => {
        const { todo, removeTodo } = this.props;
        var confirm = window.confirm('Are you sure you want to delete "' + todo.task + '"?');
        if (confirm == true) {
            removeTodo(todo.id);
        }
    }

    render()
    {
        const { todo } = this.props;
        const textClass = todo.completed ? 'todo-item__completed' : null;

        return(
            <ListGroup.Item className="todo-item">
                <span
                    className="todo-item_item"
                    onClick={this.handleToggleTodoClick}
                >
                    <Form.Check readOnly inline checked={todo.completed} />
                    <span className={textClass}>{todo.task}</span>
                </span>
                <span
                    className="todo-item__delete-button"
                    onClick={this.handleRemoveTodoClick}
                >
                    x
                </span>
            </ListGroup.Item>
        );
    }
}

export default TodoItem;

TodoItem.propTypes = {
    todo: PropTypes.object,
    toggleTodo: PropTypes.func,
    removeTodo: PropTypes.func
};
