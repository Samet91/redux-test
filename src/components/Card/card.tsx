import classes from "./card.module.css";

type cardProps = {
  title: string;
  author: string;
  image: string;
};

export default function Card({ title, author, image }: cardProps): JSX.Element {
  return (
    <div className={classes.card_area_div}>
      <h2>Title: {title}</h2>
      <p>Author: {author}</p>
      <img src={image} height="200" />
    </div>
  );
}
