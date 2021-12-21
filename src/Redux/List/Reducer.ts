import { ActionsType, InitialState, ListItem } from "../../@Types/Types";
import { ListConstants } from "./Constants";




const initialState:InitialState= {
    list :[
           { idItem:1,       
            nameCompany:'hadeel',
            nameAddress:'hadeel',
            industryCompany:'',
            sizeCompany:'small company',
            descraption:'',
            startDate:'22-10-2021',
            endDate:'22-10-2021',
            jobTitle:'',
            jobFiled:'',
            jobLocation:'',
            currantWork:true,
            sectorCompany:'',
            supervisorName:'hadeel',
            reasonOfLeaving:'',
            employeessupervisebyyou:'5',
            startSalary:'1000',
            endSalary:'10000',
            currancySalary:'dinar'
          }
        ],

     valueOfForm:{
                idItem:0,       
                nameCompany:'',
                nameAddress:'',
                industryCompany:'',
                sizeCompany:'',
                descraption:'',
                startDate:'',
                endDate:'',
                jobTitle:'',
                jobFiled:'',
                jobLocation:'',
                currantWork:false,
                sectorCompany:'',
                supervisorName:'',
                reasonOfLeaving:'',
                employeessupervisebyyou:'',
                startSalary:'',
                endSalary:'',
                currancySalary:''
              },

    isNext:false
}



export const list=( state:InitialState=initialState,action:ActionsType)=>{

    switch(action.type){
        case ListConstants.ADD_ITEM:{

             return {...state,
                list:[action.payload,...state.list.filter((item)=>{return item.idItem!== action.payload.idItem })]};
         }
         case ListConstants.DELETE_ITEM:{
            return {...state,list:[...state.list.filter(item=>{ return  item.idItem!== action.payload } ) ]};
         }

        case ListConstants.CHEK_TO_NEXT_PAGE:{
            return {...state,isNext:state.list.length&&'naxt'=== action.payload?true:false };
        }
        
         
        case ListConstants.UPDITE_OF_ITEM:{
         const upditeItem:ListItem|undefined=state.list.find(item=>{return item.idItem===action.payload})
         console.log(upditeItem)
         return {...state,valueOfForm:{
            idItem:upditeItem?.idItem,       
            nameCompany:upditeItem ?.nameCompany,
            nameAddress:upditeItem?.nameAddress,
            industryCompany:upditeItem?.industryCompany,
            sizeCompany:upditeItem?.sizeCompany,
            descraption:upditeItem?.descraption,
            startDate:upditeItem?.startDate,
            endDate:upditeItem?.endDate,
            jobTitle:upditeItem?.jobTitle,
            jobFiled:upditeItem?.jobFiled,
            jobLocation:upditeItem?.jobLocation,
            currantWork:upditeItem?.currantWork,
            sectorCompany:upditeItem?.sectorCompany,
            supervisorName:upditeItem?.supervisorName,
            reasonOfLeaving:upditeItem?.reasonOfLeaving,
            employeessupervisebyyou:upditeItem?.employeessupervisebyyou,
            startSalary:upditeItem?.startSalary,
            endSalary:upditeItem?.endSalary,
            currancySalary:upditeItem?.currancySalary
         
         }};


        }


        default :  return  {...state};
    }


}
