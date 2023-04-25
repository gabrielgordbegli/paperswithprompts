import { papers } from './papers';
import Table from './Table'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <Table papers={papers}/>
    </main>
  )
}
