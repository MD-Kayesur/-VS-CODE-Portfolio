 import DropdownComponent from '../home/DropdownComponent ';
import Tabss from '../tabcomponant/TabsComponent';

const Explore = () => {
     
    return (
        <div className="bg-red-50 pt-3  md:h-[320px]  hidden md:block z-10 w-40"> 
                 
              <h3 className='pl-3'>EXPLORER</h3>
              <div className="mt-2 ">
<DropdownComponent></DropdownComponent>
              
              </div>
              
            </div>
    );
};

export default Explore;