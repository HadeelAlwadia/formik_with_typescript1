import SingleItemOfList from './SingleItemOfList';
import  {useSelector} from 'react-redux';
import { AppState } from '../../Redux/Store';
import { ListItem } from '../../@Types/Types';


export default function  List () :JSX.Element{
const {list}  = useSelector<AppState ,ListItem>((state) => state.list);

 
    return (
        <div className='work-xperince-list'>
            { list.map(item =>{
                 return <SingleItemOfList   dataOfItem={item}  key={`${item.idItem}`}/>
                })}
        </div>
    )
}





