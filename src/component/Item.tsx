import { useParams } from 'react-router-dom';
import './product.css';
import data from "../json/data.json";


export function Item() {

    const { id } = useParams();
    let newdata;
    let error=true;

    if (id == undefined) {
        error=false;
    } else {
        newdata = data.result.filter(e => e.id == +id)
        if(newdata.length==0){
            error=false;
        }
    }
    console.log(newdata)
    return (
        <>
        {error ?    <h1>NORM</h1> : <h1>ERROR</h1>}
        </>

    );
}


