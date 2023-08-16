import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.jpg';
import bookPile from '@/assets/images/bookPile.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Home() {
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
      <div className="mb-96">
        <div>
          <img className="mx-auto" src={bookPile} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black text-primary uppercase mt-10">
            Read all kind of books here...
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
