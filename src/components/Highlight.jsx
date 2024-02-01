export function Hightlight(highlight) {
  const hlNews = highlight.highlight;
  console.log(`hlNews`, hlNews);

  return (
    <div>
      {/* NEW */}
      <div className="carousel w-full">
        {hlNews.map((element) => (
          <div id="item1" className="carousel-item w-full">
            <img src={element.social_image} className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}

// /* <div id="item1" className="carousel-item w-full">
//           <img src={hlNews[0].cover_image} className="w-full" />
//         </div>
//         <div id="item2" className="carousel-item w-full">
//           <img
//             src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
//             className="w-full"
//           />
//         </div>
//         <div id="item3" className="carousel-item w-full">
//           <img
//             src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
//             className="w-full"
//           />
//         </div>
//         <div id="item4" className="carousel-item w-full">
//           <img
//             src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
//             className="w-full"
//           />
//         </div> */

// }

// {
//   /* OLD */
// }
// {
//   /* <div
//         className="mt-10 h-[500px] relative mx-3 bg-no-repeat"
//         style={{ backgroundImage: `url(${hlNews[0].cover_image})` }}
//       >
//         {/* <img src={`${highlight}`} alt="" className="h-[500px] border" /> */
// }
// {
//   /* <div className="bg-white h-[270px] w-[500px] rounded-lg absolute top-[50%] left-[5%] flex flex-col justify-evenly p-[40px]">
//           <div>
//             <p className="border rounded-lg text-white bg-[#4B6BFB] inline-flex p-1 px-4">
//               {hlNews[0].tag_list[0]}
//             </p>
//           </div>
//           <div>
//             <div className="pb-[24px]">
//               <h2 className="text-2xl font-semibold text-black">
//                 {hlNews[0].title}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div> */
// }
