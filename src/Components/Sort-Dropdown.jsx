

export default function Sort({topic, category, setCategory, order, setOrder}) {


  return (
    <div className="dropdown-menu">
      <label htmlFor="category">sort by</label>
      <select
        value={category}
        onChange={(selection) => {
          setCategory(selection.target.value);
        }}
      >
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment Count</option>
      </select>

      <button>{order}</button>
    </div>
  );
}
