import React, { useState } from "react";

export const Pagination =({className,...props})=>{
    const defaultPageSize =5;
    const[pageSize, setPageSize]=useState(defaultPageSize);
    const pageHandler=(totalCount,countLimit)=>{
            pageSize = Math.ceil(totalCount/countLimit);
            setPageSize(()=>pageSize);
            for(let i=0;i<length.pageSize;i++){
                <a href="#">i</a>
            }
    }
    const leftArrowHandler =()=>{
        alert(pageSize)
        const list = []
        // for(let i=0;i<length.pageSize;i++){
        //     <a href="#">i</a>
        // }
    }
    return(
    <div className={className}>
        
        <a onClick={leftArrowHandler} >&larr;</a>
        {}
    </div>
    );
};
