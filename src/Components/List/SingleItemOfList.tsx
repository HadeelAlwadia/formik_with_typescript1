import {useDispatch} from 'react-redux';
import { deleteItem, upditeOfItem }  from '../../Redux/List/Actions';
import { FaTrashAlt ,FaEdit } from 'react-icons/fa';
import { AppDispatch } from '../../Redux/Store';
import { InitialState, ListItem } from '../../@Types/Types';



interface IProps {
  dataOfItem:ListItem
}


 function SingleItemOfList(props:IProps):JSX.Element {


    const dispatch=useDispatch<AppDispatch>();



    const handleDeleteItem=(idItem:number):void=> {
      dispatch( deleteItem(idItem));
}
     const handleUpditeItem=(idItem:number): void=> {
        dispatch( upditeOfItem(props.dataOfItem.idItem));
  }


    return (
         <div className='SingleData'>
            <h3 className='title-SingleData'>{props.dataOfItem.nameCompany}</h3>
            <h4 className='data-SingleData'>{props.dataOfItem.startDate}</h4>
            <div>
                <FaEdit     className=' icon editicon ' 
                  onClick={()=> handleUpditeItem(props.dataOfItem.idItem) }/>
                <FaTrashAlt  className='icon deleteicon'  
                 onClick={()=> handleDeleteItem(props.dataOfItem.idItem) }/> 
            </div>
        </div>
    )
}



export default SingleItemOfList;

