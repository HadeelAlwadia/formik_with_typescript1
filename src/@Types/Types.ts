import { FormikErrors, FormikTouched } from "formik";

 export interface ListItem {
    idItem:number    
    nameCompany:string
    nameAddress:string
    industryCompany:string
    sizeCompany:string
    descraption:string
    startDate:string
    endDate:string
    jobTitle:string
    jobFiled:string
    jobLocation:string
    currantWork:boolean
    sectorCompany:string
    supervisorName:string
    reasonOfLeaving:string
    employeessupervisebyyou:string
    startSalary:string
    endSalary:string
    currancySalary:string
}


export interface AddItemAction {

    type:string
    payload:ListItem

}
export  interface DeleteItemAction{
    type:string
    payload:number
}

export  interface CheckItemAction{
    type:string
    payload:string
}

export  interface UpditeItemAction{
    type:string
    payload:number
}


export type ActionsType =AddItemAction|DeleteItemAction|CheckItemAction|UpditeItemAction;



export  interface InitialState{
    list:ListItem[]
    valueOfForm:ListItem
    isNext:boolean

}

export interface FormSchema{
    idItem?: string   
    nameCompany:string |boolean
    nameAddress:string |boolean
    industryCompany:string |boolean
    sizeCompany:string |boolean
    descraption:string |boolean
    startDate:string |boolean
    endDate:string |boolean
    jobTitle:string |boolean
    jobFiled:string |boolean
    jobLocation:string |boolean
    currantWork:string |boolean
    sectorCompany:string |boolean
    supervisorName:string |boolean
    reasonOfLeaving:string |boolean
    employeessupervisebyyou:string |boolean
    startSalary:string |boolean
    endSalary:string |boolean
    currancySalary:string |boolean 
    
}



export  interface  Options{
    value:string
    label:string
}


 export interface  FormInput {
    value?:string|{value:string}
    type?:string 
    name :string
    component?:string
    placeholder :string
    error:string|undefined
    touched?:boolean|undefined
    onChange?:((e: React.ChangeEvent<any>) => void|undefined)|undefined
    onBlur?:( (e: React.FormEvent<HTMLFormElement>) => void|undefined)|undefined;
}

export interface  FormLabel {
    title:string 
    id?:string
}


 

export interface ReactSelect extends FormInput{
     options?:Options[]
     defaultValue?:null
     isSearchable?:true
     value?: {value:string}|string
      setFieldValue?: (name: string, value: string) => {}
      setFieldTouched?: (name: string, value:boolean ) => {}
  
     }

     export interface IReactSelect extends ReactSelect{
        as?:({value, setFieldValue, setFieldTouched ,name,options,placeholder}:ReactSelect)=>JSX.Element

     }


     

export interface  FiledForm{
    field: { name?: string, onBlur?: Function, value: string },
    form: { setFieldValue: (name: string, value: string) => {},setFieldTouched: (name: string, value: string) => {}},
 }


     export interface FormikState<Values>
     {

        values: Values;
        errors?: FormikErrors<Values>;
        touched?: FormikTouched<Values>|undefined;
        handleChange?: (e: React.ChangeEvent<any>) => void;
        handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
        handleBlur?:( (e: React.FormEvent<HTMLFormElement>) => void|undefined)|undefined;

     }
     
     


     export interface FormSchemah{
        nameCompany:string
        nameAddress:string
        industryCompany:string
        sizeCompany:string
        descraption:string
        startDate:Date
        endDate:Date
        jobTitle:string
        jobFiled:string
        jobLocation:string
        currantWork:boolean
        sectorCompany:string
        supervisorName:string
        reasonOfLeaving:string
        employeessupervisebyyou:number
        startSalary:number
        endSalary:number
        currancySalary:string

     }

     
     
     



     