import CMS from "decap-cms-app";
import React from "react";

// Replace Astro components with React-compatible components
const Authorcard = ({ author }) => (
  <div className="author-card">
    <img src={author.image} alt={author.name} className="author-image" />
    <p>{author.name}</p>
    <p>{author.bio}</p>
  </div>
);

const Container = ({ children }) => <div className="container">{children}</div>;

const Label = ({ theme, children }) => (
  <span className={`label label-${theme}`}>{children}</span>
);

const Layout = ({ title, desc, ogimage, children }) => (
  <div className="layout">
    <header>
      <h1>{title}</h1>
      <p>{desc}</p>
      {ogimage && <img src={ogimage} alt={title} />}
    </header>
    <main>{children}</main>
  </div>
);

// Data from authors and categories
import authors from "../../src/data/authors.json";
import categories from "../../src/data/categories.json";

// Utility function to format dates (you may need to adjust this depending on how your utility works)
import { getFormattedDate } from "../../src/utils/all";

// Blog post preview component
const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  // Get author and category information from the JSON data
  const author = authors.find((item) => item.slug === data.author) || {};
  const category = categories.find((item) => item.slug === data.category) || {};

  // Render the blog post with the Astro-like layout and components
  return (
    <Layout title={data.title} desc={data.excerpt} ogimage={data.image}>
      <Container>
        <div className="max-w-screen-md mx-auto">
          <div className="text-center">
            {category.title && (
              <a href={`/category/${category.slug}`}>
                <Label theme={category.color}>{category.title}</Label>
              </a>
            )}
          </div>

          <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            {data.title}
          </h1>

          <div className="flex justify-center mt-3 space-x-3 text-gray-500">
            <div className="flex items-center gap-3">
              {author.image && (
                <div className="relative flex-shrink-0 w-10 h-10">
                  <img
                    src={author.image}
                    alt="Author Photo"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              )}
              <div>
                <a href={`/author/${author.slug}`}>
                  <p className="text-gray-800 dark:text-gray-400">
                    {author.name}
                  </p>
                </a>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={data.publishDate}>
                    {getFormattedDate(data.publishDate)}
                  </time>
                  <span> · {data.estimateReadingTime || 5} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {data.image && (
        <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
          <img
            src={data.image}
            width={1024}
            height={576}
            alt="Thumbnail"
            loading="eager"
            className="w-full"
          />
        </div>
      )}

      <Container>
        <article className="max-w-screen-md mx-auto">
          <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-600">
            {widgetFor("body")}
          </div>

          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap items-center w-full gap-3 md:w-auto">
              {data.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-500">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-7 mb-7">
            <a
              href="/blog"
              className="px-5 py-3 text-sm text-blue-600 transition rounded-md dark:text-purple-500 bg-purple-50 hover:bg-blue-200 dark:hover:bg-purple-200">
              ← View all posts
            </a>
          </div>

          {author && <Authorcard author={author} />}
        </article>
      </Container>
    </Layout>
  );
};

// Register the preview template with DecapCMS
CMS.registerPreviewTemplate("blog", BlogPostPreview);
