import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

export default function Login() {
    const {authenticate} = useMoralis();

  return <div className='relative'>
      <div className='relative h-screen w-full'>
          <Image src="https://links.papareact.com/55n" layout="fill" objectFit='cover' />
      </div>
      <div className='absolute top-0 h-4/6 w-full flex flex-col justify-center items-center space-y-4'>
          <Image className='rounded-full' src="https://links.papareact.com/3pi" width={200} height={200} />
          <button onClick={authenticate} className='bg-yellow-500 text-white font-semibold px-6 py-2 rounded-sm animate-pulse'>Login to Metavers</button>
      </div>
  </div>;
}
