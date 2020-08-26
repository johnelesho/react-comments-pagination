import React from 'react'

const  Pagination = ({commentsPerPage, totalComments, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(totalComments / commentsPerPage);i++){
pageNumbers.push(i);
    }
    const style = { display : 'block'};
    return (
       <nav style={style}>
           <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)} href="!#" className="page-link">
                            {number} </a>
                    </li>
                ))}
           </ul>
       </nav>
    )
}

export default Pagination;