import Link from 'next/link';
import Image from 'next/image';

export default function ProfileCard({
  name,
  email,
  pic,
  role,
  SocialIcon,
  socialLink,
}) {
  return (
    <div className="font-extralight secondaryBg shadow-md rounded-lg p-3 w-fit flex flex-col gap-3">
      <div>
        <div className="flex flex-row items-center gap-2">
          <Link
            class="flex justify-center text-teal-500 hover:opacity-75 hover:cursor-pointer"
            href={socialLink}
            target="_blank"
          >
            {SocialIcon}
          </Link>
          <h3 className="font-bold text-xl">{name}</h3>
        </div>
        <p
          className="font-light text-sm text-gray-500 hover:opacity-75 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(email).then(
              () => {
                alert('Email copied to clipboard');
              },
              (err) => {
                console.log('Failed to copy Email: ', err);
              }
            );
          }}
        >
          {email}
        </p>
      </div>
      <Image
        src={pic}
        alt="Profile Pic"
        className="rounded-3xl border border-gray-500 drop-shadow ml-auto mr-auto"
        width={200}
        height={200}
      />
      <p className="text-center font-extralight">{role}</p>
    </div>
  );
}
