import { MdPhonelinkSetup } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="px-6 pt-8 bg-slate-800 md:px-16 lg:px-36 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
         <div className="flex">
           <MdPhonelinkSetup size={'32'}/>
           <h3 className="text-2xl font-bold ">
            Mobile<span className="text-orange-400">X</span>
           </h3>
         </div>
          <p className="mt-6 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            eaque nesciunt repellat officiis aliquam possimus molestiae rem,
            nisi, reiciendis ut, deserunt veritatis maiores eum et corporis
            porro dolore exercitationem. Odio?
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://i.pinimg.com/736x/13/b8/73/13b8738f3c72db2bb07caacf8a8e5db2.jpg"
              alt="google play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src="https://i.pinimg.com/1200x/9d/9e/82/9d9e82055328feaab2b512303f875195.jpg"
              alt="app store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+885965757413</p>
              <p>Vabdyvavdy929@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © Don't forget me ? I'm Keat
      </p>
    </footer>
  );
};

export default Footer;
