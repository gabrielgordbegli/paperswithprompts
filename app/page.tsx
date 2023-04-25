import Table from './Table.tsx'
import Header from './Header.tsx'

const papers = [
  {
      submitted: '7 Apr 2023',
      title: 'Generative Agents: Interactive Simulacra of Human Behavior',
      link: 'https://arxiv.org/pdf/2304.03442.pdf'
  },
  {
      submitted: '10 Jan 2023',
      title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
      link: 'https://arxiv.org/pdf/2201.11903.pdf'
  },
  {
      submitted: '15 Feb 2021',
      title: 'Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm',
      link: 'https://arxiv.org/pdf/2102.07350v1.pdf'
  }
  // More people...
]

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen">

      <Table papers={papers}/>
    </main>
  )
}
