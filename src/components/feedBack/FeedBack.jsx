import React from 'react';
import useOparation from '../../hooks/useOparation';

const FeedBack = () => {

const {myFeedBacks} = useOparation()
     return (
        <div className="  pt-10 h-screen overflow-y-auto pb-30  md:pt-20 pl-3   font-mono  rounded-md     ">
      <div className="flex justify-center items-center text-2xl md:text-5xl font-bold">
        <h1 font-Agbalumo className="  text-green-400 ">
          {" "}
          <span>/****** </span> Feed Back me<span> ******/</span>{" "}
        </h1>
      </div>
      <div className=' grid  lg:grid-cols-3 gap-5'>
        {
          myFeedBacks.map((sinflefeedback)=> (
<div key={sinflefeedback._id} className='p-5 border-1 border-red-200'>
    <p>{sinflefeedback.description}</p>
    <p className='my-3'>rating:{sinflefeedback.rating}</p>
    <div className='flex items-center  gap-3'>
        <img className='w-10 rounded-full' src={sinflefeedback.img} alt="" />
        <h1>{sinflefeedback.name}</h1>
    </div>
    <h1>{sinflefeedback.location}</h1>
</div>



          )) 
        }
      </div>
    </div>
    );
};

export default FeedBack;