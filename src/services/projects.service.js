import { app } from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);
const NAME_COLLECTION = 'projects'

export const getProjects = async () => {
    return getDocs(collection(db, NAME_COLLECTION))
        .then(response => response)
        .catch(err => err)
}
