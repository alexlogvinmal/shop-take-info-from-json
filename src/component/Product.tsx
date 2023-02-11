import { IProduct } from '../models';
import './product.css';
import { Link } from 'react-router-dom';

interface ProductProps {
  data: IProduct

}


export function Product({ data }: ProductProps) {



  return (
    <>
      <Link to={`catalog/${data.id}`}>
        <div className='product-list'>
          <div className='img-container'>
            <img className='product-img' src={`${window.location.origin}/img/${data.img1}`} />
          </div>
          <div className='content-container'>
            <p>{data.name}</p>
            <p>${data.price}</p>
            <p>Stock: <b>{data.stock}</b></p>
          </div>
        </div>
      </Link>
    </>

  );
}


