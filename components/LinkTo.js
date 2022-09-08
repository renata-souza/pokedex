import Link from 'next/link'

const LinkTo = ({ href, children }) => {
  return (
    <>
      <Link href={href}>
        {children}
      </Link>
    </>
  )
}

export default LinkTo