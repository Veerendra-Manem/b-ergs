import { collection, collectionGroup, query, where, doc, getDoc,orderBy } from 'firebase/firestore';
import { db } from './firebase';
// limit, orderBy,
const usersRef = collection(db, 'users');

const usersQuery = query(usersRef, orderBy('updatedAt', 'desc'));

const userDocRef = doc(db, 'users/11111');

const userQuery = getDoc(userDocRef);


// const usersQuery = query(usersRef, limit(20));
// const usersQuery = query(usersRef, where('age', '>', 21), orderBy('age', 'desc'), limit(10));

// const usersQuery = query(usersRef, where('address.city', 'in', ['Norman', 'Indio']));

// const usersQuery = query(
//   usersRef,
//   where('date_joined', '>', new Date('01/01/2023')),
//   where('date_joined', '<', new Date('01/31/2023')),
//   where('gender', '==', 'female'),
//   orderBy('date_joined', 'desc'),
//   limit(10)
// );

const ordersColRef = collectionGroup(db, 'orders');
const ordersQuery = query(
  ordersColRef,
  where('price', '>', 500),
  where('price', '<', 600),
  where('processed', '==', true)
);

export { usersQuery,userQuery, ordersQuery };
