import './MenuItem.styles.scss'

export default function MenuItem({ title, imgUrl }) {
  return (
    <div 
    style={{
      backgroundImage: `url(${imgUrl})`
    }}
    className='menuItem'
    >
      <div className='content'>
        <span className='overlay'></span>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}
