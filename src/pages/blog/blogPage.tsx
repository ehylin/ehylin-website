import SectionHeader from "../../components/sectionHeader";

type Post = {
  id: string | number;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  href?: string;
};

type BlogListProps = {
  title?: string;
  posts: Post[];
  accentColor?: string;
};

export default function BlogList({
  posts,
  accentColor = "#c4a885",
}: BlogListProps) {
  return (
    <section id="blog" className="mx-auto max-w-4xl  py-12">
      <SectionHeader title="Artículos" accentColor={accentColor} align="left" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const Card = post.href ? "a" : "article";
          const cardProps = post.href ? { href: post.href } : {};
          return (
            <Card
              key={post.id}
              {...cardProps}
              className="group block focus:outline-none"
            >
              <div className="w-full overflow-hidden rounded-md">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-3 text-sm">
                <span>By:</span>
                <span
                  className="ml-1 font-medium"
                  style={{ color: accentColor }}
                >
                  {post.author}
                </span>
                <span className="mx-2">|</span>
                <span className="font-medium" style={{ color: accentColor }}>
                  {post.date}
                </span>
              </p>

              <h3 className="mt-2 text-lg font-semibold leading-snug">
                {post.title}
              </h3>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
