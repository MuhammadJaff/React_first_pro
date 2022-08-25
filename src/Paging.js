import React from 'react'

function Paging({pageTotal,pageCurrent,setCurrent}) {
    let turn = (pageCurrent === pageTotal ? "previous":"next");

    const clickHandle = ()=>{
        let newpage;
        pageCurrent === pageTotal ? newpage = pageCurrent-1 : newpage = pageCurrent + 1;
        setCurrent(newpage);  
    }
    
    return (
        <div>
            <button onClick={clickHandle}>{turn}</button>
        </div>
    )
}

export default Paging
