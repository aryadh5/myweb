import { ContentfulContentType, getEntriesOfType } from '@services/contentful';
import { HomePage, Post } from '@types';
import { About } from '@components/About';
import { LinkCard } from '@components/Card';
import { Date } from '@components/Date';
import { GetStaticProps } from 'next';
import Layout from '@components/layouts/PageLayout';
import React from 'react';
import { sortBy } from '@utilities';
import Link from 'next/link';

type HomeProps = {
  allPostsData: Post[];
  homePageData: HomePage;
  projects: Post[];
};

export default function Home({ allPostsData, homePageData, projects }: HomeProps) {
  const { name, about, pageDescription, pageTitle } = homePageData;

  return (
    <Layout description={pageDescription} title={`${name} | ${pageTitle}`}>
      {/* About Section */}
      <About name={name} aboutText={about} />

      {/* Blog Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-6">Blog</h2>
        <ul className="space-y-6">
          {allPostsData.map(({ title, publishDate, slug, category }) => (
            <li key={slug}>
              <LinkCard className="mb-4 bg-blue-600 text-white" href={`/${category}/${slug}`}>
                <div className="font-semibold -mb-1">{title}</div>
                <Date dateString={publishDate} />
              </LinkCard>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="text-blue-600 mt-4 inline-block">
          View all blog articles
        </Link>
      </section>

      {/* Projects Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(({ title, slug, color }) => (
            <li className="w-full text-center mb-4" key={slug}>
              <LinkCard
                className={`text-white ${color ?? 'bg-blue-600'}`}
                href={`/portfolio/${slug}`}
              >
                <p className="font-semibold">{title}</p>
              </LinkCard>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// Fetch the data from Contentful
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getEntriesOfType<Post>(ContentfulContentType.Post);
  const homePage = await getEntriesOfType<HomePage>(ContentfulContentType.HomePage);

  return {
    props: {
      allPostsData: sortBy<Post>(
        (p) => p.publishDate,
        posts.items.filter((post) => post.category === 'blog')
      ).splice(0, 3),
      homePageData: homePage.items[0],
      projects: sortBy<Post>(
        (p) => p.publishDate,
        posts.items.filter((post) => post.category === 'portfolio')
      ),
    },
  };
};
