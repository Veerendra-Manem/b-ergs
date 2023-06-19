import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import UpdateUser from './pages/UpdateUser';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<UpdateUser />} />
      <Route
        path="/update-user"
        element={ <UpdateUser /> }
        />
        </Routes>
      );
}

export default App;
