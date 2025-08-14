import Navlinks from "../rightnavlinks/Navlinks";
import Explore from "../Explore/Explore";
import TabsComponent from "../tabcomponant/TabsComponent";

const Dashbors = () => {
  return (
    <>
      <div className="overflow-hidden   w-full ">
        <div className="  flex  h-[760px] ">
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
