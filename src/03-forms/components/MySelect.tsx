import { ErrorMessage, useField } from "formik";

interface Props{
    name: string;
    label: string;
    placeholder?: string;
    [x: string]: any
}

export const MySelect = ({ label, ...props }: Props) => {

    const [ field, meta ] = useField( props );
    
    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select {...field} {...props} className={ meta.error && 'has-error'} />
            <ErrorMessage name={ props.name } component='span' />
        </>
    )
}
