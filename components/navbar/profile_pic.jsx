import profilePic from '../../public/images/profile_pic_placeholder.jpg';
import Image from 'next/image';
import { useState } from 'react';

export default function ProfilePic({ isAuthenticated }) {
  const [showToolTip, setShowToolTip] = useState(false);

  let handleClick = () => {
    alert('Logging Out');
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <div>
      <Image
        className={`rounded-full hover:opacity-75 ${
          !isAuthenticated ? 'opacity-75' : 'hover:cursor-pointer'
        }`}
        alt="profile_pic"
        src={profilePic}
        width="50"
        height="50"
        onClick={() => {
          if (isAuthenticated) {
            return handleClick();
          }
        }}
        onMouseOver={() => setShowToolTip(true)}
        onMouseOut={() => setShowToolTip(false)}
      />
      <div
        className={`absolute bg-black rounded-lg p-1 mt-1 text-sm font-extralight opacity-70 ${
          showToolTip && isAuthenticated ? '' : 'hidden'
        }`}
      >
        Logout
      </div>
    </div>
  );
}
