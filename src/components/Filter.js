import React from "react";

const Filter = ({ filterData,category,set_category }) => {
  function handleFilter(title){
    set_category(title);

  }
  return (
    <div className="  flex flex-wrap w-11/12 justify-center gap-4 mx-auto my-4 ">
      {filterData.map((data) => (
        <button  className={`text-lg px-2 rounded text-white  bg-purple-900  hover:bg-black border-2 font-medium 
        ${category ===data.title ?
        "bg-opacity-60 border-white" :
        "bg-opacity-40 border-transparent"}` }
        key={data.id} onClick={()=>handleFilter(data.title)}>
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
