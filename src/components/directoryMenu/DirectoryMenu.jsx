import './DirectoryMenu.styles.scss'
import { shopSections } from './../../data'
import MenuItem from './../menuItem/MenuItem'

export default function DirectoryMenu() {


  return (
    <div className='directory-menu'>
        {shopSections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
  )
}
