import * as Yup from "yup";
import {  FormSchemah } from "./Types";


 export  const addFormSchema :Yup.SchemaOf<FormSchemah>= Yup.object().shape({

        nameCompany: Yup.string().required('Required'),
        nameAddress:Yup.string().required('nameAddress required'),
        industryCompany:Yup.string().min(10,'company Industry invalid ').required('companyIndustry required'),
        sizeCompany:Yup.string().required('size Company required'),
        descraption:Yup.string().min(100,'descraption shoud be 100 charctaries ').required('descraption required'),
        jobTitle:Yup.string().required('jobTitle required'),
        jobFiled:Yup.string().required('jobFiled required'),
        jobLocation:Yup.string().required('jobLocation required'),
        currantWork:Yup.boolean(),
        sectorCompany:Yup.string().required('sector Company  required'),
        supervisorName:Yup.string().required('supervisorName  required'),
        reasonOfLeaving:Yup.string().when('currantWork',{
          is:false,
          then:Yup.string().required('reasonOfLeaving required ')
        }),
        

        employeessupervisebyyou:Yup.number().required('employeessupervisebyyou required'),
        startSalary:Yup.number().min(100,'start Salary shoud more then 100$').required('startSalary  required'),
        endSalary:Yup.number().min(100,'end Salary  shoud more then 100$').required('endSalary  required'),
        currancySalary:Yup.string().required('currancy Salary required '),
        startDate:Yup.date().max(new Date(),'invaild date !try again').required('startDate  required '),
        endDate:Yup.date().min(Yup.ref("startDate"), "End date should be later than start Date").max(new Date(),'invaild date !try again')
        .when('currantWork',{
          is:false,
          then:Yup.date().required('end Date required ')
    }),

    


  
    
    
  });





