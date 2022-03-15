import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstract = () => {

    return (
        <div>

            <h1>Formik Abstract</h1>

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

                            <MyTextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='Write your first name'
                            />
                            <MyTextInput 
                                label='Last Name' 
                                name='lastName'
                                placeholder='Write your last name'
                            />

                            <MyTextInput 
                                label='Email address' 
                                name='email'
                                placeholder='Write your email adress'
                                type='email'
                            />

                            

                            <MySelect name="jobType" label={'Job types'} >
                                <option value="">Mark something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr.">IT Jr.</option>
                            </MySelect>

                            <MyCheckbox label={'Terms & Conditions'} name={'terms'} />

                            <button type='submit'>Submit</button>

                        </Form>
                   )
               } 
            </Formik>

            
        </div>
    )
}
