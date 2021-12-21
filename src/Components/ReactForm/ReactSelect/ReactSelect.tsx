import {Field} from "formik";
import { FiledForm, IReactSelect } from "../../../@Types/Types";


interface iprops extends IReactSelect {}


function ReactSelect({name ,as ,error,options,placeholder}:iprops) {
    return (
        <Field>
            {
                (
                 { field: { value },form:{setFieldValue,setFieldTouched }}:FiledForm
                )=>
             <>
                {as({value, setFieldValue, setFieldTouched ,name,options,placeholder})}
                {error&&<div className={'error'}>{error}</div>}
             </>
            }
            </Field>
    );
}

export default ReactSelect;