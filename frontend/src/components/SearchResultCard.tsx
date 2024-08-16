import { ResortType } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
  resort: ResortType;
};

const SearchResultCard = ({ resort }: Props) => {
  return (
    <Link
      to={`/detail/${resort._id}`}
      className="grid lg:grid-rows-[3fr_-1fr] gap-4 group"
    >
      <AspectRatio ratio={16 / 6} className="relative">
        <img
          src={resort.imageUrl}
          className="rounded-md w-full h-full object-cover"
          alt={`Image of ${resort.resortName}`}
        />
        <div className="absolute bottom-0 left-0 bg-red-500 bg-opacity-100 text-white p-2 rounded-tr-md">
          <h3 className="text-lg font-bold font-mono">{resort.resortName}</h3>
        </div>
      </AspectRatio>
    </Link>
  );
};

export default SearchResultCard;
