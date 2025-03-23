

const Footer = () => {
    return (
         <footer className="bg-black text-white p-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
           <h2 className="font-bold text-lg mb-3">Help & Info</h2>
           <ul>              
            {[
                "Contact Us",
                "Delivery",
                "Returns",
                "FAQs",
                "Careers",
                "T&Cs",
                "Privacy Policy",
              ].map((item) => (
                <li key={item} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-3">Shop</h2>
            <ul>
              {[
                "Mens",
                "Womens",
                "Kids",
                "WetSuit",
                "Boardsports",
                "Outlet",
                "Store Locator",
              ].map((item) => (
                <li key={item} className="text-gray-300">
                   {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-3">Follow Us</h2>
            <div className="flex space-x-3">
              {["facebook", "instagram", "twitter", "tiktok", "email"].map(
                (icon) => (
                  <span key={icon} className="bg-gray-700 p-3 rounded-full">
                    {icon}
                  </span>
                )
              )}
            </div>
            <h2 className="font-bold text-lg mt-5">Contact</h2>
            <p className="text-gray-300">Info@ecommerce.com 0129875653</p>
            <p className="text-gray-300">Mon to Fri 9am - 5pm GMT.</p>
          </div>
        </div>
      </footer>
   

        
    )
}
export default Footer