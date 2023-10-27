
export const Header = () => {
    return (
      <div className="relative">
        <div className="relative h-[90vh] m-12 bg-slate-100 rounded-3xl">
        <div className="relative flex lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6 p-24">
              
              <h2 className="max-w-lg font-sans text-7xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The Pod
                <br className="hidden md:block" />
                POD{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  Clinic
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">

                {/* Greater Manchester Based Podariatry Clinic Service */}
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
  export default Header;
