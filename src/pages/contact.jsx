const Blog = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[55%]">
        <div>
          <div className="my-10">
            <p className="text-4xl font-medium mb-5 text-white">Contact Me</p>
            <p className="text-gray-400 font-extralight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus in, hic et nam cum debitis beatae, iure cumque, vitae
              exercitationem illum at ipsa eius itaque natus recusandae aut
              aspernatur doloremque iusto molestiae deleniti. Hic aliquam quod
              cumque, omnis neque cum modi fugit illum eveniet libero aperiam
              dolores recusandae at. Eius.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="border-[#FFF] border-[0.5px] rounded-2xl px-5 py-5 w-[47%]">
              <p className="text-2xl font-medium text-white mb-3">Address</p>
              <p className="text-gray-300 font-extralight">
                1328 Oak Ridge Drive, Saint Louis, <br />
                Missouri
              </p>
            </div>
            <div className="border-[#FFF] border-[0.5px] rounded-2xl px-5 py-5 w-[47%]">
              <p className="text-2xl font-medium text-white mb-3">Contact</p>
              <p className="text-gray-300 font-extralight">
                Phone : 999-999-9999 <br /> Email : info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-700 flex justify-center my-10">
          <div className="flex flex-col py-5 gap-y-3 w-[90%]">
            <p className="text-2xl text-white font-light">Leave a Message</p>
            <div className="gap-3 flex justify-between">
              <input
                className="bg-white rounded-sm px-3 py-1 border-gray-500 focus:outline-none w-[45%] font-extralight"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-white rounded-sm px-3 py-1 border-gray-500 focus:outline-none w-[45%] font-extralight"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="w-[100%] flex justify-center">
              <input
                className="bg-white rounded-sm px-3 py-1 border-gray-500 focus:outline-none w-[100%] font-extralight"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="w-[100%] flex justify-center h-[100px]">
              <input
                className="bg-white rounded-sm px-3 py-1 border-gray-500 focus:outline-none w-[100%] font-extralight"
                type="text"
                placeholder="Write a message"
              />
            </div>
            <div>
              <button className="btn btn-outline text-white font-extralight">
                <p>Send a Message</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
