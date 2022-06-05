import React from 'react'
import { UseData } from '../Context/Context'

function ResultDetail() {
    const {data}= UseData();
    console.log(data);
  return (
    <div>ResultDetail</div>
  )
}

export default ResultDetail