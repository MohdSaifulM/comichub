import { fireEvent } from '@testing-library/react';
import firebase from './firebase';

const storage = firebase.storage();
const storageRef = storage.ref();
const imagesRef = storageRef.child('/Amazing Spider-Man 051/Amazing Spider-Man 051-000.jpg');

export async function imageShow() {
    return imagesRef.getDownloadURL()
}