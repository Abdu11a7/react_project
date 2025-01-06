export default function Contact() {
  return (
    <section
      id="contact"
      className=" min-h-[100vh] mt-10  flex justify-center items-center text-center">
      <div className="container">
        <h1 className="uppercase text-[#2c3e50] text-3xl font-bold my-5">
          Conatct Section
        </h1>
        <div className="flex justify-center items-center gap-11">
          <span className="inline-block w-24 h-1 bg-[#2c3e50]"></span>
          <span>
            <i className="fas fa-star text-[#2c3e50]"></i>
          </span>
          <span className="inline-block w-24 h-1 bg-[#2c3e50]"></span>
        </div>
        <form action="" className=" w-3/4 mx-auto">
          <input
            type="text"
            placeholder="User Name"
            className="py-3 px-1 w-full my-5 outline-none border-b-[1px] border-[#2c3e50bd] "
          />
          <input
            type="number"
            placeholder="User Age"
            className="py-3 px-1 w-full my-5 outline-none border-b-[1px] border-[#2c3e50bd] "
          />
          <input
            type="email"
            placeholder="User Email"
            className="py-3 px-1 w-full my-5 outline-none border-b-[1px] border-[#2c3e50bd] "
          />
          <input
            type="password"
            placeholder="User Password"
            className="py-3 px-1 w-full mt-5 outline-none border-b-[1px] border-[#2c3e50bd] "
          />
          <button
            type="button"
            className="block bg-[#1abc9c] hover:bg-[#159d82] transition-colors mt-4 text-white p-2 rounded-md text-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
