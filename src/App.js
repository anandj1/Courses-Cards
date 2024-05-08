import React from "react";
import Navbar from  "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl, filterData  } from "./data";
import { useState,useEffect } from "react";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";


const App = () => {
  const[category,set_category] = useState(filterData[0].title);
  const[loading,set_loading]= useState(true);
  const [courses,setCourses] = useState(null);

  const fetchData = async() => {
    set_loading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data)
   
    }

    catch(error){
      toast.error("Error");
    }

    set_loading(false);

  }
  

  
  useEffect(() =>{
   fetchData();
  },[])

  
  return(
    <div className=" flex flex-col bg-slate-800 min-h-screen">

    <Navbar>

    </Navbar>
    <div className="bg-slate-800  h-[100%]">
    <Filter filterData = {filterData}
    category ={category}
    set_category={set_category} />

<div className="max-w-[1020px] w-[80%] flex flex-wrap mx-auto justify-center items-center  ">
   {
    loading ?(<Spinner/>):(<Cards courses={courses} category={category} />)

    }


</div>
    </div>
    

    

    </div>
  )



}


export default App;
