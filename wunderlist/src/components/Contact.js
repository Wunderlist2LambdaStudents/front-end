import React from 'react';
import styled from 'styled-components'

const StyledContactPage = styled.div`
    /* Block */
    width: 80%;
    margin: 5% auto;
    padding: 3%;
    /* Style */
    border-radius: 10px;
    border: 2px solid #0E7C7B;

    .form .title{
        margin-bottom: 3%;
    }

    input, textarea {
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

    .validation {
        color: #EB5757;
    }

    textarea {
        font-size: 1rem;
        height: 150px;
        resize: vertical;
    }
`

function Contact(props){
    const {
        contactFormValues,
        onInputChange,
        onSubmit,
        contactDisabled,
        contactErrors,
      } = props

    return(
        <StyledContactPage>
            <form className="form container" onSubmit={onSubmit}>
                <h2 className="form title">Contact Form</h2>
                <div className="form-group inputs">
                    <h3>Name:</h3>
                    <div className="validation">{contactErrors.name}</div>
                    <label>
                        <input
                            value={contactFormValues.name}
                            onChange={onInputChange}
                            name='name'
                            type='text'
                            placeholder='Your name...'
                        />
                    </label>
                    <h3>Email:</h3>
                    <div className="validation">{contactErrors.email}</div>
                    <label>
                        <input
                            value={contactFormValues.email}
                            onChange={onInputChange}
                            name='email'
                            type='text'
                            placeholder='Your e-mail...'
                        />
                    </label>
                    <h3>Message:</h3>
                    <div className="validation">{contactErrors.body}</div>
                    <label className='message'>
                        <textarea
                            value={contactFormValues.body}
                            onChange={onInputChange}
                            name='body'
                            type='text'
                            placeholder='Write something...'
                        />
                    </label>
                </div>
                <div className="form-group submit">
                    <button disabled={contactDisabled}>Submit</button>
                </div>
            </form>
        </StyledContactPage>
    )
}

export default Contact