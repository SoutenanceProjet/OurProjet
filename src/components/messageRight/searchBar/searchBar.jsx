import React, { useState } from 'react'
import './searchBar.css'
import research from '../../../assets/search.svg'

const searchBar = () => {

  const [search, setSearch] = useState('')

  const handleChange = (e)=>{
      setSearch(e.target.value)
  }

  return (
    <>
      <div className='searchBar__input'>
        <div className='searchBar__box'>
          <div className='searchBar__research'><img src={research} alt='loop' /></div>
          <input type='text' placeholder='search chat' value={search} onChange={handleChange}/>
        </div>
      </div>
    </>
  )
}

export default searchBar