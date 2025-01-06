import imageOne from "../assets/poert1.png";
import imageTwo from "../assets/port2.png";
import imageThree from "../assets/port3.png";
export default function Portfolio() {
  return (
    <section className="bg-white min-h-[100vh] mt-20 pt-20 flex justify-center items-center text-[#2c3e50]">
      <div className="container">
        <div className="component text-center">
          <h1 className="uppercase text-3xl font-bold my-5">
            Portfolio Component
          </h1>

          <div className="flex justify-center items-center gap-11">
            <span className="inline-block w-24 h-1 bg-[#2c3e50]"></span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span className="inline-block w-24 h-1 bg-[#2c3e50]"></span>
          </div>
        </div>
        <div className="gallary px-3 md:px-0 my-5 gap-3 flex flex-col md:flex-row flex-wrap md:justify-between">
          <div className="image md:w-[48%] lg:w-[32.33%] rounded-md relative overflow-hidden group">
            <img src={imageOne} className="rounded-md" alt="cake" />
            <div className="overlay absolute bg-[#1abc9ce6] w-full h-full top-0 left-0 flex justify-center items-center rounded-md cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <span className="text-9xl text-white">+</span>
            </div>
          </div>
          <div className="image md:w-[48%] lg:w-[32.33%] rounded-md relative overflow-hidden group">
            <img src={imageThree} className="rounded-md" alt="cake" />
            <div className="overlay absolute bg-[#1abc9ce6] w-full h-full top-0 left-0 flex justify-center items-center rounded-md cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <span className="text-9xl text-white">+</span>
            </div>
          </div>
          <div className="image md:w-[48%] lg:w-[32.33%] rounded-md relative overflow-hidden group">
            <img src={imageTwo} className="rounded-md" alt="cake" />
            <div className="overlay absolute bg-[#1abc9ce6] w-full h-full top-0 left-0 flex justify-center items-center rounded-md cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <span className="text-9xl text-white">+</span>
            </div>
          </div>
          <div className="image md:w-[48%] lg:w-[32.33%] rounded-md relative overflow-hidden group">
            <img src={imageThree} className="rounded-md" alt="cake" />
            <div className="overlay absolute bg-[#1abc9ce6] w-full h-full top-0 left-0 flex justify-center items-center rounded-md cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <span className="text-9xl text-white">+</span>
            </div>
          </div>
          <div className="image md:w-[48%] lg:w-[32.33%] rounded-md relative overflow-hidden group">
            <img src={imageTwo} className="rounded-md" alt="cake" />
            <div className="overlay absolute bg-[#1abc9ce6] w-full h-full top-0 left-0 flex justify-center items-center rounded-md cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <span className="text-9xl text-white">+</span>
            </div>
          </div>
          <div className="image md:w-[48%] lg:w-[32.33%] rounded-md relative overflow-hidden group">
            <img src={imageOne} className="rounded-md" alt="cake" />
            <div className="overlay absolute bg-[#1abc9ce6] w-full h-full top-0 left-0 flex justify-center items-center rounded-md cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <span className="text-9xl text-white">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
