import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPages = () => {

    const { formData , name, email, password1, password2, onChange, resetForm, isValidEmail} = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={ onSubmit }>
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
            </form>
        </div>
    )
}
