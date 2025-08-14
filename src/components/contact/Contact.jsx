import CodeWrapper from "../../codeWrapper/CodeWrapper";
import Font from "react-font";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <div>
 
        <div className="  h-screen md:pb-20 lg:pb-50 pt-20 pl-3 mb-10 text-white font-mono  rounded-md   overflow-y-auto  ">
          <div className="flex justify-center items-center text-2xl md:text-5xl font-bold">
            <Font family="Agbalumo ">
              <h1 font-Agbalumo className="  text-green-400 ">
                {" "}
                <span>/****** </span> Contact with me <span> ******/</span>{" "}
              </h1>
            </Font>
          </div>

          <ContactLinks></ContactLinks>

          <ContactForm></ContactForm>
        </div>
     
    </div>
  );
}
