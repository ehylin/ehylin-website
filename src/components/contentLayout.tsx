import img1 from "@/assets/images/5.jpeg";
import img2 from "@/assets/images/2.jpeg";
import img3 from "@/assets/images/3.jpeg";
import img4 from "@/assets/images/4.jpeg";
import img5 from "@/assets/images/6.png";

const images = [
  {
    title: "Stay Calm and Start Blogging",
    src: img1,
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    textSize: "text-4xl",
  },
  { title: "Stuff", src: img2 },
  { title: "Food", src: img3 },
  { title: "Travel", src: img4 },
  { title: "Instagram", src: img5 },
];

const ContentLayout = () => {
  return (
    <div className="w-full bg-[#fdfcf5] py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 h-[400px] md:grid-cols-4 md:grid-rows-2 gap-3">
        {images.map((item, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden ${item.colSpan || ""} ${
              item.rowSpan || ""
            }`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <h2
                className={`text-white text-center ${
                  item.textSize || "text-xl"
                } font-light tracking-widest`}
                style={{ fontFamily: "cursive" }}
              >
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentLayout;
