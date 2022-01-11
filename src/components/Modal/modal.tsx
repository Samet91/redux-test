import { ClassNames, jsx } from "@emotion/react";
import classes from "./modal.module.css";

type modalProps = {
  title: string;
  author: string;
  image: string;
};

export default function Modal({
  title,
  image,
  author,
}: modalProps): JSX.Element {
  return (
    <div className={classes.modal}>
      <h1>hallo</h1>
    </div>
  );
}
