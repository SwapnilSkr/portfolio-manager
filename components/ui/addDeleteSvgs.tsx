"use client";

import { ChamberType } from "@/utils/types";

interface Props {
  onClickAdd: () => void;
  onClickDelete: () => void;
  array: string[] | ChamberType[] | Record<string, string>[];
  index: number;
}

const AddDeleteSVGs: React.FC<Props> = ({
  onClickAdd,
  onClickDelete,
  array,
  index,
}) => {
  return (
    <>
      <div
        className={`xs:w-[10%] md:w-[5%] ${
          array.length - 1 === index ? "hidden" : "block"
        }`}
      ></div>
      <div
        className={`xs:w-[10%] md:w-[5%] ${
          array.length - 1 === index ? "hidden" : "block"
        }`}
      ></div>
      <svg
        onClick={onClickAdd}
        className={`xs:w-[10%] md:w-[5%] cursor-pointer bg-green-500 hover:bg-green-700 active:bg-green-900 rounded-md ${
          array.length - 1 === index ? "block" : "hidden"
        }`}
        enable-background="new 0 0 50 50"
        height="40px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <line
          fill="none"
          stroke="#ffffff"
          stroke-miterlimit="10"
          stroke-width="4"
          x1="9"
          x2="41"
          y1="25"
          y2="25"
        />
        <line
          fill="none"
          stroke="#ffffff"
          stroke-miterlimit="10"
          stroke-width="4"
          x1="25"
          x2="25"
          y1="9"
          y2="41"
        />
      </svg>
      <svg
        onClick={onClickDelete}
        className={`xs:w-[10%] md:w-[5%] cursor-pointer bg-green-500 hover:bg-green-700 active:bg-green-900 rounded-md`}
        enable-background="new 0 0 50 50"
        height="40px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <line
          fill="none"
          stroke="#ffffff"
          stroke-miterlimit="10"
          stroke-width="4"
          x1="9"
          x2="41"
          y1="25"
          y2="25"
        />
      </svg>
    </>
  );
};

export default AddDeleteSVGs;
