import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Bmi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const checkAuthenticated = () => {
    const foundUsername = localStorage.getItem('username')
      ? JSON.parse(localStorage.getItem('username'))
      : false;
    if (!foundUsername) {
      router.push('/');
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  });

  return (
    <Layout isAuthenticated={isAuthenticated}>
      {isAuthenticated && (
        <>
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
              Keep track of your Workout
            </h1>
            <p className="max-w-lg ml-auto mr-auto text-gray-300 font-light">
              {`🔨 Coming Soon...`}
            </p>
          </div>
        </>
      )}
    </Layout>
  );
}
