import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firestoreFetchOne from "../utils/customFetch";
import { dataFromBD } from '../utils/dataFromBD';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();
 
    useEffect(() => {
        firestoreFetchOne(idItem)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return(
            <ItemDetail item={dato}/>
    );
}
 
export default ItemDetailContainer;