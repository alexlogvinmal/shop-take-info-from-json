import { IProduct } from '../models';

interface ProductProps {
  data: IProduct

}


export function Product({ data}: ProductProps) {

  

  return (
    <div className="App">
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <img src={`${window.location.origin}/img/${data.img1}`} />
    </div>
  );
}

 
