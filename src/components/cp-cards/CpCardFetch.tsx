import React from 'react'

const CpGetFetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

export default CpGetFetchData;