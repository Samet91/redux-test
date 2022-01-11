import { useState } from "react";
import "./App.css";
import { bookmarksSlice } from "./App/slices/bookmarks/BookmarksSlice";
import { useGetBooksQuery } from "./App/slices/booksApi/BooksApiSlice";
import Card from "./components/Card/card";
import { toggle } from "./App/slices/bookmarks/BookmarksSlice";
import { useAppDispatch, useAppSelector } from "./App/hooks";
import { setRating } from "./App/slices/Rating/Rating.slice";
import Modal from "./components/Modal/modal";

function App() {
  const [count, setCount] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const { data, isFetching, error } = useGetBooksQuery(20);
  const dispatch = useAppDispatch();
  const ratings = useAppSelector((state) => state.ratings);
  const bookmarks = useAppSelector((state) => state.bookmarks);

  function handleClick(id: number) {
    dispatch(toggle(id));
  }

  function handleChange(id: number, rating: number) {
    dispatch(setRating({ id, rating }));
  }

  if (isFetching) {
    return <p>Waiting for Data fetch to complete!</p>;
  }
  if (error) {
    return <p>Fetching Data was not succesfull!</p>;
  }

  return (
    <div>
      <div>
        <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
        {showModal ? <Modal title={""} author={""} image={""} /> : <br />}
        {data.data.slice(0, `${count}`).map(
          (book: {
            id: number;
            isbn: string; //Isbn als key nehmen - da api die id jedes mal wechselt
            title: string;
            image: string;
            author: string;
          }) => (
            <Card
              key={book.isbn}
              title={book.title}
              author={book.author}
              image={book.image}
              bookmarked={bookmarks.includes(book.id)}
              handleClick={() => handleClick(book.id)}
              rating={
                ratings.findIndex((rating) => rating.id === book.id)
                  ? ratings[
                      ratings.findIndex((rating) => rating.id === book.id)
                    ]
                  : 0
              }
              handleChange={(event: any) =>
                handleChange(book.id, Number(event.target.value))
              }
            />
          )
        )}
      </div>
      <button onClick={() => setCount(count + 3)}>Load more </button>
    </div>
  );
}

export default App;
