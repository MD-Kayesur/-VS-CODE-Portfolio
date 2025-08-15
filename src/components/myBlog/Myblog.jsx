import React from "react";
import useOparation from "../../hooks/useOparation";

const Myblog = () => {
  const { myBlogs } = useOparation();
  
  return (
    <div className="  h-screen overflow-y-auto pb-20   pt-20 pl-3  text-white font-mono  rounded-md     ">
      <div className="flex justify-center items-center text-2xl md:text-5xl font-bold">
        <h1 font-Agbalumo className="  text-green-400 ">
          {" "}
          <span>/****** </span> my blog <span> ******/</span>{" "}
        </h1>
       
      </div>
       <div className=" flex flex-wrap gap-5">
          {myBlogs.map((singleBlog) => (
            <div className=" p-5 border-1 border-red-600" key={singleBlog.id}>
              <h1 className="font-bold">{singleBlog.name}</h1>
              <h1>{singleBlog.description}</h1>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Myblog;
