import Footer from '@/components/footer';
import Layout from '@/components/layout';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Calories() {
  return (
    <Fragment>
      <Layout isAuthenticated={true}>
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
            Attributions
          </h1>
          <p className="max-w-lg ml-auto mr-auto text-gray-300 font-light">
            {`What tools did we use? Where did we get our graphics from?`}
          </p>
        </div>
        <div className="flex flex-row justify-center gap-4 mt-12">
          <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 w-fit flex flex-col gap-6">
            <h3 className="font-bold text-xl">Tools</h3>
            <ul>
              <Link
                href={'https://nextjs.org/'}
                className="flex flex-row gap-2"
              >
                <li className=" text-teal-500 hover:opacity-75">Next JS</li>
              </Link>
              <Link href={'https://tailwindcss.com/'}>
                <li className=" text-teal-500 hover:opacity-75">
                  Tailwind CSS
                </li>
              </Link>
              <Link href={'https://www.mongodb.com/atlas/database'}>
                <li className=" text-teal-500 hover:opacity-75">
                  MongoDB Atlas
                </li>
              </Link>
            </ul>
          </div>
          <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 w-fit flex flex-col gap-6">
            <h3 className="font-bold text-xl">Graphics</h3>
            <ul>
              <Link href={'https://lottiefiles.com/'}>
                <li className=" text-teal-500 hover:opacity-75">LottieFiles</li>
              </Link>
              <Link
                href={
                  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fprofile-placeholder.html&psig=AOvVaw1-jguEdO9t5Q4cOFUCyug4&ust=1675062908720000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC6_96d7PwCFQAAAAAdAAAAABAE'
                }
              >
                <li className=" text-teal-500 hover:opacity-75">
                  Deposit Photos
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Layout>
      <Footer />
    </Fragment>
  );
}
