import { StarFilledIcon, StarIcon, WalletIcon } from "@/assets/svgs/Svg";
import Button from "./Button";
import Modal from "./Modal";
import Link from "next/link";
import Rating from "./Rating";

const ProductCard = ({
  title,
  body,
  price,
  rating,
}: {
  title: string;
  body: string;
  price: string;
  rating: number;
}) => {
  return (
    <>
      <div className="bg-[#FAF4F3] w-[372px] h-[325px] p-10 hover:border-dashed hover:border-2 hover:border-[#942D3B]">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h4 className="font-bold text-[16px] capitalize">{title}</h4>
          <p className="font-normal text-[14px] leading-[22.61px] text-justify">
            {body}
          </p>

          <div className="flex flex-row w-full justify-between">
            {/* Price */}
            <div className="flex flex-row space-x-2">
              <WalletIcon />
              <p className="font-semibold text-[15px]">{price}$</p>
            </div>

            {/* Rating */}
            <Rating rating={rating} title={title} />
          </div>
          <Link href={"/" + title}>
            <Button />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
