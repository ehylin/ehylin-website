const images = [
  {
    title: "Stay Calm and Start Blogging",
    src: "/src/assets/images/5.jpeg",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    textSize: "text4xl",
  },
  {
    title: "Stuff",
    src: "/src/assets/images/2.jpeg",
  },
  {
    title: "Food",
    src: "/src/assets/images/3.jpeg",
  },
  {
    title: "Travel",
    src: "/src/assets/images/4.jpeg",
  },
  {
    title: "Instagram",
    src: "/src/assets/images/6.png",
  },
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
