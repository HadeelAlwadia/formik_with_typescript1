import { FormLabel } from "../../@Types/Types";

interface iprops extends FormLabel {}
   
export default function FormLabel({title ,id}:iprops):JSX.Element {
    return (
        <label htmlFor={id}>{title}</label>
    )
}
