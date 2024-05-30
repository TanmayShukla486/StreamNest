import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition mr-2 shrink-0 lg:mr-0 lg:shrink">
        <Image
          className="rounded-full border-2 border-white "
          src={'/logo.png'}
          alt="logo"
          width={40}
          height={40}
        />
        <div className="hidden lg:block font-chakra transition">
          <p className="font-semibold text-lg">StreamNest</p>
          <p className="text-muted-foreground text-xs">
            Watch and play, All day!!
          </p>
        </div>
      </div>
    </Link>
  );
};
