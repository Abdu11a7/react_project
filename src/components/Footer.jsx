export default function Footer() {
  return (
    <footer>
      <main className="bg-[#2c3e50] py-10">
        <div className="container md:flex text-center md:justify-between mx-auto py-10 text-white">
          <div className="location md:w-[calc(100%/3)] mb-20 md:mb-0">
            <h3 className="uppercase text-2xl font-semibold">Location</h3>
            <p className="mt-2">2215 John Daniel Drive</p>
            <span className="block mt-4">Clark, MO 65243</span>
          </div>
          <div className="around md:w-[calc(100%/3)] mb-20 md:mb-0">
            <h3 className="uppercase text-2xl font-semibold">Around the web</h3>
            <ul className="mt-2 flex justify-center items-center gap-3">
              <li className="cursor-pointer">
                <i className="fab fa-facebook p-3 text-lg border rounded-full"></i>
              </li>
              <li className="cursor-pointer">
                <i className="fab fa-x-twitter p-3 text-lg border rounded-full"></i>
              </li>
              <li className="cursor-pointer">
                <i className="fab fa-linkedin-in p-3 text-lg border rounded-full"></i>
              </li>
              <li className="cursor-pointer">
                <i className="fab fa-github p-3 text-lg border rounded-full"></i>
              </li>
            </ul>
          </div>
          <div className="about md:w-[calc(100%/3)]">
            <h3 className="uppercase text-2xl font-semibold">
              About Freelance
            </h3>
            <p className=" mt-2">
              Freelance is a free to use, <br /> licensed Bootstrap theme
              created by Route
            </p>
          </div>
        </div>
      </main>

      <div className="copyright py-5 text-center bg-[#1a252f] text-white">
        <h4>
          Copyright <span>&copy;</span> Your Website 2025
        </h4>
      </div>
    </footer>
  );
}
