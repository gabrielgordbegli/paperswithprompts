import Link from 'next/link'

export default function Button({ link, text }) {
    return (
        <>
            <Link href={link}>
                <p className='text-sm text-gray-300 hover:text-green-500'>{text}&nbsp;</p>
            </Link >
        </>
    )
}
