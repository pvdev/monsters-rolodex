import React from 'react'

import './search-box.styles.css'

// sets up for event based state updates
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={ placeholder }
        onChange={ handleChange }
    />
)