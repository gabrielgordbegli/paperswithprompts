# Papers with Prompts

Welcome to the `paperswithprompts.com` repository! This website is a dedicated platform for prompt engineers and researchersto discover and share machine learning papers containing prompts.

## How to Add a Paper

If you'd like to contribute by adding a paper to the website, simply follow these steps:

1. Fork this repository.
2. In your forked repository, navigate to the `/public` directory.
3. Open the `papers.js` file.
4. Add a new  *** *chronological* *** entry to the `papers` array with the required information about the paper:
    - `submitted`: The date the paper was submitted, as listed on arXiv.
    - `title`: The title of the paper on arXiv.
    - `link`: The paper's arXiv link.
5. Save your changes and commit them.
6. Create a pull request to merge your changes into the main repository.

Example of how to add a new paper entry:

```javascript
{
  submitted: "5 Oct 2022",
  title: "Ask Me Anything: A simple strategy for prompting language models",
  link: "https://arxiv.org/abs/2210.02441v3",
},
```

Once your pull request has been reviewed and approved (it must contain / be related to prompting), your contribution will be merged into the main repository and the paper will appear on the `paperswithprompts.com` website.

Thank you for your interest and contributions! We're excited to see the platform grow and evolve with the help of the community.