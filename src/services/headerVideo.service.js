import { app } from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);
const NAME_COLLECTION = 'header_video'

export const getHeaderVideo = async () => {
    return getDocs(collection(db, NAME_COLLECTION))
        .then(response => response)
        .catch(err => err)
}
