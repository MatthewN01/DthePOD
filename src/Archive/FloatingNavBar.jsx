const FloatingNavBar = () => {
    return (
      <div className="float absolute z-20 inset-x-0 bottom-0 flex justify-center bg-slate-800 rounded-lg mx-[23%] mb-16">
      <div class=" p-3.5">
      <ul className="text-white text-3xl space-x-40 float">
      <li className="inline-block"><h1>Home</h1>      </li>
      <li className="inline-block"><h1>Pricing</h1>      </li>
      <li className="inline-block"><h1>About</h1>      </li>
      <li className="inline-block"><h1>Contact</h1>      </li>

      </ul>
        
      </div>
    </div>
    );
  };
  export default FloatingNavBar;
