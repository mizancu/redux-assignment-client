export interface IUser {
  _id: string;
  email: string;
  name: { firstName: string; lastName: string };
  role: string;
  createdAt: string;
  updatedAt: string;
}
export interface IReview {
  userName: string;
  userEmail: string;
  message: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  postedBy: string;
  reviews?: IReview[];
  createdAt?: string;
  updatedAt?: string;
  status: boolean;
}
