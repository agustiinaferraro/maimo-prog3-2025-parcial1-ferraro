import Card from '@/app/components/Card';

export default function MoviesGrid({ movies, loading }) {
  return (
    <div className='grid'>
      {
        movies.map((movie)=>(
          <Card movie={movie} loading={loading}/>
        ))        
      }
    </div>
  );
}
