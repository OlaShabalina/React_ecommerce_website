import './MenuItem.styles.scss';
import { withRouter } from 'react-router-dom';

export default withRouter(function MenuItem({ title, img, history, linkUrl, match }) {
  return (
    <div 
    style={{
      backgroundImage: `url(${img})`
    }}
    className='menuItem'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <span className='overlay'></span>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
})