const images = [
  {
    title: "Stay Calm and Start Blogging",
    src: "https://source.unsplash.com/800x800/?beach,woman",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    textSize: "text-5xl",
  },
  {
    title: "Stuff",
    src: "https://source.unsplash.com/400x400/?plants,decor",
  },
  {
    title: "Food",
    src: "https://source.unsplash.com/400x400/?muffin,food",
  },
  {
    title: "Travel",
    src: "https://source.unsplash.com/400x400/?car,vintage",
  },
  {
    title: "Instagram",
    src: "https://source.unsplash.com/400x400/?camera,photography",
  },
];

const ContentLayout = () => {
  return (
    <div className="w-full bg-[#fdfcf5] py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 h-[400px] md:grid-cols-4 md:grid-rows-2 gap-3 md:h-[600px]">
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
                  item.textSize || "text-2xl"
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
