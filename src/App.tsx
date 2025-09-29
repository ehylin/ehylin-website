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
            { label: "Correo", value: "ehylinolezjua@gmail.com" },
            { label: "Desde", value: "Venezuela" },
            { label: "Lenguaje", value: "Expañol, Inglés" },
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
              title: "Desarrollador FrontEnd",
              period: "2018 - 2021",
              org: "Desafío Latam",
              description:
                "Curso en React, Desarrollo FrontEnd con Vue, Control de versiones Git.",
            },
            {
              title: "Diseño Profesional de Páginas Web",
              period: "2016 - 2017",
              org: "Academia CadiF1",
              description:
                "Maquetaciónw web con HTML, programación con JS, Desarrollo en Wordpress",
            },
            {
              title: "Licenciada en Administración",
              period: "2006 - 2010",
              org: "XYZ Institution",
              description:
                "Licenciatura en administración mención gerencia, administración y gestión de empresas.",
            },
          ]}
          experience={[
            {
              title: "FrontEnd Engineer",
              period: "Apr 2022 - Present",
              org: "Gosocket",
              description:
                "Desarrollador FrontEnd en React, metodología ágil, control de versiones Git.",
            },
            {
              title: "FrontEnd Engineer en Walmart",
              period: "Dec 2019 - Oct 2021",
              org: "Acid Labs Chile",
              description:
                "Desarrollador Front-End, realización de plataformas web con React, integración Api Rest, JavaScript, metodología ágil, control de versiones Git",
            },
            {
              title: "FrontEnd Developer",
              period: "Jun 2019 - Dec 2019",
              org: "Altia",
              description:
                "Desarrollador Front End en Vue.js, Vuetify, versiones en Dédalo, Visual Studio Code, integración Api Rest.",
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
