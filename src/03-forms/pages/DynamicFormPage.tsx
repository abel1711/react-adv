import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import jsonForm from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: {[key:string]: any } = {};
const validationesFields: {[key:string]: any } = {};

for (const input of jsonForm) {
    initialValues[input.name]= input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {

        // if(rule.type === 'required'){
        //     schema = schema.required('Requerido');
        // }
        // if( rule.type === 'max'){
        //     schema = schema.max( (rule as any).cant, 'maximo 15 caracteres')
        // }
        rule.type === 'required' && (schema = schema.required('Requerido'));
        rule.type === 'max' && ( rule as any ).cant && (schema = schema.max(( rule as any ).cant, `maximo ${( rule as any ).cant} caracteres`));
        rule.type === 'min' && ( rule as any ).cant && (schema = schema.min(( rule as any ).cant, `minimo ${( rule as any ).cant} caracteres`))
        rule.type === 'email' && (schema = schema.email('formato de email no valido'))
        
    }

    validationesFields[ input.name ] = schema
};

const validationSchema = Yup.object({...validationesFields});
console.log(validationSchema)
export const DynamicFormPage = () => {

    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues = { initialValues }
                onSubmit = {( values )=>console.log( values )}
                validationSchema = { validationSchema }
            >
                {
                    ({handleReset})=>(
                        <Form noValidate>
                            {
                                jsonForm.map(({ label, name, placeholder, type, options})=>{

                                    if( type === 'text' || type === 'email' || type === 'password'){
                                        
                                        return (
                                            <MyTextInput
                                                key={ name }
                                                name={ name }
                                                label={ label }
                                                placeholder= { placeholder }
                                                type={ type }
                                             />
                                             )
                                    }else if ( type === 'select'){
                                        return (
                                            <MySelect
                                                key={ name }
                                                name={ name }
                                                label={ label }
                                            >
                                                <option value="">Select an option</option>
                                                {
                                                    options?.map(( { id, label } )=>(
                                                        <option value={ id } key={ id }>{ label }</option>
                                                    ))
                                                }
                                            </MySelect>
                                            
                                        )
                                    }
                                        })
                                    }
                                    <button type='submit'>Submit</button>
                                    <button type='button' onClick={ handleReset }>Reset</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
