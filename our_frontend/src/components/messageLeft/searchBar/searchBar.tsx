import './searchBar.css'
import research from '../../../assets/search.svg'
import { useState } from 'react'

const searchBar = () => {

  const [search, setSearch] = useState<string>('')

  const handleChange = (e: any)=>{
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