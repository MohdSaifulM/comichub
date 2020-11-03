import { fireEvent } from '@testing-library/react';
import firebase from './firebase';
import swal from 'sweetalert';


const storage = firebase.storage();
const storageRef = storage.ref();


export async function imageShow(id, page) {
    return storageRef.child(`/${id}/${page}.jpg`).getDownloadURL();
}

export async function listPages(id) {
    return storageRef.child(`/${id}`).listAll();
}

export async function authLogin(email, password, func) {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        swal({
            title: `ERROR ${error.code}`,
            text: error.message,
            icon: "warning",
            button: "Try again",
        });
        console.log(error.code);
        console.log(error.message);
    }).then((res) => {
        const user = firebase.auth().currentUser;
        if (user != null) {
            func(true);
            swal({
                title: "Logged in successfully",
                icon: "success",
                button: "Let's read some comics!",
            })
        }
    })

}

export async function signUp(email, password, displayName, func) {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        swal({
            title: `ERROR ${error.code}`,
            text: error.message,
            icon: "warning",
            button: "Try again",
        });
        console.log(error.code);
        console.log(error.message);
    }).then((res) => {
        const user = firebase.auth().currentUser;
        if (user != null) {
            func(true);
            swal({
                title: "Signed up successfully",
                icon: "success",
                button: "Let's read some comics!",
            }).then((reload) => {
                if (reload) {
                    window.location.reload();
                }
            });
            return user.updateProfile({
                displayName: displayName,
            })
        }
    })
}

