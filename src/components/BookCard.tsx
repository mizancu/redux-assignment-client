import { IBook } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const handleAddBook = (book: IBook) => {
    toast({
      description: 'Product Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-center justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <div>
          <Link to={`/books/${book._id}`}>
            <img src={book?.image} className="w-40 h-56" alt="product" />
            <h1 className="text-xl font-semibold">{book?.title}</h1>
          </Link>
        </div>
        <p>Rating: {book?.rating}</p>
        <p className="text-sm">
          Availability: {book?.status ? 'In stock' : 'Out of stock'}
        </p>
        <p className="text-sm">Price: {book?.price}</p>
        <Button variant="default" onClick={() => handleAddBook(book)}>
          Read this book
        </Button>
      </div>
    </div>
  );
}
