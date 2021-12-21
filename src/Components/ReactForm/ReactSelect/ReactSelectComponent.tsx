import Select from "react-select";
import { IReactSelect } from "../../../@Types/Types";

interface IProps extends IReactSelect{}


function ReactSelectComponent({
    setFieldTouched,value, setFieldValue ,name ,options ,placeholder,defaultValue=null,isSearchable=true }:IProps) {
    return (
        <Select
           placeholder={placeholder}
            onClick={()=>setFieldTouched(`${name}`, true)}
            className="basic-single"
            classNamePrefix="select"
            defaultValue={defaultValue}
            isSearchable={isSearchable}
            name={name}
            options={options}
            inputValue={value.value}
            onChange={(value:{value:string})=>setFieldValue(`${name}`, value.value)}
        />
    );
}

export default ReactSelectComponent;


