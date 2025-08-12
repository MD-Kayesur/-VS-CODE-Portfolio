import DropdownComponent from "../dropdown/DropdownComponent ";
import Tabss from "../tabcomponant/TabsComponent";

const Explore = () => {
  return (
    <div className=" ml-3 pt-3 md:h-[320px]  lg:h-full hidden md:block z-10 w-50">
      <h3 className="pl-3 text-white">EXPLORER</h3>
      <div className="mt-2 ">
        <DropdownComponent></DropdownComponent>
      </div>
    </div>
  );
};

export default Explore;
