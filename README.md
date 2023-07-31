# 🧑‍💻 Codingly - A Blog for Developers

Welcome to Codingly, a blog built for developers by developers. This repository houses the source code for the blog, which is created using Astro, a modern static site generator.

## About Codingly

Codingly is my personal blog, sharing my coding experiences, problem-solving insights, and software development solutions. It aims to evolve into a community blog with contributions from various authors, welcoming developers of all levels to participate, learn, and exchange ideas.

## [Live Demo](https://codingly.netlify.app/)

![codingly-demo-image](public/opengraph.jpg)

## Features

- Dynamically Generated Pages: Discover a seamless browsing experience with dynamically generated posts, categories, and author pages, ensuring fresh and up-to-date content at your fingertips.
- Responsive Design: Enjoy a visually appealing and user-friendly blog, optimized for all devices, providing an enjoyable reading experience on desktops, tablets, and mobiles alike.
- Contact Form: Get in touch with the blog author via a contact form, allowing you to send messages directly from the blog.

## How to Contribute

We welcome contributions from the developer community to enrich the blog with fresh perspectives and valuable content. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your enhancements or additions.
4. Submit a pull request, describing the changes you've made.

## Getting Started

To run the blog locally, you'll need Node.js and npm installed on your system. Follow these steps to get started:

1. Clone this repository to your local machine.
2. Install the project dependencies with `npm install`.
3. Start the development server with `npm run dev.`
4. Open your browser and visit http://localhost:3000 to see the blog in action.

## Project Structure

Inside of your Astro project, you'll find the following directories and files:

```text
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory. These files will be copied into the final build.

## Reporting Issues

If you come across any bugs, have suggestions for improvements, or want to request new features, please submit an issue in the GitHub repository. Your feedback is highly appreciated!

## License

This project is licensed under the General Public License v3.0. See the [LICENSE](LICENSE) file for details.
