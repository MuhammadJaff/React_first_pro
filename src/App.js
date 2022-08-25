import { useEffect, useState } from 'react';
import './App.css';

import Loader from './Loader';
import Paging from './Paging';
import Profiles from './Profiles';

function App() {
    const [users,setUsers] = useState([]);
    const [currentpage,setCurrentpage] = useState(1);
    const [totalpage,setTotalpage] = useState(1);

    useEffect(()=>{
        Loader(currentpage)?.then((result)=>{
            setUsers(result.data);
            setCurrentpage(result.page);
            setTotalpage(result.total_pages);
        });

    },[currentpage]);
	
    return (
        <div className="App">
            <Paging pageTotal={totalpage} pageCurrent={currentpage} setCurrent={setCurrentpage}/>
			<Profiles userObj={users}/>
        </div>
    );
}

export default App;
