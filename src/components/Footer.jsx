export default function Footer() {
  return (

    
    <div className="bg-[#BCDDFE] text-black flex flex-col p-10  md:p-[60px] md:gap-[70px]">
      <div className=" wid border-amber-600 border-2 flex flex-col  md:flex-row justify-between">
        <div>
         <b>E-Comm</b>
          <p className="text-sm mt-3">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           
           
           Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div>
          <b>Follow Us</b>


         <p className="text-sm mt-3">
           Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
        </div>
        <div>
          <b>Contact us</b>
          <p className="text-sm mt-3">
           E-Comm , 4578 <br /> Marmora Road,  <br /> Glasgow D04 89GR
          </p>
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  border-2 border-amber-200">
        <div>
          Infomation
          <ul className="text-sm  mt-3">
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Condtions</li>
          </ul>
        </div>

        <div>
          Service
        <ul className="text-sm  mt-3">
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Condtions</li>
          </ul>  
        </div>

        <div>
          My Account
          <ul className="text-sm  mt-3">
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Condtions</li>
          </ul>
          </div>

        <div>
          Our Offers
          <ul className="text-sm  mt-3">
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Condtions</li>
          </ul>
          </div>
      </div>
      <hr  className=" border border-white"/>
      <div className=" border-amber-600 border-2 flex justify-between">
          <div>
            © 2018 Ecommerce theme by www.bisenbaev.com
          </div>
          <div>pp</div>
      </div>
    </div>
  );
}
