import data from "../json/data.json";
import { Product } from './Product';

export function Main() {

  

  return (
    <div className="App">
    {data.result.map(e=> <Product data={e} key={e.id}/>)}
    </div>
  );
}

 
