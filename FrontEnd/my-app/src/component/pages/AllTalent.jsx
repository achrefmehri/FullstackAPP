import React from "react";
import { IoIosTimer } from "react-icons/io";
import { Link } from "react-router-dom";

const AllTalent = (props) => {
    { console.log(props) }
    return (
        <div className='container-prog'>
            <div className="flex items-center justify-center gap-2 mt-10 ml-6">
              
                <h3 className='text-3xl font-semibold text-[#181818] mt-10 ml-6'>My Talents</h3>
            </div>
            <div className="talents ml-6 flex">

                {props.talents.map((ele, i) =>

                    <div className="talent-card mt-10   rounded-xl cursor-pointer ml-6" key={i}>
                        <img src={ele.imageUrl} className='w-64 h-64 rounded-xl'></img>
                        <h5 className='p-3 font-semibold text-[#181818] cursor-pointer hover:text-[#108a00]'>{ele.title}</h5>
                        <div className="price-delivery flex items-center">
                            <IoIosTimer size={28} className='text-[#505050] ml-3' />
                            <h5 className='text-[#505050] font-bold text-sm ml-1 '>{ele.delivery} delivery</h5>
                            <h5 className='text-[#505050] font-bold text-sm ml-6 '>From ${ele.price}</h5>
                        </div>
                        <div className=" flex items-center justify-center mt-4 gap-4 ">
                            <button onClick={()=>{props.change(ele)}}  className="  bg-[#108a00] hover:bg-[#3d9731] text-white font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                            <Link to={`/updatetalent/${ele.id}`}>Update</Link></button>
                            <button class=" bg-[#108a00] hover:bg-[#3d9731] text-white font-bold p-1 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => { props.delete(ele.id) }}>Delete</button>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}


export default AllTalent