import {useParams} from "react-router-dom"
import Detail from "./Detail"
const Details = (props)=> {
  

    const{id}=useParams()
  
    
    
    return (
       <Detail id={id} detail={props.detail} getDetails={props.getDetails}></Detail>
    )
}
export default Details

