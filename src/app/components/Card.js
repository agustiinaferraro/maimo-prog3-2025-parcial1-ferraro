import Image from 'next/image';
import Link from 'next/link';
export default function Card({movie}) {
  return (
      <div
        key={movie.id}
        className='col_3 flex flex-col justify-center items-center gap- p-4 rounded-lg text-white m-2'
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={500}
          height={200}
          alt={movie.title}
          className='rounded-lg'
        />
        <h2>{movie.title}</h2>
        <Link href={`/movie/${movie.id}`} 
        className='bg-slate-200 text-cyan-950 p-3 w-60 m-5 rounded-lg text-center hover:bg-gray-50'>
        Ver detalle</Link>
      </div>
  )
}
