import { useNavigate } from "react-router-dom";

import SearchBar, { SearchForm } from "@/components/SearchBar";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12 ">
      <div className="container mx-auto flex-1 py-10 bg-color2"></div>
      <div className="md:px-32 bg-color2 rounded-lg py-8 flex flex-col gap-5 text-center -mt-10">
        <h1 className="text-5xl tracking-tight text-color1 font-anton">
          Cennetten Bir Köşe Bulun
        </h1>
        <span className="text-xl text-grey1 font-anton">
          Tatiliniz İçin En İyi Rotalar
        </span>
        <div className="border-color1 border-2 rounded-full">
          <SearchBar placeHolder="Şehir Ara" onSubmit={handleSearchSubmit} searchQuery={""} />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
