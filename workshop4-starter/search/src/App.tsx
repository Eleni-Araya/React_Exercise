import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import User from "./types/user";
import SearchReponse from "./types/search-response";

export default function App() {
  const [searchResponse, setSearchResponse] = useState<SearchReponse>({
    isFirst: true,
    isLoading: false,
    isError: false,
    users: []
  });

  return (
    <div className="container">
      <Search onSetSearchResponse={setSearchResponse} />
      <List {...searchResponse} />
    </div>
  )
}