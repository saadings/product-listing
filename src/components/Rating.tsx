"use client";

import { StarFilledIcon, StarIcon } from "@/assets/svgs/Svg";
import Modal from "./Modal";
import { useState } from "react";

const Rating = ({
  rating,
  title,
  modal = true,
}: {
  rating: number;
  title: string;
  modal?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {modal && (
        <Modal productName={title} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <div
        className="flex flex-row space-x-1"
        onClick={modal ? () => setIsOpen((prev) => !prev) : () => {}}
      >
        {[...Array(rating)]?.map((_, i) => <StarFilledIcon key={i} />)}
        {[...Array(5 - rating)]?.map((_, i) => <StarIcon key={i} />)}
      </div>
    </div>
  );
};

export default Rating;
