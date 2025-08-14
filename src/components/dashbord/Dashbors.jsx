import Navlinks from "../rightnavlinks/Navlinks";
import Explore from "../Explore/Explore";
import TabsComponent from "../tabcomponant/TabsComponent";
import Footer from "../Footer/Footer";
import Navber from "../navbar/Navber";

const Dashbors = () => {
  return (
    <>
      {/* <div className="overflow-hidden   w-full ">
        <Navber /> 
        <div className="  flex   h-screen">
          <div className="  flex  ">
            <Navlinks />
          </div>

          <Explore />
          <TabsComponent />
        </div>
        <Footer /> 
      </div> */}

   <div className="w-full h-screen flex flex-col overflow-hidden">
  {/* Navbar always on top */}
  <Navber />

  {/* Main content area takes remaining space */}
  <div className="flex flex-1 overflow-hidden">
    {/* Sidebar */}
    <div className="flex-none">
      <Navlinks />
    </div>

    {/* Main content stretches */}
    <div className="flex-1 flex   overflow-hidden">
      <Explore className="flex-1 overflow-auto" />
      <TabsComponent className="flex-none" />
    </div>
  </div>

  {/* Footer fixed at bottom */}
  <Footer className="flex-none" />
</div>


    </>
  );
};

export default Dashbors;
