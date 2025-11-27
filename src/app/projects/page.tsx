import { Metadata } from "next";
import PreviewProject from '@/components/PreviewProject/PreviewProject';
import { projects } from '@/helpers/projectList';
import './style.css';

export const metadata: Metadata = {
  title: "Проекты"
};

const Page = () => {

  return (
    <main className="selection">
      <div className="container">
        <h2 className="titel-1">Проекты</h2>
        <ul className="projects">
          {projects.map((project, index) => (
            <PreviewProject
              key={index}
              index={index}
              titel={project.titel}
              img={project.imgPreview}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Page;