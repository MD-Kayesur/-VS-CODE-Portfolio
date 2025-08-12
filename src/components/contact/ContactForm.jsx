 import Swal from "sweetalert2";

const ContactForm = () => {


 const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    console.log(email);
    return Swal.fire({
      title: "Good job!",
      text: "Thank You so much for massager me ",
      icon: "success",
    });
  };


    return (
         <div className="  mx-auto mt-15">
            <span className="text-cyan-400">
              <span className="text-blue-400">const</span> handleContact = [{" "}
              <br />
              <form className="ml-4" action="" onSubmit={handleSubmit}>
                <span> {"{"}</span>
                <div className="flex">
                  <span>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-cyan-400">name</span> = "
                    <input
                      type="text"
                      placeholder="Your name"
                      className="bg-transparent pl-3 border-none focus:outline-none text-white"
                    />
                    "
                  </span>
                </div>
                {"}"} , <br />
                {"{"}
                <div className="flex">
                  <span>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-cyan-400">email</span> = "
                    <input
                      // type="email"
                      name="email"
                      placeholder="example@gmail.com "
                      className="bg-transparent border-none pl-3 lg:pl-3 focus:outline-none text-white"
                    />
                    "
                  </span>
                </div>
                {"}"} , <br />
                {"{"}
                <div className="flex">
                  <span className="  ">
                    <span className="text-blue-400">const</span> 
                    <span className="text-cyan-400"> Number</span> = "
                    <input
                      type="text"
                      placeholder="Your number"
                      className="bg-transparent border-none  pl-2   focus:outline-none text-white"
                    />
                    "
                  </span>
                </div>
                {"}"} , <br />
                {"{"}
                <div className="flex items-start">
                  <span className="flex gap-3 items-start">
                    <span className="text-blue-400 flex items-center">
                      const
                    </span> 
                    <span className="flex items-center gap-1">
                      <span className="text-cyan-400">message</span>
                      <span>=</span>
                      <span className="pl-2">" </span>
                    </span>
                    <br />
                    <textarea
                      rows={6}
                      placeholder="Your message here..."
                      name="massage"
                      cols={30}
                      className="bg-transparent border-none -ml-3   focus:outline-none text-white w-full"></textarea>
                    <span className="-mt-5"> "</span>
                  </span>
                </div>
                {"}"} ]
                <div className="flex mt-4">
                  <button type="submit" className="btn btn-accent">
                    Contact
                  </button>
                </div>
              </form>
            </span>
          </div>
    );
};

export default ContactForm;