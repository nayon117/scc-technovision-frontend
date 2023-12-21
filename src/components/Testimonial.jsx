import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
    return (
      <div className="py-16">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl  lg:text-4xl text-center font-bold">
          TaskJet in Action
          </h2>
          <p className="text-center font-medium">
          Discover What Our Users Are Saying About Their TaskJet Experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            role="listitem"
            className="bg-white shadow rounded p-4 xl:p-8"
          >
           <FaQuoteLeft className="text-first"/>

            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                Indispensable for teams. Simple, efficient, and must-have for any business
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Anna Smith
                </p>
              </div>
              <img
                src="https://i.ibb.co/qRcWFfM/avatar-1.png"
                alt="Display Avatar of Anna Smith"
                role="img"
              />
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            role="listitem"
            className="bg-white shadow rounded p-4 xl:p-8"
          >
            <FaQuoteLeft className="text-first"/>
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                Versatile tool for productivity. Smooth experience, valuable insights, and essential for our office
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Dany John
                </p>
              </div>
              <img
                src="https://i.ibb.co/vmqhQZ6/avatar-2.png"
                alt="Display avatar of Dany John"
                role="img"
              />
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            role="listitem"
            className="bg-white shadow rounded p-4 xl:p-8"
          >
             <FaQuoteLeft className="text-first"/>
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                Essential for freelancers! User-friendly, organized, and responsive customer support.
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Mike Blake
                </p>
              </div>
              <img
                src="https://i.ibb.co/znmdwyv/avatar-3.png"
                alt="Display Avatar of Mike Blake"
                role="img"
              />
            </div>
          </div>
  
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            role="listitem"
            className="bg-white shadow rounded p-4 xl:p-8"
          >
           <FaQuoteLeft className="text-first"/>
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                A game-changer for project managers! Streamlined workflow, intuitive design, and top-notch collaboration
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  David
                </p>
              </div>
              <img
                src="https://i.ibb.co/JdVVPk9/avater4.png"
                alt="Display avatar of David"
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;