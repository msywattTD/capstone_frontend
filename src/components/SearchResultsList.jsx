import SearchResultItem from "./SearchResultItem";

function SearchResultsList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResultItem result={result} key={id} />;
      })}
    </div>
  );
}

export default SearchResultsList;
