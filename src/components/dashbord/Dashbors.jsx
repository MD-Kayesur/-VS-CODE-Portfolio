 
import Navlinks from "../../rightnavlinks/Navlinks";
import Explore from "../Explore/Explore";
import TabsComponent from "../tabcomponant/TabsComponent";
 
const Dashbors = ( ) => {
 

 
  return (
    <>
      <div className="overflow-hidden min-h-fit  ">
        <div className="   flex   ">
          <div className=" flex  ">
            <Navlinks />
             <Explore />
          </div>
          <TabsComponent />
        </div>
      </div>
    </>
  );
};

export default Dashbors;
