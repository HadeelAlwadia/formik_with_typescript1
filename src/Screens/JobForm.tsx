import {  useSelector } from "react-redux";
import ReactForm from "../Components/ReactForm/ReactForm";
import List  from "../Components/List/List";
import SittingButtons from "../Components/SittingButtons/SittingButtons";
import { AppState } from "../Redux/Store";


function JobForm():JSX.Element {
 const list = useSelector<AppState>(state => state.list)
  return (
    <div className="work-experine-mainform">
      <List/>
      <ReactForm/>
      <SittingButtons/>
    </div>
  );
}

export default JobForm;