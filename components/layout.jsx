import Link from 'next/link';
import Navbar from './navbar/navbar';

export default function Layout({ children, isAuthenticated }) {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="px-8 py-8">{children}</main>
    </>
  );
}
