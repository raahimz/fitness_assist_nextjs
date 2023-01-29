import Footer from '@/components/footer';
import Layout from '@/components/layout';
import { Fragment } from 'react';
import ali_abbas from '../public/images/ali_abbas.jpeg';
import shivam_kumar from '../public/images/shivam_kumar.jpg';
import raahim from '../public/images/raahim.jpg';
import ProfileCard from '@/components/profile_card';
import InstagramIcon from '@/components/icons/instagram_icon';
import TwitterIcon from '@/components/icons/twitter_icon';
import GlobeIcon from '@/components/icons/globe_icon';

export default function Calories() {
  return (
    <Fragment>
      <Layout isAuthenticated={true}>
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
            Team
          </h1>
          <p className="max-w-lg ml-auto mr-auto text-gray-300 font-light text-xl">
            <b className="font-bold">Pro</b>
            <span className="font-extralight">Grammers</span>
            <p className="text-sm">Beaconhouse Jubilee Campus</p>
          </p>
        </div>
        <div className="flex team-cards-container md:flex-row sm:flex-col items-center justify-center gap-4 mt-12">
          <ProfileCard
            name="Ali Abbas"
            email={'syedaliabidi22@gmail.com'}
            pic={ali_abbas}
            role={'Tester / Moral Support'}
            socialLink={'https://www.instagram.com/aliabbas_41iv41/'}
            SocialIcon={<InstagramIcon />}
          />
          <ProfileCard
            name="Raahim Zeeshan"
            email={'raahim.home@gmail.com'}
            pic={raahim}
            role={'Programmer / Designer'}
            socialLink={'https://raahimzee.netlify.app/'}
            SocialIcon={<GlobeIcon />}
          />
          <ProfileCard
            name="Shivam Kumar"
            email={'820shivamkumar@gmail.com'}
            pic={shivam_kumar}
            role={'Tester / Designer'}
            socialLink={'https://twitter.com/820shivamkumar'}
            SocialIcon={<TwitterIcon />}
          />
        </div>
      </Layout>
      <Footer />
    </Fragment>
  );
}
