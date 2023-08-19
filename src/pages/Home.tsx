import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.jpg';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import { useGetBooksQuery } from '@/redux/api/apiSlice';
import { IBook } from '@/types/globalTypes';
import BookCard from '@/components/BookCard';
import Loader from '@/components/ui/Loader';

export default function Home() {
  const { data } = useGetBooksQuery(undefined);
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-2 justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-4xl font-black text-primary mb-2">
            READING ROOM <br /> Anytime anywhere
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Read your favorite books anytime you want.
          </p>
          <div className="text-primary mt-20">
            <p>
              Reading books expands your mind, fostering empathy, critical
              thinking, and creativity as it transports you into diverse
              perspectives and worlds. It's a timeless avenue for personal
              growth and learning, enriching your understanding of the human
              experience and the complexities of the world.
            </p>
          </div>
          <Button className="mt-5">Read more</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-60 px-10 xl:px-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            Recently added top 10 books
          </h1>
          {data === undefined ? (
            <Loader />
          ) : (
            <div className="col-span- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 xl:gap-10 2xl:gap-24 py-20">
              {[...data]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 10)
                .map((book: IBook) => (
                  <BookCard book={book} key={book._id} />
                ))}
            </div>
          )}
          <Button className="mt-10" asChild>
            <Link to="/books">Brows all books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
