import { useEffect, useState } from 'react';
import './App.css';

import Loader from './Loader';
import Profiles from './Profiles';

function App() {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        Loader()?.then((data)=>setUsers(data));
    });
	
    return (
        <div className="App">
			<Profiles userObj={users}/>
        </div>
    );
}

export default App;
