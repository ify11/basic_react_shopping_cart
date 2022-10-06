import DataContext from "../DataContext";
import { useContext } from "react";

const useData = () => {
  return (
    useContext(DataContext)
  )
}

export default useData