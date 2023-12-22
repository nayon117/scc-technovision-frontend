import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="section-container my-20 py-6">
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* text  */}
        <div className="flex-1 space-y-7">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Effortless Task <span className="text-first">Management</span></h2>
          <p className="text-xl">
            Streamline Your Workflow with TaskJet: Where Productivity Takes
            Flight
          </p>
          <Link to='/dashboard'>
          <button className="animate__animated animate__zoomIn animate__infinite	infinite animate__slow bg-white border-first btn hover:bg-first hover:text-white mt-6">Let&apos;s Explore
          </button>
          </Link>

        </div>

        {/* img */}
        <div className="flex-1">
          <img className="rounded-md" src="https://i.ibb.co/Gc5FK0L/markus-winkler-Q2-J2q-Qso-YH8-unsplash.jpg" alt="taskmanagement image" />
        </div>
      </div>
    </section>
  );
};
export default Banner;
