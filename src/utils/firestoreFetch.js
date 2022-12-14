import { query, where, collection, getDocs, doc } from '@firebase/firestore';
import { db } from '../utils/firebaseConfig';

const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "dataFromBD"), where("categoryId", "==", idCategory));
    } else {
        q = query(collection(db, "dataFromBD"));
    }
    const querySnapshot = await getDocs (q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "dataFromBD", idItem);
    const docSnap = await getDocs(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No such document!");
    }
}

export default firestoreFetch;