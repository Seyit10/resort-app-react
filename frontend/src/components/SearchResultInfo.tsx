import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ city }: Props) => {
  return (
    <div className="text-xl font-bold flex justify-center mb-4">
      <span className="flex flex-col items-center">
        <div className="font-mono font-bold">Konum:{city}</div>
        <Link to="/" className="text-sm font-semibold underline cursor-pointer text-blue-700">
          <Button className="bg-red-500 hover:bg-color1 text-white font-bold py-2 px-3 my-4 font-mono">
            Konumu Değiştir
          </Button>
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
