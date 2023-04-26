import { papers } from './papers';
import Table from './Table'
import Button from './Button'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">
      <div className='absolute top-0 left-0 flex flex-row w-screen items-end justify-end'>
        <Button link={'https://prompts.paperswithprompts.com/'} text={'Prompts'} />
        <Button link={'https://forge.paperswithprompts.com/'} text={'Optimizer'} />
        <Button link={'https://github.com/gabrielgordbegli/paperswithprompts'} text={'Repo'} />
      </div>
      <Table papers={papers} />
    </main>
  )
}
