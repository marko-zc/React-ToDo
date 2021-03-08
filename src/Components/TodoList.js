import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';


function TodoList({ todos, toggleTodo })
{
    return(
        <ListGroup>
            {todos.map(todo => {
                return(
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                    />
                );
            })}
        </ListGroup>
    );
}

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func
};
