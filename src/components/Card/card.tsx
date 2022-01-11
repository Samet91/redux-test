import classes from "./card.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Rating } from "@mui/material";

type cardProps = {
  title: string;
  author: string;
  image: string;
  rating: any;
  bookmarked: boolean;
  handleClick: () => void;
  handleChange: (event: any) => void;
};

export default function Card({
  title,
  author,
  image,
  rating,
  bookmarked,
  handleClick,
  handleChange,
}: cardProps): JSX.Element {
  return (
    <div className={classes.card_area_div}>
      <h2>Title: {title}</h2>
      <p>Author: {author}</p>
      <img src={image} height="200" />
      <br />
      <br />
      <Rating name={title} value={rating} onChange={handleChange} />

      <div onClick={handleClick}>
        {bookmarked ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
    </div>
  ); // damit rating componente weiß //wo er drauf liegt, man könnte auch id nehme hauptsache unique
}
