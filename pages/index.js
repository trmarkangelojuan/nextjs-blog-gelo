import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Mark Angelo Juan or simply Gelo. I'm a college student from <a className={utilStyles.schoolLink} href='https://bulsu.edu.ph/'>Bulacan State University</a>. I'm currently exercising my On-the-job training at <a className={utilStyles.companyLink} href="https://twistresources.com/">TwistResources</a>, Inc.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}