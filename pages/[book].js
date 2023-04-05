import { useRouter } from 'next/router'
import Image from 'next/image'




export default function BookDetails() {
  const router = useRouter()
  const title = router.query.title
  const author = router.query.author
  const bookImage = router.query.bookImage
  const description = router.query.description
  const isbn10 = router.query.isbn10
  const isbn13 = router.query.isbn13
  const publisher = router.query.publisher


  return (
    <>
      <Image
          // className={styles.image}
          alt={title}
          src={bookImage}
          width={200}
          height={300}
        />
      <p>Title: {title}</p> 
      <p>Author: {author}</p>
      <p>Description: {description}</p>
      <p>isbn10: {isbn10}</p>
      <p>isbn13: {isbn13}</p>
      <p>publisher: {publisher}</p>
    </>
  )
}