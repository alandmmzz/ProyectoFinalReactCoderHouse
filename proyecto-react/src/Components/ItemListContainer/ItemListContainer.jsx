import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import ProductsJson from '../../JSON/Products.json'

function asyncMock(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(categoryId === undefined) {
                resolve(ProductsJson);
             } else {
                const filterProducts = ProductsJson.filter((item) => {
                    return item.category === categoryId
                })
                resolve(filterProducts)
             }
        }, 2000);
    })
}

export default function ItemListContainer({greeting}){

const { categoryId } = useParams()
const [products, setProducts] = useState([]);

useEffect(() => {
   asyncMock(categoryId).then((res) => setProducts(res));
}, [categoryId]);

    return (
        <div class="itemList m-3">
                <ItemList productos={products} />
        </div>  
    )
}