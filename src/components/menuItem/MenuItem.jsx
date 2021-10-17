import './MenuItem.styles.scss'

export default function MenuItem({ title, imgUrl }) {
  return (
    <div 
    style={{
      backgroundImage: `url(${imgUrl})`
    }}
    className='menuItem'
    >
      <span className='overlay'></span>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}
