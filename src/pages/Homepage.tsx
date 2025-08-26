import Footer from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import Rating from "@/components/HomePage/Rating";
import Reviews from "@/components/HomePage/Reviews";
import Values from "@/components/HomePage/Values";

const Homepage = () => {
  return (
    <div className="w-full h-full">
      <main className="p-4 main-gradient w-full h-full shadow-lg rounded-t-md m-0 ">
        <div className="">
          <Header />
        </div>
        <section className="p-4 mt-20 md:mt-10 flex items-center justify-center ">
          <div className="w-full text-center flex flex-col gap-5">
            <h1 className="flex flex-col h1-custom">
              <span>Effortless Task Management </span>
              <span>for Teams and Individuals</span>
            </h1>
            <p className="p-custom ">
              Our service caters to both teams and individuals, ensuring
              everyone can stay organized and productive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-button text-button px-6 py-3 rounded-full text-sm md:text-md hover:bg-primary/90 transition">
                Get Started
              </button>
            </div>
          </div>
        </section>
        <div className="">
          <Values />
        </div>
        <div className="">
          <Rating />
        </div>
        <div className="">
          <Reviews />
        </div>
      </main>
      <footer className="m-[-4]]">
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
