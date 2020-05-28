import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components'

// Form Validation
import formSchema from './validation/formSchema'
import * as yup from 'yup'

// Components
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import TodoPage from './components/TodoPage'
import Contact from './components/Contact'

// Assets
import './App.css';

const StyledApp = styled.div`
  background-color:#EAE7DC;
  .content {
    background-color:#EAE7DC;
    margin-left:23%;
  }
`
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
  const [todoList, setTodoList] = useState([])
  // Contact form state
  const [contacts, setContact] = useState([])
  const [contactFormValues, setContactFormValues] = useState(initialContactValues)
  const [contactErrors, setContactErrors] = useState(initialContactErrors)
  const [contactDisabled, setContactDisabled] = useState(true)
  // End Contact form state

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    // Yup for validation
    yup
      .reach(formSchema, name)
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

  const onSubmit = evt => {
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

  // Contact form side effect
  useEffect(() => {
    // Adjust value of disabled based on form updates
    formSchema.isValid(contactFormValues)
      .then(valid => {
        setContactDisabled(!valid)
      })
  }, [contactFormValues])

  return (
    <div className="App">
      <StyledApp>
        <Nav />
        <div className="content">
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/todo'>
            <TodoPage todoList={todoList}/>
          </Route>
          <Route exact path='/contact'>
            <Contact 
              contactFormValues={contactFormValues}
              onInputChange={onInputChange}
              onSubmit={onSubmit}
              contactDisabled={contactDisabled}
              contactErrors={contactErrors}
            />
          </Route>
        </div>
      </StyledApp>
    </div>
  );
}

export default App;
