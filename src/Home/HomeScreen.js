import Navbar from "../login/Navbar";
import Section from "../login/ShowCase";
import NewsLetter from "../login/NewsLetter";
import Cards from "../login/Cards";
import LearnSection from "../login/LearnSection";
import Questions from "../login/Questions";
import Instructors from "../login/Instructors";
import Footer from "../login/Footer";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <NewsLetter />
      <Cards />
      <LearnSection />
      <Questions />
      <Instructors />
      <Footer />
    </div>
  );
};

export default HomeScreen;
