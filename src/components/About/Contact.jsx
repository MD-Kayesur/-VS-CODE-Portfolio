import img from "../../assets/imgs/1749660883197-removebg-preview.png"

const Contact = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal   text-base-content px-10 py-20 lg:flex justify-between items-center  ">
        <aside>
          <img className="h-20 w-20" src={img} alt="" />
          
          <p>
          MD.Kayesur Rahman
            <br />
           email : rmdkayesur@gmail.co
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Contact;
