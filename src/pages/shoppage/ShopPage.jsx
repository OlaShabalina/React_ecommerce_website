import React from 'react'
import { shopSections } from '../../data'
import PreviewCollection from '../../components/previewCollection/PreviewCollection'

export default function ShopPage() {
  return (
    <div className="ShopPage">
      {shopSections.map(({id, ...otherCollectionProps}) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}
