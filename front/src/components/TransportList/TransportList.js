import React from 'react';
import TransportListItem from "../TransportListItem/TransportListItem";

const TransportList = ({list, title, changeStatus}) => {
    return (
        <>
            {list.length > 0 && (
                <div  className="container row mx-auto">
                    <div className={"h3 text-center mb-4"}>{title}({list.length})</div>
                    {list.map(i => (
                       <TransportListItem key={i.id} changeStatus={changeStatus} item={i}/>
                    ))}
                </div>
            )}
        </>
    );
};

export default TransportList;