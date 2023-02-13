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
            <p className='product-name'>{data.name}</p>
            <b>${data.price}</b>
            <p>Stock: <i>{data.stock}</i></p>
          </div>
        </div>
      </Link>
    </>

  );
}


