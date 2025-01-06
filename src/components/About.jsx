export default function About() {
  return (
    <section className="bg-[#1abc9c] min-h-[100vh] mt-10 flex justify-center items-center text-white">
      <div className="container mx-auto text-center px-5">
        <div className="about mb-6">
          <h1 className="uppercase text-3xl font-bold my-5">About Component</h1>

          <div className="flex justify-center items-center gap-11">
            <span className="inline-block w-24 h-1 bg-white"></span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span className="inline-block w-24 h-1 bg-white"></span>
          </div>
        </div>
        <div className="info md:flex md:justify-center md:items-center md:gap-10">
          <p className="mb-5 md:mb-0">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
  );
}
