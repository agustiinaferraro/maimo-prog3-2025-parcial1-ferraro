'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  const [showImage, setShowImage] = useState(false);

  const hobbies = [
    {nombre:"Diseño", porcentaje:80},
    {nombre:"Programación", porcentaje:0},
    {nombre:"Marketing", porcentaje:20},
  ];

  return (
    <div className='max-w-[1200px] my-8 pt-11 mx-auto w-fit'>
      <h2 className='text-center font-bold text-2xl m-2'>Agustina Ferraro</h2>
      <p className='text-center pb-5'>Estudiante de UMAI</p>

      {!showImage && (
        <button onClick={()=>setShowImage(true)} className=' bg-green-300 text-cyan-950 p-3 w-60 text-center m-5 rounded-lg hover:bg-green-500'>
          Ver Imagen
        </button>
      )}

      <div class='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl px-4 py-8 mx-auto w-fit'>
        {showImage &&(
          <div>
          <Image
            src="/foto.jpeg"
            width={280}
            height={200}
            alt='foto de Agustina Ferraro'
          />
            <button onClick={()=>setShowImage(false)} className=' bg-green-300 text-cyan-950 p-3 w-60 text-center m-5 rounded-lg hover:bg-green-500'>
              Ocultar Imagen
            </button>
          </div>
        )}


        <div className='mx-auto w-fit'>
          <ul>
            <h2 className='text-center text-2xl font-bold'>Mis Hobbies</h2>
            {hobbies.map((hobbie, index)=>(
              <li key={index}>
                {hobbie.nombre} {hobbie.porcentaje}%
              </li>
            ))}
          </ul>
        </div>
          
      </div>
      <div className='flex gap-5'>
        <Link
          className='text-center bg-slate-200 text-cyan-950 p-3 w-60 m-5 rounded-lg hover:bg-gray-50'
          href='/'
        >
          Back
        </Link>
      </div>
    </div>
  );
}
