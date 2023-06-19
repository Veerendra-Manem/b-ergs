import { useState } from 'react';

const UserForm = ({ onSubmit, user }) => {
  console.log(user);

  const [Id, setId] = useState(user?.Id || '');
  const [ERG1, setErg1] = useState(user?.ERG1 || false);
  const [ERG2, setErg2] = useState(user?.ERG2 || false);
  const [ERG3, setErg3] = useState(user?.ERG3 || false);
  const [ERG4, setErg4] = useState(user?.ERG4 || false);
  const [ERG5, setErg5] = useState(user?.ERG5 || false);
  const [ERG6, setErg6] = useState(user?.ERG6 || false);
  const [ERG7, setErg7] = useState(user?.ERG7 || false);
  const [ERG8, setErg8] = useState(user?.ERG8 || false);
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      Id,
      ERG1,
      ERG2,
      ERG3,
      ERG4,
      ERG5,
      ERG6,
      ERG7,
      ERG8
    });
  };

  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="Id" className="block text-sm font-medium text-gray-700">
          Id
        </label>
        <input
          type="text"
          id="name"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg1'}
        />
      </div>
      <div>
        <label htmlFor="ERG1" className="block text-sm font-medium text-gray-700">
        WiN
        </label>
        <input type="checkbox"
          id="ERG1"
          checked={ERG1}
          onChange={(e) => setErg1(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg1'}
        ></input>
      </div>
      <div>
        <label htmlFor="ERG2" className="block text-sm font-medium text-gray-700">
        Spectrum
        </label>
        <input type="checkbox"
          id="ERG2"
          checked={ERG2}
          onChange={(e) => setErg2(e.target.checked)}          
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg2'}
        ></input>
      </div>
      <div>
        <label htmlFor="ERG3" className="block text-sm font-medium text-gray-700">
        Reach
        </label>
        <input type="checkbox"
          id="ERG3"
          checked={ERG3}
          onChange={(e) => setErg3(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg3'}
        ></input>
      </div>
      <div>
        <label htmlFor="ERG4" className="block text-sm font-medium text-gray-700">
        Emerge
        </label>
        <input type="checkbox"
          id="ERG4"
          checked={ERG4}
          onChange={(e) => setErg4(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg4'}
        ></input>
      </div>
      <div>
        <label htmlFor="ERG5" className="block text-sm font-medium text-gray-700">
        WFRG
        </label>
        <input type="checkbox"
          id="ERG5"
          checked={ERG5}
          onChange={(e) => setErg5(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg5'}
        ></input>
      </div>
      <div>
        <label htmlFor="ERG6" className="block text-sm font-medium text-gray-700">
        MCRG (Embrace)
        </label>
        <input type="checkbox"
          id="ERG6"
          checked={ERG6}
          onChange={(e) => setErg6(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg6'}
        ></input>
      </div>
      <div>
        <label htmlFor="ERG7" className="block text-sm font-medium text-gray-700">
        BBTO
        </label>
        <input type="checkbox"
          id="ERG7"
          checked={ERG7}
          onChange={(e) => setErg7(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg7'}
        ></input>
      </div>
      <div>
        <label htmlFor="ERG8" className="block text-sm font-medium text-gray-700">
        HKEN (Environment Network)
        </label>
        <input type="checkbox"
          id="ERG8"
          checked={ERG8}          
          onChange={(e) => setErg8(e.target.checked)}
          className="mt-1 block w-full border border-gray-300 rounded-md"
          disabled={pass !== 'erg8'}
        ></input>
      </div>
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
        className="bg-blue-600 primary text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
