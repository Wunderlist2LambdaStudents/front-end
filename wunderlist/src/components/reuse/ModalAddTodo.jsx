import React, { useEffect } from 'react';
import styled from 'styled-components'

const StyledModal = styled.div`
    /* Block */
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    /* Style */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

    .modal-content {
        background-color: #FFFFFF;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #0E7C7B;
        width: 80%; /* Could be more or less, depending on screen size */
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;

        &:hover, &:focus{
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    }

    /* Form Styling */
    .form .title{
        margin-bottom: 3%;
    }

    input, textarea, select{
        /* Block */
        width: 80%;
        padding: 12px 20px;
        margin: 8px 0;
        /* Border */
        border: 2px solid #0E7C7B;
        border-radius: 4px;
        box-sizing: border-box;
        /* Style */
        font-size: 1.3rem;
    }

    .validation{
        color: #ec3944;
        font-weight: bold;
    }
`

function ModalAddTodo(props){
    const modalDisabled = props.modalDisabled
    const toggleModal = props.toggleModal
    // Form Props
    const addTodoFormValues = props.addTodoFormValues
    const onInputChange = props.onInputChange
    const onSubmit = props.onSubmit
    const addTodoDisabled = props.addTodoDisabled
    const addTodoErrors = props.addTodoErrors

    // Toggle Modal Display
    useEffect(() => {
        if(!modalDisabled){
            document.querySelector('#addTodo').style.display = 'block'
        } else {
            document.querySelector('#addTodo').style.display = 'none'
        }   
    }, [modalDisabled])

    return(
        <StyledModal id='addTodo'>
            <div className="modal-content">
                <span className="close" onClick={toggleModal}>&times;</span>
                <form className="form container" onSubmit={onSubmit}>
                    <h2 className="form title">Add Todo</h2>
                    <div className="form-group inputs">
                        <h3>Todo:</h3>
                        <div className="validation">{addTodoErrors.title}</div>
                        <label>
                            <input
                                value={addTodoFormValues.title}
                                onChange={onInputChange}
                                name='title'
                                type='text'
                                placeholder='Task...'
                            />
                        </label>
                        <h3>Notes:</h3>
                        <label>
                            <input
                                value={addTodoFormValues.body}
                                onChange={onInputChange}
                                name='body'
                                type='text'
                                placeholder='Notes...'
                            />
                        </label>
                        <h3>Date:</h3>
                        <div className="validation">{addTodoErrors.due_date}</div>
                        <label>
                            <input
                                value={addTodoFormValues.due_date}
                                onChange={onInputChange}
                                name='due_date'
                                type='text'
                                placeholder='Date: MM-DD-YYYY'
                            />
                        </label>
                        <h3>Reccur:</h3>
                        <label>
                            <select
                                onChange={onInputChange}
                                value={addTodoFormValues.recurring}
                                name='recurring'
                            >
                                <option value='No'>Not Recurring</option>
                                <option value='Daily'>Daily</option>
                                <option value='Weekly'>Weekly</option>
                                <option value='Monthly'>Monthly</option>
                            </select>
                    </label>
                    </div>
                    <div className="form-group submit">
                        <button disabled={addTodoDisabled}>Submit</button>
                    </div>
                </form>
            </div>
        </StyledModal>
    )
}

export default ModalAddTodo