import { useParams } from 'react-router-dom';
import './product.css';
import data from "../json/data.json";


export function Item() {

    const { id } = useParams();
    let newdata=data.result;
    let error=true;

    if (id == undefined) {
        error=false;
    } else {
        newdata = newdata.filter(e => e.id == +id)
        if(newdata.length==0){
            error=false;
        }
    }
    console.log(newdata)
    return (
        <>
        {error ?  <>
         <h1>{newdata[0].name}</h1>
         <p>{newdata[0].stock}</p>
         <p>{newdata[0].description}</p>
        </> 
        
        
        : <h1>PRODUCT NOT FOUND</h1>}
        </>

    );
}


