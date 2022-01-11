import { useState } from "react";
import "./App.css";
import { useGetBooksQuery } from "./App/slices/booksApi/BooksApiSlice";
import Card from "./components/Card/card";

function App() {
  const [count, setCount] = useState(3);
  const { data, isFetching, error } = useGetBooksQuery(20);

  if (isFetching) {
    return <p>Waiting for Data fetch to complete!</p>;
  }
  if (error) {
    return <p>Fetching Data was not succesfull!</p>;
  }

  return (
    <div>
      <div>
        {data.data.slice(0, `${count}`).map(
          (book: {
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
              bookmarked={false}
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          )
        )}
      </div>
      <button onClick={() => setCount(count + 3)}>Load more </button>
    </div>
  );
}

export default App;
