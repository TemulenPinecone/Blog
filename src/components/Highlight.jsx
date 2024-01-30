export const Hightlight = ()=>{
    return (
        <div className="mt-10 relative mx-3">
          <img
            className="w-[100%] border rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQ_X5DVhWSi1vm_XIfLXL9cW5wxL7aOOZCQ&usqp=CAU"
            alt=""
          />
          <div className="bg-white h-[270px] w-[500px] rounded-lg absolute top-[50%] left-[5%] flex flex-col justify-evenly p-[40px]">
            <div>
              <p className="border rounded-lg text-white bg-[#4B6BFB] inline-flex p-1 px-4">
                Technology
              </p>
            </div>
            <div>
              <div className="pb-[24px]">
                <h2 className="text-2xl font-semibold">
                  Grid system for better Design User Interface
                </h2>
              </div>
              <div>
                <p className="text-[#97989F]">August 20, 2022</p>
              </div>
            </div>
          </div>
        </div>
    );
}