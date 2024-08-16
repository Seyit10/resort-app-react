import { useSearchResorts } from "@/api/ResortApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
}

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
  });
  const { results, isLoading } = useSearchResorts(searchState ,city);

  const setPage = (page: number) => {
    setSearchState((prevState)=> ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState)=> ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,

    }));
  };

  const resetSearch = () => {
    setSearchState((prevstate)=>({
      ...prevstate,
      searchQuery: "",
    }));
  };

  if (isLoading) {
    <span>Yükleniyor...</span>;
  }

  if (!results?.data || !city) {
    return <span>Bulunamadı</span>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 my-6">
      <SearchResultInfo total={results.pagination.total} city={city} />
      <div className="">
        {/* <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeHolder="Ara"
          onReset={resetSearch}
        /> */}
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[600px_1fr]">
        {results.data.map((resort, index) => (
          <SearchResultCard key={index} resort={resort} />
        ))}
      </div>
      <div className="inline-block">
        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default SearchPage;
