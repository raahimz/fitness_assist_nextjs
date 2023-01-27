import TextButton from './text_button';
import ProfilePic from './profile_pic';

export default function Navbar({ isAuthenticated }) {
  return (
    <div className="flex flex-row justify-between bg-teal-500 items-center px-8 py-2">
      <div className="">Hi</div>
      <div className="flex flex-row gap-8">
        <TextButton label={'Bmi'} />
        <TextButton label={'Calories'} />
        <TextButton label={'Progress'} />
        <TextButton label={'Workout'} />
      </div>
      <div>
        <ProfilePic isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
}
