import './PreviewCollection.scss'
import CollectionItem from '../collectionItem/CollectionItem'

export default function PreviewCollection({ title, items }) {
  return (
    <div className="PreviewCollection">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items
          .filter((item, index) => index < 4)
          .map(({id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps} />
          ))
        }
      </div>
    </div>
  )
}
