import Projects from './pages/Projects';
import Project from './pages/Project';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='project/:slug' element={<Project />} />
      </Routes>
    </Layout>
  );
}

export default App;
