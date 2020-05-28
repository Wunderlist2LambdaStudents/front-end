import React from 'react';

function Contact(props){
    const {
        contactFormValues,
        onInputChange,
        onSubmit,
        contactDisabled,
        contactErrors,
      } = props

    return(
        <div className='container contact'>
            <form className="form container" onSubmit={onSubmit}>
                <h3 className="form title">Contact Form</h3>
                <div className="form-group inputs">
                    <div className="validation">{contactErrors.name}</div>
                    <label>Name:&nbsp;
                        <input
                            value={contactFormValues.name}
                            onChange={onInputChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <div className="validation">{contactErrors.email}</div>
                    <label>Email:&nbsp;
                        <input
                            value={contactFormValues.email}
                            onChange={onInputChange}
                            name='email'
                            type='text'
                        />
                    </label>
                    <div className="validation">{contactErrors.body}</div>
                    <label>Message:&nbsp;
                        <input
                            value={contactFormValues.body}
                            onChange={onInputChange}
                            name='body'
                            type='text'
                        />
                    </label>
                </div>
                <div className="form-group submit">
                    <button disabled={contactDisabled}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact