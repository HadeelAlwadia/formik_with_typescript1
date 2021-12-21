
import { Formik } from 'formik';
import { addItem } from '../../Redux/List/Actions';
import {addFormSchema} from '../../@Types/Validation'
import { useDispatch, useSelector } from 'react-redux';
import { CustamForm } from './Form';
import { AppDispatch, AppState } from '../../Redux/Store';
import { ListItem } from '../../@Types/Types';





const checkIdItem=(values:ListItem):number=>{
  return values.idItem=values.idItem===0?values.idItem=Math.random():values.idItem ;
}

 function ReactForm():JSX.Element {

    const {valueOfForm} = useSelector<AppState>(state => state.list)
    
    const dispatch = useDispatch<AppDispatch>();

    const  handleSubmit=(values:ListItem):void=>{
      checkIdItem(values);
      alert(JSON.stringify(values));
      dispatch(addItem(values))
    }

    return (
        <Formik 
         initialValues={valueOfForm}
         validationSchema={addFormSchema}
          onSubmit={(values)=>{handleSubmit(values)}} >
             {CustamForm}
          </Formik>
    )
}
export default ReactForm;