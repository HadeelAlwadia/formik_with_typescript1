import { NavLink } from 'react-router-dom';
import {useSelector ,useDispatch} from 'react-redux';
import {  chekToNExtPage } from '../../Redux/List/Actions';
import { AppState } from '../../Redux/Store';


interface IProps {
  titlebutton:string
}


 function SingleSittingButton(props:IProps):JSX.Element {

    const {isNext} = useSelector<AppState>(state => state.list)
    const dispatch=useDispatch();

    const handlechekToNExtPage=(titlebutton:string): void=> {
      dispatch( chekToNExtPage(titlebutton));
      console.log(isNext,props.titlebutton);

   }
   

    return (
        <NavLink   to={isNext?'nextform':''}>
        <button 
          onClick={()=>{handlechekToNExtPage(props.titlebutton)}}

           className={`btn btn-${props.titlebutton} `}>
            {props.titlebutton} 
          </button>
          </NavLink>
    )
}


export default SingleSittingButton;


