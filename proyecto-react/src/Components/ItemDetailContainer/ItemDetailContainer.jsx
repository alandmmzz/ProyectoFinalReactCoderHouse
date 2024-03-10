import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { doc, getDoc, getFirestore } from 'firebase/firestore';

import ItemDetail from './ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"


export default function ItemDetailContainer() {

    const { itemId } = useParams()
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const biciRef = doc(db, 'products', itemId);
        getDoc(biciRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() })
            }
        })

    }, [itemId]);

    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}