import './discuss.css'

interface DiscussProp{
  road: string,
  title: string,
  description: string
}

const discuss = ({ road,title,description} : DiscussProp) => {

  let myclass = `discuss__image`

  return (
    <>
      <div className='discuss__box otherDiscuss__box'>
        <div className={myclass}>
            <img src={road} alt='contactImg' />
        </div>
        <div className='discuss__message'>
            <p className='discuss__name'>{title}</p>
            <p className='discuss__fewDescription'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default discuss
