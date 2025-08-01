import { Routes, Route } from 'react-router-dom';
import { SVGMaskEffectDemo } from './components/ui/SVGMaskEffectDemo';
import { NavbarDemo } from './components/ui/NavbarDemo';
import { TimelineDemo } from './components/ui/TimelineDemo';
import { TextGenerateEffectDemo } from './components/ui/TextGenerateEffectDemo';
import { FloatingDockDemo } from './components/ui/FloatingDockDemo';
import { AcademicProgression } from './components/ui/AcademicProgression';
import { ProjectsPage } from './components/ui/ProjectPage';

function App() {
  return (
    <>
      <NavbarDemo />
      <main className="bg-black">
        <Routes>
          <Route path="/" element={
            <>
              <section className="min-h-screen bg-black">
                <SVGMaskEffectDemo />
              </section>

              <section className="min-h-screen">
                <TimelineDemo />
              </section>

              <section className="min-h-screen bg-black flex flex-col items-center justify-center relative">
                <TextGenerateEffectDemo />
                <FloatingDockDemo />
              </section>
            </>
          } />
          <Route path="/academic-progression" element={<AcademicProgression />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;