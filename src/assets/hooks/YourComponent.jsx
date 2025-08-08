import CodeWrapper from "./CodeWrapper";
import useMediaQuery from "../hooks/useMediaQuery";
import About from "../../components/About/About";
import Introduction from "../../components/Introduction";

const YourComponent = () => {
  const isLarge = useMediaQuery("(min-width: 1024px)"); // Tailwind's `lg`

  const codeBlock = (
    <div>
 
     </div>
  );

  return (
    <div>
      {isLarge ? <CodeWrapper>{codeBlock}</CodeWrapper> : codeBlock}
    </div>
  );
};

export default YourComponent;
