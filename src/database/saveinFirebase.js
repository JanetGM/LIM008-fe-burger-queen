import firebase from 'firebase';
import firebaseApp from '../services/firebase';

const addNewPedido = (clientName, pedido) => firebaseApp.firestore().collection('orders').add({
  name: clientName,
  fecha: firebase.firestore.FieldValue.serverTimestamp(),
  pedido: pedido 
}).catch(error => error);

export default addNewPedido;