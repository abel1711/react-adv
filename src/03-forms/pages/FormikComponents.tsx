import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>

            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName:'',
                    email:'',
                    terms: false,
                    jobType:''
                }}
                onSubmit={ (values)=>{
                    console.log(values);
                }}
                validationSchema={
                        Yup.object({
                            firstName: Yup.string()
                                            .max(15,'Must be 15 caracters or less')
                                            .required('The first name is required'),
                            lastName: Yup.string()
                                            .max(15,'Must be 15 caracters or less')
                                            .required('The last name is required'),
                            email: Yup.string()
                                            .email('Must be an e-mail valid')
                                            .required('the email is required'),
                            terms: Yup.boolean()
                                            .oneOf([true],'Accep terms!'),
                            jobType: Yup.string()
                                            .required('Select a job!')
                        })
                }
            >
               {
                   formik =>(
                        <Form>

                            <label htmlFor="firstName">First Name</label>
                            <Field name='firstName'type='text'/>
                            <ErrorMessage name='firstName' component={'span'}/>
                            
                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text'/>
                            <ErrorMessage name='lastName' component={'span'}/>

                            <label htmlFor="email">Email adress</label>
                            <Field name='email' type='email'/>
                            <ErrorMessage name='email' component={'span'}/>

                            <label>Job Type</label>
                            <Field name='jobType' as='select'>
                                <option value="">Mark something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr.">IT Jr.</option>
                            </Field>
                            <ErrorMessage name='jobType' component={'span'}/>


                            <label>
                                Accept Terms
                                <Field name='terms' type='checkbox'/>
                            </label>
                            <ErrorMessage name='terms' component={'span'}/>

                            <button type='submit'>Submit</button>

                        </Form>
                   )
               } 
            </Formik>

            
        </div>
    )
}
