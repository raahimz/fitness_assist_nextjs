import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-row fixed bottom-0 gap-4 p-1 shadow-sm justify-center w-full bg-teal-600 text-md font-light">
      <Link href={'/attributions'}>
        <p className="hover:opacity-75 cursor-pointer underline">
          Attributions
        </p>
      </Link>
      <p>•</p>
      <Link href={'/team'}>
        <p className="hover:opacity-75 cursor-pointer underline">Team</p>
      </Link>
      <p>•</p>
      <Link
        href={'https://github.com/raahimz/fitness_assist_nextjs'}
        target="_blank"
      >
        <p className="hover:opacity-75 cursor-pointer underline">Source Code</p>
      </Link>
    </div>
  );
}
