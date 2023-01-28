import TextButton from './text_button';
import ProfilePic from './profile_pic';

export default function Navbar({ isAuthenticated }) {
  return (
    <div className="flex flex-row justify-between bg-teal-500 items-center px-8 py-2">
      <TextButton
        label="Fitness Assist"
        url={'/'}
        isAuthenticated={isAuthenticated}
      />
      <div className="flex flex-row gap-8">
        <TextButton
          label={'Bmi'}
          url={'/bmi'}
          isAuthenticated={isAuthenticated}
        />
        <TextButton
          label={'Calories'}
          url={'/calories'}
          isAuthenticated={isAuthenticated}
        />
        <TextButton
          label={'Progress'}
          url={'/progress'}
          isAuthenticated={isAuthenticated}
        />
        <TextButton
          label={'Workout'}
          url={'/workout'}
          isAuthenticated={isAuthenticated}
        />
      </div>
      <div>
        <ProfilePic isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
}
