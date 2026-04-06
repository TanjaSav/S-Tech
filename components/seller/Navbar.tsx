import { assets } from '@/assets/assets';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
      <div onClick={() => router.push('/')} className="cursor-pointer flex items-center gap-2">
        <Image src={assets.logo} alt="S-Tech Logo" />
      </div>
      <button className="bg-[#102E65] text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  );
};

export default Navbar;
