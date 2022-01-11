import classes from "./card.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type cardProps = {
  title: string;
  author: string;
  image: string;
  bookmarked: boolean;
  handleClick: () => void;
};

export default function Card({
  title,
  author,
  image,
  bookmarked,
  handleClick,
}: cardProps): JSX.Element {
  return (
    <div className={classes.card_area_div}>
      <h2>Title: {title}</h2>
      <p>Author: {author}</p>
      <img src={image} height="200" />
      <div onClick={handleClick}>
        {bookmarked ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
    </div>
  );
}
