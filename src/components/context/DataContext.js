import {createContext, useReducer} from 'react';
import { DataReducer } from './DataReducer';

export const DataContext=createContext();
const initialVal={
    sortBy:"price",
    products:[],
    cart: [],
}


export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataReducer,initialVal)
  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  )
}


export default DataContext;