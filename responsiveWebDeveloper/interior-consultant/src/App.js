import Header from "./component/header";
import backgroundimage from "./photo1.png";
import designerimage from "./photo2.png";
function App() {
  return (
    <div className=" h-screen bg-uniqueblack px-2 pt-2 sm:px-10 md:px-16 md:pt-12 lg:px-32 lg:pt-4">
      <Header />
      <div className=" mt-3 text-white md:mt-32 md:grid md:grid-cols-2 md:grid-rows-1 lg:mt-8 lg:pt-24">
        <div className="  pt-0 md:pt-32 lg:pt-48">
          <div className=" font-Lora text-4xl font-medium lg:text-4xl xl:text-6xl">
            Modern interior
          </div>
          <div className=" mt-4 font-Montserrat  text-base font-normal md:text-xl lg:text-xl xl:text-2xl">
            A full-Service residential & <br />
            commercial interior design and <br />
            staging company offering <br />
            professional organizing & <br />
            eco-services.
          </div>
          <div className=" mt-5 font-Montserrat font-bold lg:text-lg xl:text-xl">
            Read more <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
        <div className="relative  sm:mt-3">
          <img
            className="  h-auto max-w-full"
            src={backgroundimage}
            alt="background "
          ></img>
          <div className="absolute -bottom-20 left-8 right-4 grid max-w-xl grid-cols-4 grid-rows-2 bg-uniqueblack px-4 pt-2 text-white lg:left-24 lg:right-10 lg:bottom-8 xl:-bottom-16 2xl:-bottom-40">
            <img
              className=" col-span-1 row-span-1 rounded-full p-3 lg:p-3 xl:p-5 2xl:p-7"
              src={designerimage}
              alt="background "
            ></img>
            <div className=" col-span-3 row-span-1 pt-3 lg:pt-3 xl:pt-5 2xl:pt-7">
              <div className=" font-Montserrat text-sm font-medium lg:text-lg xl:text-xl">
                Aliza Webber{" "}
              </div>
              <div className=" font-Montserrat text-xs font-medium text-uniquegray lg:text-base xl:text-lg">
                Interior designer
              </div>
            </div>
            <div className=" col-span-4 row-span-1 px-7 font-Lora text-xl font-bold lg:text-lg 2xl:text-2xl">
              Designed in 2020 by <br />
              Aliza Webber
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute  bottom-0 left-0 right-0 text-center text-slate-500">
        created by <span className="font-bold">Delon509</span> -
        devChallenges.io
      </div>
    </div>
  );
}

export default App;
