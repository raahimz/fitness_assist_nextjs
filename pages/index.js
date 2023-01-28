import Layout from '@/components/layout';
import LoginPrompt from '@/components/login_prompt';
import MagicButton from '@/components/magic_button';
import SecondaryButton from '@/components/secondary_button';
import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

export default function Index() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const checkAuthenticated = () => {
    const foundUsername = localStorage.getItem('username')
      ? JSON.parse(localStorage.getItem('username'))
      : false;
    if (!foundUsername) {
      setIsAuthenticated(false);
    } else {
      setUsername(foundUsername);
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  });

  return (
    <Layout isAuthenticated={isAuthenticated}>
      <div
        id="home-container"
        className="flex sm:text-center md:text-center lg:text-left sm:flex-col md:flex-col lg:flex-row justify-between xl:px-32 lg:px-16 md:px-8 py-12 items-center "
      >
        <div className="flex flex-col gap-16">
          {isAuthenticated ? (
            <div class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
              <h1 className="text-3xl">Welcome Back, {username}!</h1>
              <h1 className="font-light italic text-xl">
                {`What hurts today makes you stronger tomorrow! It's never too
                late to get started...`}
              </h1>
            </div>
          ) : (
            ''
          )}
          <div className={`${!isAuthenticated ? 'mt-32' : ''}`}>
            <div className="text-3xl">
              <h1>Fitness Assist</h1>
              <h1 className="font-extralight italic">
                ~ Assist you to a Fitter Lifestyle!
              </h1>
            </div>
            <p className="font-extralight mt-6 lg:max-w-md">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content
            </p>
            {!isAuthenticated ? (
              <div className="mt-6">
                <MagicButton
                  label={'Get Started'}
                  onClickHandler={() => setShowLoginPrompt(true)}
                />
                <LoginPrompt
                  showLoginPrompt={showLoginPrompt}
                  setShowLoginPrompt={setShowLoginPrompt}
                />
              </div>
            ) : (
              <div className="mt-6">
                <Link href="/bmi">
                  <SecondaryButton label={'Bmi'} onClickHandler={() => {}} />
                </Link>
                <Link href="/calories">
                  <SecondaryButton
                    label={'Calories'}
                    onClickHandler={() => {}}
                  />
                </Link>
                <Link href="/progress">
                  <SecondaryButton
                    label={'Progress'}
                    onClickHandler={() => {}}
                  />
                </Link>
                <Link href="/workout">
                  <SecondaryButton
                    label={'Workout'}
                    onClickHandler={() => {}}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="mt-16">
          <Player
            autoplay
            loop
            src="https://lottie.host/b5b84923-0868-4731-a57c-2ed39cf70cda/mlcVJwNiGv.json"
            style={{ height: '350px', width: '350px' }}
          />
        </div>
      </div>
    </Layout>
  );
}
