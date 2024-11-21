// import { Button } from '@mui/material';
import React from 'react'
import Button from 'react-bootstrap/Button';

function SortButtons(props) {


    const sortAZ = () => {
        props.products.sort((a,b) => a.title.localeCompare(b.title))
        props.setProducts(props.products.slice());
      }
      const sortZA = () => {
        props.products.sort((a,b) => b.title.localeCompare(a.title))
        props.setProducts(props.products.slice());
      }
      const sortAscendingPrice = () => {
        props.products.sort((a, b) => a.price - b.price);
        props.setProducts(props.products.slice());
        }
      const sortDecendingPrice = () => {
        props.products.sort((a, b) => b.price - a.price);
        props.setProducts(props.products.slice());
        }
    
           // Sorting by Rating Ascending
        const sortRatingAscending = () => {
            props.products.sort((a, b) => a.rating.rate - b.rating.rate);
            props.setProducts(props.products.slice());
      }
    
      // Sorting by Rating Descending
        const sortRatingDescending = () => {
            props.products.sort((a, b) => b.rating.rate - a.rating.rate);
            props.setProducts(props.products.slice());
      }
    

  return (
    <>
      <Button onClick={sortAZ}>Sort A-Z</Button>
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortAscendingPrice}>Price ascending</Button>
      <Button onClick={sortDecendingPrice}>Price decending</Button>
      <Button onClick={sortRatingAscending}>Rating ascending</Button>
      <Button onClick={sortRatingDescending}>Rating descending</Button>
    </>
  )
}

export default SortButtons