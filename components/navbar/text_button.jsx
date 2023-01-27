export default function TextButton({ label }) {
  return (
    <p className="hover:cursor-pointer cursor-default hover:opacity-75 text-lg font-extralight">
      {label}
    </p>
  );
}
