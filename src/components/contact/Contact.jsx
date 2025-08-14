import CodeWrapper from "../../codeWrapper/CodeWrapper";
import Font from "react-font";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <div>
      <CodeWrapper lines={44}>
        <div className="   pb-30   pt-20 pl-4  text-white font-mono  rounded-md     ">
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
      </CodeWrapper>
    </div>
  );
}
