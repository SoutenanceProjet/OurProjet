import React from 'react'
import SearchBar from '../searchBar/searchBar'
import Discuss from '../discuss/discuss'
import './secondPart.css'
import User from '../../../assets/User.jpg'
import User1 from '../../../assets/User1.jpg'
import User2 from '../../../assets/User2.jpg'
import User3 from '../../../assets/User3.jpg'
import User4 from '../../../assets/User4.jpg'
import User5 from '../../../assets/User5.jpg'
import User6 from '../../../assets/User6.jpg'
import User7 from '../../../assets/User7.jpg'

const secondPart = () => {
  return (
    <>
      <div className='second'>
          <SearchBar />
          <Discuss road={User} title='Aya Nakamura' description='you have late for our last meeting'/>
          <Discuss road={User1} title='Helena Hills' description='Will head to the Help Center...'/>
          <Discuss road={User2} title='Oscar Davis' description='Trueeeeee'/>
          <Discuss road={User3} title='Daniel Jay Park' description='lol yeah, are you coming to the lunch'/>
          <Discuss road={User4} title='Mark Rojas' description='great catching up over dinner!!'/>
          <Discuss road={User5} title='Giannis Constantinou' description='yep bro'/>
          <Discuss road={User6} title='Briana Lewis' description='When are you coming back to town?'/>
          <Discuss road={User7} title='Mom' description='Thank you'/>
      </div>
    </>
  )
}

export default secondPart
