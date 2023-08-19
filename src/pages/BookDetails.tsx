import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useGetSingleBookQuery } from '@/redux/features/book/bookApi';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);

  return (
    <>
      <div className="flex max-w-7xl mx-auto item-center border-b border-gray-300">
        <div className="w-[30%]">
          <img src={data?.image} alt="" />
        </div>
        <div className="w-[70%] space-y-3">
          <h1 className="text-3xl font-semibold">{data?.title}</h1>
          <p className="text-xl">Author: {data?.author}</p>
          <p className="text-xl">Price: {data?.price}</p>
          <p className="text-xl">Description: {data?.description}</p>

          <Button>Add to wishlist</Button>
        </div>
      </div>
      <ProductReview />
    </>
  );
}
