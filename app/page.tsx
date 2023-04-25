import { papers } from './papers';
import Table from './Table'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <Link href="https://github.com/gabrielgordbegli/paperswithprompts">
        <div className="absolute right-0 top-0 p-4">
          <Image src="/github.svg" alt="GitHub Logo" width={50} height={50} />
        </div>
      </Link>
      <Table papers={papers} />
    </main>
  )
}
