import { useParams } from 'react-router-dom';
import './item.css';
import data from "../json/data.json";
import { useState } from 'react';


export function Item() {

    const { id } = useParams();
    let newdata = data.result;
    let error = true;

    if (id == undefined) {
        error = false;
    } else {
        newdata = newdata.filter(e => e.id == +id)
        if (newdata.length == 0) {
            error = false;
        }
    }
    const [dynamicimg, Setdynamicimg] = useState(newdata[0].img1)

    return (
        <>
            {error ?
                <>
                    <div className='item-content'>
                        <div className='item-img-container'>
                            <img className='product-img' src={`${window.location.origin}/img/${dynamicimg}`} />
                            <div className='img-catalog'>
                                <img className='product-img-catalog' onClick={e => Setdynamicimg(newdata[0].img1)} src={`${window.location.origin}/img/${newdata[0].img1}`} />
                                <img className='product-img-catalog' onClick={e => Setdynamicimg(newdata[0].img2)} src={`${window.location.origin}/img/${newdata[0].img2}`} />
                                <img className='product-img-catalog' onClick={e => Setdynamicimg(newdata[0].img3)} src={`${window.location.origin}/img/${newdata[0].img3}`} />
                            </div>

                        </div>
                        <div className='item-content2'>
                            <h1>{newdata[0].name}</h1>
                            <p>${newdata[0].price}</p>
                            <p>{newdata[0].stock}</p>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <div>
                        <p>DESCRIPTION</p>

                        {newdata[0].description.map(e => <p>{e}</p>)}
                    </div>

                </>


                : <h1>PRODUCT NOT FOUND</h1>}
        </>

    );
}


