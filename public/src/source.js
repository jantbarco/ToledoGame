// import { initializeApp } from 'firebase/app';
// //import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const firebaseConfig = {
//         apiKey: "AIzaSyAmpa3q0gVVY12-Fb8loV-6ihn3I_8aEzs",
//         authDomain: "condimentosmalher.firebaseapp.com",
//         projectId: "condimentosmalher",
//         storageBucket: "condimentosmalher.appspot.com",
//         messagingSenderId: "602379755692",
//         appId: "1:602379755692:web:388e0a271996aaaacf7f09",
//         measurementId: "G-Y8VEWK4WYX"
//       };

// const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);

// // async function callfn(usuario, resultado) {
// //     console.log('registra resultado');
// //     await db.collection('resultado').doc().set({
// //         usuario,
// //         resultado
// //     })
// // }

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
// import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore-lite.js';
// //import { collection, addDoc } from "firebase/firestore"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyAmpa3q0gVVY12-Fb8loV-6ihn3I_8aEzs",
//   authDomain: "condimentosmalher.firebaseapp.com",
//   projectId: "condimentosmalher",
//   storageBucket: "condimentosmalher.appspot.com",
//   messagingSenderId: "602379755692",
//   appId: "1:602379755692:web:388e0a271996aaaacf7f09",
//   measurementId: "G-Y8VEWK4WYX"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export function callfn(usuario, resultado) {
//     console.log('registra resultado {' + usuario + ', ' + resultado + '}');
//     // db.collection('resultado').doc().set({
//     //     usuario,
//     //     resultado
//     //})

//     try {
//       const docRef = addDoc(collection(db, "resultado"), {
//         username: usuario,
//         puntos: resultado,
//         fecha: new Date()
//       });
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
// }