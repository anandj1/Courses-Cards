import React from "react";
import './Spinner.css';

function Spinner(){
    return (
        <div className="flex flex-col items-center mx-auto mt-[250px] space-y-2">
            <div className="spinner"></div>
            <p className="text-lg font-semibold text-white ">Loading....</p>

        </div>
    )
}
export default Spinner

