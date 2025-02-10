import ProgrammingLanguagesList from "./ProgrammingLanguagesList";
import ProjectsList from "./ProjectsList";

const Main = () => {
  return (
    <main className="bg-white dark:bg-stone-900 flex flex-col justify-items-center items-center rounded-b-4xl">
      <ProgrammingLanguagesList />
      <ProjectsList />
    </main>
  );
};

export default Main;
