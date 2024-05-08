import React, { useState } from "react";
import Card from "./Card";

const Cards = ({courses, category}) =>{
  const[liked_course,set_liked_courses]=useState([]);

    const getCourses = () =>{
      if(category==='All'){
        let allCourses = [];
        Object.values(courses).forEach((courseCategory)=>{
          courseCategory.forEach((course)=>{
            allCourses.push(course);
          })
        })
        return allCourses;
      }
      else{
        return courses[category];
      }
     
    }

  return(
    <div className="flex  flex-wrap  justify-center  gap-6 mb-5 mt-5">
 
    {(
    
      getCourses().map((course) =>{

        return <Card key = {course.id} course = {course} liked_course={liked_course} set_liked_courses={set_liked_courses}/>

      })
    )}


    

    </div>
    
  
  )
}

export default Cards;