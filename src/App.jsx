import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import ScentRecommendation from "@/pages/ScentRecommendation";
import AnonymousMessage from "@/pages/AnonymousMessage";
import AnonymousDebate from "@/pages/AnonymousDebate";
import AnonymousSupport from "@/pages/AnonymousSupport";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scent" element={<ScentRecommendation />} />
          <Route path="/message" element={<AnonymousMessage />} />
          <Route path="/debate" element={<AnonymousDebate />} />
          <Route path="/support" element={<AnonymousSupport />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
