import React  from "react";
import {FcLike} from "react-icons/fc";
import {toast} from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";
const Card = ({course,liked_course,set_liked_courses})=>{
    function clickhandler(){
        if(liked_course.includes(course.id)){
            set_liked_courses((prev) =>prev.filter((cid=> cid!==course.id)));
            toast.warning("Like removed");
             
        }
        else{

            // if its not present from before i.e its empty
            if(liked_course.length===0){
                set_liked_courses([course.id])
            }
            else{
                set_liked_courses((prev)=>[...prev,course.id])

            }
            toast.success("Course added succesfully");


        }

    }
    return (
        <div className=" w-[250px] bg-bgDark bg-opacity-80 rounded-md ">
         <div className="relative">
            <img src={course.image.url} alt=""></img>

            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center absolute right-1.5 -bottom-[15px]  ">
                <button onClick={clickhandler}>
                {
                    liked_course.includes(course.id)?(<FcLike fontSize = "1.80rem" />):( <FcLikePlaceholder fontSize="1.80rem" />)
                }
                    
                </button>
            </div>

         </div>
         <div className="p-4">
            <p className="text-white font-bold text-xl  " >{course.title}</p>
            <p className="text-white mt-2 opacity-80" >
                {
                    course.description.length>100? 
                    (course.description.substr(0,100)+"..."):
                    (course.description)
                }
            </p>
         </div>
        </div>

        
    )
}
export default Card;