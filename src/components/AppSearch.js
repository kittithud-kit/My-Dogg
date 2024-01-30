import "./AppSearch.css";

function AppSearch(props) {
  const { value, onValueChange } = props;
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="ค้าหา"
        value={value}
        onChange={(even) => {
          onValueChange(even.target.value);
        }}
      ></input>
    </div>
  );
}
export default AppSearch;
