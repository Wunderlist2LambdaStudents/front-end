import React from 'react';
import Todo from '../components/Todo'

function TodoPage(props){
    const {todoList} = props

    return(
        <div>
            {
                todoList.map(item => {
                    return <Todo key={item.id} todo={item}/>
                })
            }
        </div>
    )
}

export default TodoPage