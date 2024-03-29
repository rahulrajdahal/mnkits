import { Cart } from "meistericons-react";

import {
    AllHTMLAttributes,
    ButtonHTMLAttributes,
    ImgHTMLAttributes,
} from "react";
import Button from "../Button/Button";
import "./styles.css";

interface ICard extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  author: string;
  src: string;
  imageProps?: ImgHTMLAttributes<HTMLImageElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttonText?: string;
  price?: number;
}

export default function Card({
  title = "Subtle Art of not giving a Fuck",
  src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OVQFTpXT0VyrYOZ6OD2AjgHaJ4%26pid%3DApi&f=1&ipt=b9286518a874d2b60be5cbdce6ec19eb3ead2750cbfc2f391447fd8ef3eca7fb&ipo=images",
  author = "Carl Newport",
  imageProps,
  buttonProps,
  buttonText = "Add to Cart",
  price = 5.99,
}: Readonly<ICard>) {
  return (
    <div className="card__container">
      <span className="card__price__container">
        <p className="card__price">
          <sup className="card__price__sign">$</sup>

          {price}
        </p>
      </span>
      <img
        src={src}
        alt={title}
        width={150}
        height={200}
        className="card__img"
        {...imageProps}
      />
      <div className="">
        <strong className="card__title">{title}</strong>
        <p className="card__author">by {author}</p>
      </div>
      <Button {...buttonProps} className="card__button">
        <Cart />
        {buttonText}
      </Button>
    </div>
  );
}
