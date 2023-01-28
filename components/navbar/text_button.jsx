import Link from 'next/link';

export default function TextButton({ label, url, isAuthenticated }) {
  return (
    <Link href={isAuthenticated ? url : '/'}>
      <p
        className={`cursor-default hover:opacity-75 text-lg font-extralight ${
          !isAuthenticated ? 'opacity-75' : 'opacity-100'
        } ${
          !isAuthenticated ? 'hover:cursor-default' : 'hover:cursor-pointer'
        }`}
      >
        {label}
      </p>
    </Link>
  );
}
