import './PreviewCollection.scss'

export default function PreviewCollection({ title, items }) {
  return (
    <div className="PreviewCollection">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items
          .filter((item, index) => index < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        }
      </div>
    </div>
  )
}
