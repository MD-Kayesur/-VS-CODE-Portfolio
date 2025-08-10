import Navlinks from "../../rightnavlinks/Navlinks";
import Explore from "../Explore/Explore";
import TabsComponent from "../tabcomponant/TabsComponent";

const Dashbors = () => {
  return (
    <>
      <div className="overflow-hidden fixed w-full ">
        <div className="  flex   ">
          <div className="  flex  ">
            <Navlinks />
          </div>
         
            <Explore />
            <TabsComponent />
           
        </div>
      </div>
    </>
  );
};

export default Dashbors;
