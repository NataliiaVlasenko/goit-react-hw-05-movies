import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/api';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviews(movieId);
        setReviews(res);

    if (res.length === 0 ){
    return toast.warn('reviews are not found ', {
        theme: 'colored',
      })
}
      } catch (error) {
        setError(error);
        
      }
    };
    fetchReviews();
   
  }, [movieId]);

const elements = reviews.map(review => {
          
    return (
      <li key={review.id}>
        <p>Author: {review.author}</p>
        <p>{review.content}</p>
      </li>
    );

    
  })



  return (
    <>
      {error && <div>{error}</div>}
      
      <ul>
        {elements}
      </ul>
    
      {/* {reviews} */}
    </>
  );
};

export default Reviews;
