import React from 'react';
import Todo from '../components/Todo'
import styled from 'styled-components'

const StyledTodoPage = styled.div`
    /* Block */
    width: 80%;
    margin: 5% auto;
    padding: 3%;
    /* Style */
    border-radius: 10px;
`

function TodoPage(props){
    const {todoList} = props

    return(
        <StyledTodoPage>
            <h2>Todo list</h2>
            <div className='todo-container'>
                {
                    todoList.map(item => {
                        return <Todo key={item.uuid} todo={item}/>
                    })
                }
            </div>
        </StyledTodoPage>
    )
}

export default TodoPage