import React from 'react'
import { Link } from 'react-router-dom'
import { UseData } from '../Context/Context'

function SearchResult() {
    const {data}= UseData();
    console.log(data);
  return (
    <div>SearchResulta geldinnnn
        <Link to='ResultDetail' >Detail</Link>
        
    </div>
  )
}

export default SearchResult