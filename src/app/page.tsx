import FrontPage from "@/components/layout/FrontPage";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import RecentWorks from "@/components/layout/RecentWorks";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <FrontPage />
        
      </div>
      <main >
        <Hero />
        <RecentWorks />
      </main>
      
      <Footer />  
    </>
  );
}