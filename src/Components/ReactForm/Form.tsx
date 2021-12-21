import FormInput from './FormInput';
import FormLabel from './FormLabel';
import { Form } from 'formik';
import { FormikState, ListItem } from '../../@Types/Types';
import ReactSelectComponent from './ReactSelect/ReactSelectComponent';
import ReactSelect from './ReactSelect/ReactSelect';
import{ currancySalaryOfOptions, 
        industryCompanyOfOptions,
        jobLocationOfOptions, 
        jobTitleOfOptions, 
        jopFiledOfOptions,
        sectorCompanyOfOptions,
        sizeCompanyOfOptions }
     from './ReactSelect/OptionsOfSelectsForm';




export const CustamForm = ({
  handleSubmit ,
  values,
  handleChange,
  errors,
  touched,
  handleBlur}:FormikState<ListItem>):JSX.Element=>{

    return (<Form onSubmit={handleSubmit}  className='work-experine-form'>
      <FormLabel  title={'jop details'}/>
          <ReactSelect 
            as={ReactSelectComponent} 
             name='jobTitle'
             error={errors?.jobTitle}
             options={jobTitleOfOptions} 
              placeholder={'job Title'}  />
              
           <ReactSelect 
              as={ReactSelectComponent} 
              name='jobFiled'
              error={errors?.jobFiled}
              options={jopFiledOfOptions} 
              placeholder={'job Filed'}  />

            <ReactSelect 
              as={ReactSelectComponent} 
              name='jobLocation'
              error={errors?.jobLocation}
              options={jobLocationOfOptions} 
              placeholder={'jobLocation'} />
      
            <div className='date-work'>   
                <FormInput  
                onBlur= {handleBlur}
                value={values.startDate}
                name='startDate'
                type={'text'}
                placeholder='start Date' 
                onChange={handleChange}
                error={errors?.startDate} 
                touched={touched?.startDate}/>
                


                {
                  !values.currantWork&&
                        
              <FormInput  
                onBlur= {handleBlur}
                value={values.endDate}
                name='endDate'
                type={'date'}
                placeholder='endDate' 
                onChange={handleChange}
                error={errors?.endDate} 
                touched={touched?.endDate}/>

                }
         </div>

        
          <label>
          <FormInput 
           onBlur= {handleBlur}
           name='currantWork'
           placeholder='currantWork' 
           onChange={handleChange}
           error={errors?.currantWork} 
           touched={touched?.currantWork}
             type='checkbox' 
           />
           <span>currant Work there</span>
         </label>


       <FormInput  
        component='textarea'
        onBlur={handleBlur}
        value={values.descraption}
        name='descraption'
        placeholder='descraption'
        onChange={handleChange}
        error={errors?.descraption}
        touched={touched?.descraption}/>

         
         <FormLabel  title={'company details'}/>

        <FormInput  
         onBlur= {handleBlur}
         value={values.nameCompany}
         name='nameCompany'
         type={'text'}
         placeholder='nameCompany' 
         onChange={handleChange}
         error={errors?.nameCompany} 
         touched={touched?.nameCompany}/>
         
         <FormInput  
         onBlur= {handleBlur}
         value={values.nameAddress}
         name='nameAddress'
         type={'text'}
         placeholder='nameAddress' 
         onChange={handleChange}
         error={errors?.nameAddress} 
         touched={touched?.nameAddress}/>
               
          <ReactSelect 
            as={ReactSelectComponent} 
            name='industryCompany'
            error={errors?.industryCompany}
            options={industryCompanyOfOptions}
            placeholder={'industry Company'}/>

          <ReactSelect 
            as={ReactSelectComponent} 
            name='sizeCompany'
            error={errors?.sizeCompany}
             options={sizeCompanyOfOptions} 
             placeholder={'size Company'}/>

           <ReactSelect 
            as={ReactSelectComponent} 
            name='sectorCompany'
            error={errors?.sectorCompany}
             options={sectorCompanyOfOptions} 
             placeholder={'sectorCompany'}/>


            <FormInput  
            onBlur= {handleBlur}
            value={values.supervisorName}
            name='supervisorName'
            type={'text'}
            placeholder='supervisorName' 
            onChange={handleChange}
            error={errors?.supervisorName} 
            touched={touched?.supervisorName}/>

          <FormInput  
          onBlur= {handleBlur}
          value={values.employeessupervisebyyou}
          name='employeessupervisebyyou'
          type={'text'}
          placeholder='employeessupervisebyyou' 
          onChange={handleChange}
          error={errors?.employeessupervisebyyou} 
          touched={touched?.employeessupervisebyyou}/>

        <FormInput  
         onBlur= {handleBlur}
         value={values.reasonOfLeaving}
         name='reasonOfLeaving'
         type={'text'}
         placeholder='reasonOfLeaving' 
         onChange={handleChange}
         error={errors?.reasonOfLeaving} 
         touched={touched?.reasonOfLeaving}/>

        <FormLabel title={'compenstation'}/>
        <div className='compenstation-work'>
       
          <FormInput  
            onBlur= {handleBlur}
            value={values.startSalary}
            name='startSalary'
            type={'number'}
            placeholder='startSalary' 
            onChange={handleChange}
            error={errors?.startSalary} 
            touched={touched?.startSalary}/>

            <FormInput  
            onBlur= {handleBlur}
            value={values.endSalary}
            name='endSalary'
            type={'number'}
            placeholder='endSalary' 
            onChange={handleChange}
            error={errors?.endSalary} 
            touched={touched?.endSalary}/>
      
            <ReactSelect 
              as={ReactSelectComponent} 
              name='currancySalary'
              error={errors?.currancySalary}
               options={currancySalaryOfOptions}
                placeholder={'currancy'}/>
          
        </div>

   
    <button type='submit' className='add-btn'>+ save & add  another record</button>
    </Form>)}
