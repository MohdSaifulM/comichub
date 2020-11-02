import { fireEvent } from '@testing-library/react';
import firebase from './firebase';

const storage = firebase.storage();
const storageRef = storage.ref();

export async function imageShow(id, page) {
    return storageRef.child(`/${id}/${page}.jpg`).getDownloadURL()
}