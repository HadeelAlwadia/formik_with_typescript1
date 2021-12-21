

import { Route, Routes } from "react-router-dom";
import './App.css';
import JobForm from "./Screens/JobForm";
import SecondForm from './Screens/SecondForm';

export default function App() {
  return (
    <div className="app">
        <Routes>
           <Route path={"/"}   element={<JobForm />} />
           <Route path={"/nextform"}  element={<SecondForm />} />
        </Routes>
    </div>
  )
}
