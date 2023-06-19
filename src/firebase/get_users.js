import { getDocs, getDoc, doc } from 'firebase/firestore';
import { usersQuery, userQuery } from './simple_query';
import { db } from './firebase';

export const getUsers = async () => {
  //   const usersRef = collection(db, 'users');
  const usersSnapshot = await getDocs(usersQuery);
  return usersSnapshot.docs.map((doc) => doc.data());
};

// export const getUser = async () => {
//   //const usersRef = collection(db, 'users'); 
//   //const usersSnapshot = await getDoc(userQuery);
//   const usersSnapshot = await getDocs(usersQuery);
//   //let col = usersSnapshot.docs.map((doc) => doc.data());
//   return  usersSnapshot.docs.map((doc) => doc.data())[0];
// };

export const getUser = async(docId) => {
  // console.log(docId);
  // console.log(data);
  // data.updatedAt = serverTimestamp();
  const userDocRef = doc(db, 'users/'+docId);
  const userSnap = await getDoc(userDocRef);
  return userSnap.data();
}
