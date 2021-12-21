import { Field } from 'formik';
import { FormInput } from '../../@Types/Types';


interface iprops extends FormInput {}
  



 function FormInput({value,type ,name ,component='input',placeholder ,error,touched}:iprops):JSX.Element {
    return (
       <>
             <Field component={component} 
             value={value}
              name={name}
              type={type}
               placeholder={placeholder} />
           { error && touched ? <span className='error'>{error}</span> : null}
       </>
    )
}
export default FormInput
