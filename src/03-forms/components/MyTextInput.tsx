import { ErrorMessage, useField } from "formik"

interface Props  {

    label: string;
    name: string;
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
    [x: string]: any;

}

export const MyTextInput = ({ label, ...props }: Props) => {

    const [ field, meta ] = useField( props );

    return (
        <>
         <label htmlFor={ props.id || props.name }> { label } </label>   
         <input type="text" {...field} {...props} className={ meta.error && 'has-error'}/>
         <ErrorMessage name={ props.name } component='span' />
        </>
    )
}