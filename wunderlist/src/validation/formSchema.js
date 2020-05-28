import * as yup from 'yup'

const addTodoFormSchema = yup.object().shape({
    title: yup
        .string()
        .required('Todo input required'),
    body: yup
        .string(),
    due_date: yup.date(),
    recurring: yup.string()
})

const contactFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name input required'),
    email: yup
        .string()
        .email('Must be valid email')
        .required('Email input required'),
    body: yup.string()
})

export { addTodoFormSchema, contactFormSchema }