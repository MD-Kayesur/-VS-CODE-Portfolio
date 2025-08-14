import DropdownComponent from "../dropdown/DropdownComponent ";
import Tabss from "../tabcomponant/TabsComponent";

const Explore = () => {
  return (
    <div className=" ml-3 md:pt-17 md:pb-7 lg:pt-3 lg:h-full overflow-y-auto  hidden md:block z-10 w-50">
      <h3 className="pl-3  ">EXPLORER</h3>
      <div className="mt-2 ">
        <DropdownComponent></DropdownComponent>
      </div>
    </div>
  );
};

export default Explore;
