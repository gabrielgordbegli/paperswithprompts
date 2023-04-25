import Link from 'next/link'

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

export default function Example() {

    return (
        <div className="mx-auto w-fit h-fit ">
            <div className="bg-black py-10">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                Submitted
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Title
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        {papers.map((paper) => (
                                            <tr key={paper.submitted}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                    {paper.submitted}
                                                </td>
                                                <td>
                                                    <Link href={paper.link}>
                                                        <div className="whitespace wrap px-3 py-4 text-sm text-gray-300 hover:text-green-500 ">{paper.title}</div>
                                                    </Link>
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
