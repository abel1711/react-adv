// import { FormEvent } from 'react';
// import { useForm } from '../hooks/useForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    // const { formData , name, email, password1, password2, onChange, resetForm, isValidEmail} = useForm({
    //     name:'',
    //     email:'',
    //     password1:'',
    //     password2:''
    // });

    // const onSubmit = (event: FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault();
    //     console.log(formData);
    // }

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2:''
                }}
                onSubmit={( values )=>{
                    console.log(values);
                }}
                validationSchema= {
                    Yup.object({
                        name: Yup.string().required('Requrido').max(15,'Maximo 15 caracteres').min(2,'Min 2 caracteres'),
                        email: Yup.string().email('formato de email no valido').required('Requerido'),
                        password1: Yup.string().required('Requerido').min(6,'El password debe de ser min 6 caracteres'),
                        password2: Yup.string().oneOf([ Yup.ref('password1')], 'Las contraseñas no coninciden').required('Requerido')
                    })
                }
            >
                {
                    ({handleReset})=>(
                        <Form>
                            <MyTextInput 
                                label={'Name'}
                                name={'name'}
                                placeholder='Your full name'
                            />
                            
                            <MyTextInput 
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Your email'
                            />
                            
                            <MyTextInput 
                                label='Password'
                                name='password1'
                                type='password'
                                placeholder='*******'
                            />
                            
                            <MyTextInput 
                                label='Repeat password'
                                name='password2'
                                type='password'
                                placeholder='*******'
                            />

                            <button type='submit'>Submit</button>
                            <button type='button' onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }

            </Formik>
            

            {/* <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={ onChange }
                    name='name'
                    className={`${ name.trim().length <= 0 && 'has-error'}`}
                />
                { (name.trim().length <= 0) && <span>Este campo es obligatorio</span>}
                <input 
                    type="email"
                    placeholder='E-mail'
                    onChange={ onChange }
                    value={email}
                    name='email'
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>No es un email valido</span> }
                <input 
                    type="password"
                    placeholder='Password'
                    onChange={ onChange }
                    value={password1}
                    name='password1'
                />
                { (password1.trim().length <= 0) && <span>Este campo es obligatorio</span>}
                { password1.trim().length < 6 && password1.trim().length >0 && <span>La contraseña require 6 caracteres min.</span>}

                <input 
                    type="password"
                    placeholder='Repeat password'
                    onChange={ onChange }
                    value={password2}
                    name='password2'
                />
                { (password2.trim().length <= 0) && <span>Este campo es obligatorio</span>}
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no coinciden</span>}

                <button type='submit'>Create</button>
                <button type='button' onClick={resetForm}>Reset</button>
            </form> */}
        </div>
    )
}
