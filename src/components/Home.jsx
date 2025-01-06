import img from "../assets/avataaars.svg";

export default function Home() {
  return (
    <section className="bg-[#1abc9c] min-h-[100vh] mt-10 flex justify-center items-center">
      <figure className="text-center text-white">
        <div className="photo w-50 mx-auto">
          <img src={img} alt="portfolio w-100" />
        </div>
        <h1 className="uppercase text-3xl font-bold my-5">start Framework</h1>

        <div className="flex justify-center items-center gap-11">
          <span className="inline-block w-24 h-1 bg-white"></span>
          <span>
            <i className="fas fa-star"></i>
          </span>
          <span className="inline-block w-24 h-1 bg-white"></span>
        </div>

        <p className="mt-5">Graphic Artist - Web Designer - Illustrator</p>
      </figure>
    </section>
  );
}
