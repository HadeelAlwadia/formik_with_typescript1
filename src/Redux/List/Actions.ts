import { AddItemAction, CheckItemAction, DeleteItemAction, ListItem, UpditeItemAction } from "../../@Types/Types";
import { ListConstants } from "./Constants";







export const addItem=(item:ListItem):AddItemAction  =>(
{
 type:ListConstants.ADD_ITEM ,
 payload:item
    
})

export const  deleteItem=(idOfItem:number):DeleteItemAction=>(
    {
    type:ListConstants.DELETE_ITEM,
    payload:idOfItem
   })


export  const chekToNExtPage=(titlebutton:string):CheckItemAction=>(
    {
        type:ListConstants.CHEK_TO_NEXT_PAGE,
        payload:titlebutton
        
    }
)

export const upditeOfItem=(idOfItem:number):UpditeItemAction=>(
    {
        type:ListConstants.UPDITE_OF_ITEM,
        payload:idOfItem
    }
)