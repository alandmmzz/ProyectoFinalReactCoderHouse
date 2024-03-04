import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export default function ItemListContainer({greeting}){

    const { categoryId } = useParams()
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        
        if (categoryId !== undefined){

            const categoriesDB = collection(db, "categories");
            getDocs(categoriesDB).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No categories were found")
                };
                const fetchedCategories = snapshot.docs.map((doc => ({
                    id: doc.id, ...doc.data()
                })));
                setCategories(fetchedCategories);

                // Filtrar productos por la categoría seleccionada
                const categoryFiltered = fetchedCategories.filter((category) => category?.title === categoryId);
                
                const productsDB = query(collection(db, "products"), where("categoryId", "==", categoryFiltered[0]?.key));
                getDocs(productsDB)
                    .then((snapshot) => {
                        if (snapshot.empty) {
                            console.log("No matching products found.");
                            // Manejar caso de no encontrar productos
                            return;
                        }
                        setProducts(snapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        })));
                    })
                    .catch((error) => {
                        console.error("Error fetching products:", error);
                        // Manejar el error adecuadamente
                    });
            })

        } else {

            const productsDB = collection(db, "products");
            getDocs(productsDB).then((snapshot) => {
                setProducts(snapshot.docs.map((doc => ({
                    id: doc.id, ...doc.data()
                }))))
            })
        }


    }, [categoryId]);
    
    return (
        <div className="itemList d-flex flex-wrap justify-content-evenly m-3">
                <ItemList productos={products} />
        </div>  
    )
}