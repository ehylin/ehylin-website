import ContentLaoyout from "./components/contentLayout";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutMe from "./pages/aboutMe/about";
import SkillsSection from "./pages/aboutMe/skills";
import BlogList from "./pages/blog/blogPage";
import ContactSection from "./pages/contact/contactMe";
import ResumeSection from "./pages/resume/resumePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />{" "}
      <main className="flex-grow">
        <ContentLaoyout />
        <AboutMe
          imageUrl="https://images.unsplash.com/photo"
          headline="Hola Soy, Ehylin Olezjua"
          role="FrontEnd"
          description="Soy diseñador web, con enfoque en programacion con un fuerte enfoque en JS. Creo obras que atraen, inspiran e impulsan la acción."
          info={[
            { label: "Cumpleaños", value: "Julio 11, 1990" },
            { label: "Teléfono", value: "+34 604-80-89-28" },
            { label: "Correo", value: "ehylindesarrollo@gmail.com" },
            { label: "From", value: "Venezolana" },
            { label: "Language", value: "Expañol, Inglés" },
          ]}
        />
        <SkillsSection
          skills={[
            { name: "JavaScript", value: 95 },
            { name: "ReactJs", value: 90 },
            { name: "VueJs", value: 75 },
            { name: "Figma", value: 80 },
            { name: "HTML", value: 95 },
            { name: "CSS", value: 95 },
          ]}
          barColor="#c4a885" // tu color
        />
        <ResumeSection
          highlightColor="#c4a885"
          education={[
            {
              title: "Master of Computer Science",
              period: "2015 - 2016",
              org: "University of XYZ",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed.",
            },
            {
              title: "Bachelor of Computer Science",
              period: "2010 - 2014",
              org: "University of ABC",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed.",
            },
            {
              title: "Diploma in Computer Science",
              period: "2006 - 2010",
              org: "XYZ Institution",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed.",
            },
          ]}
          experience={[
            {
              title: "Senior UX/UI Designer",
              period: "Jan 2020 - Present",
              org: "Bergnaum, Hills and Howe",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed.",
            },
            {
              title: "Product Designer",
              period: "Jan 2016 - Dec 2019",
              org: "Langosh, Sipes and Raynor",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed.",
            },
            {
              title: "UI/UX Designer",
              period: "Jan 2014 - Dec 2015",
              org: "Strosin, Maggio and Homenick",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed.",
            },
          ]}
        />
        <BlogList
          accentColor="#c4a885"
          posts={[
            {
              id: 1,
              title: "latest trends in Graphic design according to you?",
              author: "Admin",
              date: "07-03-2023",
              imageUrl:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
              href: "#",
            },
            {
              id: 2,
              title:
                "What are the latest trends in Graphic design according to you?",
              author: "Admin",
              date: "07-03-2023",
              imageUrl:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
              href: "#",
            },
            {
              id: 3,
              title: "Trends in Graphic design according to you?",
              author: "Admin",
              date: "07-03-2023",
              imageUrl:
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
              href: "#",
            },
          ]}
        />
        <ContactSection
          emails={["ehylindesarrollo@gmail.com", "ehydevpro@gmail.com"]}
          blog={["https://www.ehydev.com"]}
          linkedIn={["https://www.linkedin.com/in/ehylin-olezjua"]}
          github={["https://github.com/ehylin"]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
