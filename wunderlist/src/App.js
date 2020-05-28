import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

// Form Validation
import { addTodoFormSchema, contactFormSchema } from './validation/formSchema'
import * as yup from 'yup'

// Components
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import TodoPage from './components/TodoPage'
import Contact from './components/Contact'
import ModalAddTodo from './components/reuse/ModalAddTodo'

// Assets
import './App.css';

// Style
const StyledApp = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  .content {
    margin-left:20%;
  }
`

// User test
const testUser = {username: 'testUser', password: 'password1234'}

// Item list init
const initTodos = [
  {
    uuid: 1,
    title: 'Say Hello',
    body: 'Say "Hello" to the world',
    due_date: 'Tomorrow',
    recurring: 'Weekly',
  },
  {
    uuid: 2,
    title: 'Say Hello Again',
    body: 'Say "Hello" to the world',
    due_date: 'The next day',
    recurring: 'Weekly',
  }
]

// Add-Todo Form init
const initialAddTodoValues = {
  title: '',
  body: '',
  due_date: '',
  recurring: 'No',
}

const initialAddTodoErrors = {
  title: '* Required',
  body: '',
  due_date: '* Required',
  recurring: '',
}

// Contact Form Init
const initialContactValues = {
  name: '',
  email: '',
  body: ''
}

const initialContactErrors = {
  name: '',
  email: '',
}

function App() {
  // Item list state
  const [uuid, setUuid] = useState()
  const [todoList, setTodoList] = useState(initTodos)
  // Add-Todo Item Modal State
  const [modalDisabled, setModalDisabled] = useState(true)
  
  // Add-Todo form state
  const [addTodoFormValues, setAddTodoFormValues] = useState(initialAddTodoValues)
  const [addTodoErrors, setAddTodoErrors] = useState(initialAddTodoErrors)
  const [addTodoDisabled, setAddTodoDisabled] = useState(true)
  
  // Contact form state
  const [contacts, setContact] = useState([])
  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [contactErrors, setContactErrors] = useState(initialContactErrors)
  const [contactDisabled, setContactDisabled] = useState(true)
  
  // Axios
  

  // Event Helpers
  const toggleModal = evt => {
    setModalDisabled(currentModalDisabled => !currentModalDisabled)
  } 

  const onAddTodoInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    // Yup for validation
    yup
      .reach(addTodoFormSchema, name)
      .validate(value)
      // if the validation is successful, then clear the error message
      .then(valid => {
        setAddTodoErrors({
          ...addTodoErrors,
          [name]: ""
        })
      })
      // if not, then display error message
      .catch(err => {
        setAddTodoErrors({
          ...addTodoErrors,
          [name]: err.errors[0]
        })
      })

    setAddTodoFormValues({
      ...addTodoFormValues,
      [name]: value
    })
  }

  const onAddTodoSubmit = evt => {
    evt.preventDefault()

    const newTodo = {
      uuid: 3, // TODO CHANGE THIS WHEN LINKING
      title: addTodoFormValues.title,
      body: addTodoFormValues.body,
      due_date: addTodoFormValues.due_date,
      recurring: addTodoFormValues.recurring,
    }

    console.log(newTodo)
    setTodoList([...todoList, newTodo])
    setAddTodoFormValues(initialAddTodoValues)
  }

  const onContactInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    // Yup for validation
    yup
      .reach(contactFormSchema, name)
      .validate(value)
      // if the validation is successful, then clear the error message
      .then(valid => {
        setContactErrors({
          ...contactErrors,
          [name]: ""
        })
      })
      // if not, then display error message
      .catch(err => {
        setContactErrors({
          ...contactErrors,
          [name]: err.errors[0]
        })
      })

    setContactFormValues({
      ...contactFormValues,
      [name]: value
    })
  }

  const onContactSubmit = evt => {
    evt.preventDefault()

    const newContact = {
      name: contactFormValues.name,
      email: contactFormValues.email,
      body: contactFormValues.body
    }

    console.log(newContact)
    setContact([newContact, ...contacts])
    setContactFormValues(initialContactValues)
  }

  // Side Effects
  // Add-Todo form side effect
  useEffect(() => {
    // Adjust value of disabled based on form updates
    addTodoFormSchema.isValid(addTodoFormValues)
      .then(valid => {
        setAddTodoDisabled(!valid)
      })
  }, [addTodoFormValues])

  // Contact form side effect
  useEffect(() => {
    // Adjust value of disabled based on form updates
    contactFormSchema.isValid(contactFormValues)
      .then(valid => {
        setContactDisabled(!valid)
      })
  }, [contactFormValues])

  return (
    <div className="App">
      {/* Styled Components Container */}
      <StyledApp>
        <Nav />
        <div className="content">
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/todo'>
            <TodoPage todoList={todoList} toggleModal={toggleModal} />
          </Route>
          <Route exact path='/contact'>
            <Contact 
              contactFormValues={contactFormValues}
              onInputChange={onContactInputChange}
              onSubmit={onContactSubmit}
              contactDisabled={contactDisabled}
              contactErrors={contactErrors}
            />
          </Route>
        </div>
        <ModalAddTodo  
          modalDisabled={modalDisabled} 
          toggleModal={toggleModal}

          addTodoFormValues={addTodoFormValues}
          onInputChange={onAddTodoInputChange}
          onSubmit={onAddTodoSubmit}
          addTodoDisabled={addTodoDisabled}
          addTodoErrors={addTodoErrors}
        />
      </StyledApp>
    </div>
  );
}

export default App;
