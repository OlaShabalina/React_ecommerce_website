import './Homepage.style.scss'
import MenuItem from '../../components/menuItem/MenuItem'

export default function Homepage() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <MenuItem title='Summer' />
        <MenuItem title='Jumpsuits' />
        <MenuItem title='Tops' />
        <MenuItem title='Dresses' />
        <MenuItem title='Swimwear' />
        <MenuItem title='Knitwear' />
      </div>
    </div>
  )
}
