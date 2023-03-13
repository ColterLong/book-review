import React from 'react'

const BookPreviewCard = ( {title, author} ) => {
  return (
    <div>
      key={title}
      title: {title}
      author: {author}
    </div>
  )
}

export default BookPreviewCard