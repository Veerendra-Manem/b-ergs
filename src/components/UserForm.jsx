import { useState } from 'react';

const UserForm = ({ onSubmit, user }) => {
  

  const [Id, setId] = useState(user?.Id || '');
  const [ERG1, setErg1] = useState(user?.ERG1 || false);
  const [ERG2, setErg2] = useState(user?.ERG2 || false);
  const [ERG3, setErg3] = useState(user?.ERG3 || false);
  const [ERG4, setErg4] = useState(user?.ERG4 || false);
  const [ERG5, setErg5] = useState(user?.ERG5 || false);
  const [ERG6, setErg6] = useState(user?.ERG6 || false);
  const [ERG7, setErg7] = useState(user?.ERG7 || false);
  const [ERG8, setErg8] = useState(user?.ERG8 || false);
  const [ERG9, setErg9] = useState(user?.ERG9 || false);
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //for (let Id = 1600; Id > 1000; Id--) {
    //console.log(Id);     
    onSubmit({
      Id,
      ERG1,
      ERG2,
      ERG3,
      ERG4,
      ERG5,
      ERG6,
      ERG7,
      ERG8,
      ERG9
    });
    //}
    setPass('');
  };

  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="Id" className="block text-sm font-medium text-gray-700">
          ID  :
        </label>
        <input
          type="text"
          id="name"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg'}
        />
      </div>
      <table></table>
      <tr>
        <td>
        <input type="checkbox"
          id="ERG1"
          checked={ERG1}
          onChange={(e) => setErg1(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '111'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG1"  className="block text-sm font-medium text-gray-700">
        WiN
        </label>
        </td>
      </tr>
      <tr>
      <td>
        <input type="checkbox"
          id="ERG2"
          checked={ERG2}
          onChange={(e) => setErg2(e.target.checked)}          
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '444'}
        ></input>
        </td>
      <td>
        <label htmlFor="ERG2" className="block text-sm font-medium text-gray-700">
        Spectrum
        </label>
        </td>        
       </tr>
       <tr>
       <td>
        <input type="checkbox"
          id="ERG3"
          checked={ERG3}
          onChange={(e) => setErg3(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '000'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG3" className="block text-sm font-medium text-gray-700">
        Reach
        </label>
        </td>        
       </tr>
       <tr>
       <td>
        <input type="checkbox"
          id="ERG4"
          checked={ERG4}
          onChange={(e) => setErg4(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '222'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG4" className="block text-sm font-medium text-gray-700">
        Emerge
        </label>
        </td>        
       </tr>
       <tr>
       <td>
        <input type="checkbox"
          id="ERG5"
          checked={ERG5}
          onChange={(e) => setErg5(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '333'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG5" className="block text-sm font-medium text-gray-700">
        Working Families (WFRG)
        </label>
        </td>       
       </tr>
       <tr>
       <td>
        <input type="checkbox"
          id="ERG6"
          checked={ERG6}
          onChange={(e) => setErg6(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '555'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG6" className="block text-sm font-medium text-gray-700">
        Embrace (MCRG)
        </label>
        </td>       
       </tr>
       <tr>
       <td>
        <input type="checkbox"
          id="ERG7"
          checked={ERG7}
          onChange={(e) => setErg7(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '777'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG7" className="block text-sm font-medium text-gray-700">
        BBTO
        </label>
        </td>        
      </tr>
      <tr>
      <td>
        <input type="checkbox"
          id="ERG8"
          checked={ERG8}          
          onChange={(e) => setErg8(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '999'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG8" className="block text-sm font-medium text-gray-700">
        HKEN (Environment Network)
        </label>
        </td>       
       </tr>
       <tr>
       <td>
        <input type="checkbox"
          id="ERG9"
          checked={ERG9}          
          onChange={(e) => setErg9(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== '888'}
        ></input>
        </td>
        <td>
        <label htmlFor="ERG9" className="block text-sm font-medium text-gray-700">
        Supporting Our Communities
        </label>
        </td>        
       </tr>
      <input
          type="password"
          id="pass"
          value={pass}
          pass
          onChange={(e) => setPass(e.target.value)}      
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      <button
        type="submit"        
        className="bg-blue-600 text-black px-4 py-2 rounded-md hover:bg-blue-700"
        disabled={pass === ''}
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
