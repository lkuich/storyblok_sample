import Link from 'next/link';

export default function NothingHere() {
  return (
    <div className="flex flex-col gap-1">
      Nothing here! Try:
      <div className="flex flex-col gap-1 pl-4">
        <Link href="/home">/home</Link>
      </div>
    </div>
  );
}
