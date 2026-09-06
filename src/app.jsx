import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteShell } from "./components/site-shell.jsx";

import {
  HomePage,
  PlatformPage,
  CMSPage,
  DrivePage,
  SolutionsPage,
  TechnologyPage,
  AboutPage,
  TractionPage,
  ContactPage,
  SolutionDetailPage,
  SimpleInfoPage
} from "./components/trevia-pages.jsx";

function App() {
  return (
    <BrowserRouter>
      <SiteShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/cms" element={<CMSPage />} />
          <Route path="/drive" element={<DrivePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/cpos" element={<SolutionDetailPage type="cpos" />} />
          <Route path="/solutions/fleets" element={<SolutionDetailPage type="fleets" />} />
          <Route path="/solutions/enterprises" element={<SolutionDetailPage type="enterprises" />} />
          <Route path="/solutions/energy" element={<SolutionDetailPage type="energy" />} />
          <Route path="/solutions/government" element={<SolutionDetailPage type="government" />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/traction" element={<TractionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<SimpleInfoPage title="Privacy Policy" eyebrow="Legal" copy="Privacy policy content will be published here once approved." />} />
          <Route path="/terms" element={<SimpleInfoPage title="Terms of Use" eyebrow="Legal" copy="Terms of use content will be published here once approved." />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  );
}

export default App;