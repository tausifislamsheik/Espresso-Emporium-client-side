import logo from "../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#F4F3F0] text-[#331A15] p-10">
      <div className="space-y-3 mx-auto">
        <div className="flex items-center gap-2">
          <img className="h-8 md:h-12 md:w-12" src={logo} alt="" />
          <h1 className="text-xl md:text-3xl rancho-font font-bold">
            Espresso Emporium
          </h1>
        </div>
        <p>
          Always ready to be your friend. Come & Contact with us to <br /> share your
          memorable moments, to share with your best companion.
        </p>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <div>
          <h1 className="text-lg md:text-2xl rancho-font font-bold mb-3">
            Get In Touch
          </h1>
          <div className="space-y-2">
            <p>+88 01533 333 333</p>
            <p>info@gmail.com</p>
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h1 className="text-xl md:text-3xl rancho-font font-bold">Connect With Us</h1>
        <div className="card-body w-96">
                    <form className="space-y-4">
                      <input type="text" className="input border-none w-full" placeholder="Name" />
                      <input type="email" className="input border-none w-full" placeholder="Email" />
                      <input type="text" className="input border-none w-full" placeholder="Message" />
                      <button className="btn rancho-font w-full mt-5 bg-[#D2B48C] text-[#331A15] text-xl">Send Message</button>
                    </form>
                  </div>
      </div>
    </footer>
  );
};

export default Footer;
