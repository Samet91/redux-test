import "./App.css";
import { useGetBooksQuery } from "./App/features/BooksApi/BooksApiSlice";

function App() {
  const { data, isFetching, error } = useGetBooksQuery(20);
  return <h1>halloo</h1>;
}

export default App;
