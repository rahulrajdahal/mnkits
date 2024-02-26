import { Cart } from "meistericons-react";

import { AllHTMLAttributes, ImgHTMLAttributes } from "react";
import Button, { IButton } from "../Button/Button";

interface ICard extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  author: string;
  src: string;
  imageProps?: ImgHTMLAttributes<HTMLImageElement>;
  buttonProps?: IButton;
  buttonText?: string;
}

export default function Card({
  title = "Subtle Art of not giving a Fuck",
  src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OVQFTpXT0VyrYOZ6OD2AjgHaJ4%26pid%3DApi&f=1&ipt=b9286518a874d2b60be5cbdce6ec19eb3ead2750cbfc2f391447fd8ef3eca7fb&ipo=images",
  author = "Carl Newport",
  imageProps,
  buttonProps,
  buttonText = "Add to Cart",
}: Readonly<ICard>) {
  return (
    <div className="px-5 py-7 max-w-[17.5rem] rounded-[20px]">
      <img
        src={src}
        alt={title}
        width={150}
        height={200}
        className="w-full h-[18.75rem] rounded-xl"
        {...imageProps}
      />
      <div className="mt-3">
        <strong className="font-semibold text-lg leading-6 text-gray-700">
          {title}
        </strong>
        <p className="mt-1 text-gray-400 text-[13px] italic leading-[18px]">
          by {author}
        </p>
      </div>
      <Button
        {...buttonProps}
        className="flex gap-2 mt-5 w-full items-center justify-center"
      >
        <Cart />
        {buttonText}
      </Button>
    </div>
  );
}
