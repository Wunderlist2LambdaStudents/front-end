import React from 'react';
import styled from 'styled-components'

// Components
import Checkbox from './reuse/Checkbox'

const StyledTodoItem = styled.div`
    /* Block */
    padding: 4%;
    border-bottom: 1px solid black;
    /* Flex */
    display: flex;
    align-items: center;
    justify-content: space-between;

    .todo-info-container {
        display: flex;
        align-items: center;

        .title {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
`

// Todo: Add checkbox
function Todo(props){
    const { uuid, title, body, due_date, recurring } = props.todo
    return(
        <StyledTodoItem>
            <div className="todo-info-container">
                <Checkbox />
                <p className='title'>{title}</p>
                <p className='body'>&nbsp;- {body}</p>
            </div>
            <p className='date'>{due_date}</p>
        </StyledTodoItem>
    )
}

export default Todo