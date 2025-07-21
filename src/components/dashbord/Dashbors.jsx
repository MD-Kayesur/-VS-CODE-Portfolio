 
import Navlinks from "../../rightnavlinks/Navlinks";
import Explore from "../Explore/Explore";
import TabsComponent from "../tabcomponant/TabsComponent";
 
const Dashbors = ({hi}) => {
console.log(hi,"dashbord");


 
  return (
    <>
      <div className="overflow-hidden ">
        <div className="   flex   ">
          <div className=" flex ">
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
