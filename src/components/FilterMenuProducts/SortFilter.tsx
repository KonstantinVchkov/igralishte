import React, { useState } from "react";

const SortFilter = () => {
    const [sortNew,setSortNew] = useState('')
    console.log(sortNew)
  return (
    <div>
      {" "}
      <select
        value={sortNew}
        onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
          setSortNew(e.target.value)
        }}
      >
        <option value="New">Најново</option>
        <option value="Old">Најстаро</option>
      </select>
    </div>
  );
};

export default SortFilter;
