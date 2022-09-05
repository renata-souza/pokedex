import Link from 'next/link'

const LinkTo = ({ href, btnText }) => {
  return (
    <>
      <Link href={href}>
        {btnText}
      </Link>
    </>
  )
}

export default LinkTo