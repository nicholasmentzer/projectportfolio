import Link from 'next/link'
import clsx from 'clsx'

const Logo = (className, props) => {
  return (
    <Link href="/">
        <h2 className={clsx('text-4xl font-medium text-amber-900 hover:text-gold duration-300', className)} {...props}>
            Nicholas Mentzer
        </h2>
    </Link>
  )
}

export default Logo