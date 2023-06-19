import UserForm from '../components/UserForm';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from '../firebase/firestore';
import { useParams } from "react-router";
import { getUser } from '../firebase/get_users';

const UpdateUser = () => {
  const { state } = useLocation();
  const { navigate } = useNavigate();
  //const user = state;

  const [user, setUser] = useState('');

  let { id } = useParams();
  useEffect(() => {
    getUser(id).then(setUser).catch(console.error);
  }, []);
 
  const handleUpdateUser = (user) => {
    console.log(user);
    updateUser(user.Id, user);
    //navigate(`/user/${user.id}`);
  };

  return (
    <div className="min-h-screen">    
      {user ? (
        <div className="container max-w-xl mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-4">Sign Up {user.Id}</h1>
          <UserForm onSubmit={handleUpdateUser} user={user} />
        </div>
      ) : (
        <div>
          <p>No user found to update</p>
          <h2>ID: {id}</h2>
        </div>
      )}      
    </div>
  );
};

export default UpdateUser;
