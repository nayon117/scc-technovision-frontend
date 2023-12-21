const About = () => {
    return (
      <div>
        <div className="section-container lg:py-16 mt-20 md:py-12 py-9">
          <p className="font-normal text-sm leading-3 text-neutral cursor-pointer pb-2">
            About TaskJet
          </p>
          <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
            <div className="w-full lg:w-6/12">
              <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
                Uncover the Team Behind TaskJets Innovation
              </h2>
              <p className="font-normal text-base leading-6 text-gray-600 mt-3">
                Explore the story, vision, and people powering TaskJets mission
                to revolutionize task management. Familiarize yourself with the
                essence of our journey and the community that makes it all possible.
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <img
                className="lg:block hidden w-full"
                src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
                alt="people discussing on board"
              />
              <img
                className="lg:hidden sm:block hidden w-full"
                src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
                alt="people discussing on board"
              />
              <img
                className="sm:hidden block w-full"
                src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
                alt="people discussing on board"
              />
            </div>
          </div>
  
          <div className="relative mt-24">
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
              <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
                  alt="flag"
                />
              </div>
  
              <img
                className="z-20"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
                alt="note"
              />
  
              <img
                className="z-20 sm:block hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
                alt="users"
              />
            </div>
            <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                Founded
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                TaskJets journey began with a deep passion for efficient task
                management and a commitment to share the transformative power of
                streamlined workflows. Established in 2015.
              </p>
            </div>
            <div>
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">
                50M monthly enrichments
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                Every month, we strive to enrich the lives of TaskJet users through
                thoughtfully curated features and updates, ensuring a seamless task
                management experience.
              </p>
            </div>
            <div className="sm:block hidden">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                400k Users
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                Our growing community of TaskJet users continues to inspire us to
                offer exceptional task management experiences that enhance
                productivity and collaboration.
              </p>
            </div>
          </div>
          <div className="sm:hidden block relative mt-8">
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
                alt="user"
              />
            </div>
            <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
          </div>
          <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                400k Users
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                TaskJet is committed to providing a seamless and secure task
                management platform. Explore our journey and the innovative
                features that make TaskJet the go-to choice for effective task
                handling.
              </p>
            </div>
          </div>
  
          <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
            <div className="w-full lg:w-6/12">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">
                Our Mission
              </h2>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
                Our mission at TaskJet is to inspire and empower individuals on
                their journey to efficient task management. We believe that
                productivity and simplicity go hand in hand, and our platform is
                designed to provide a holistic experience that nurtures both the
                user and the workflow.
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                <div className="flex p-4 shadow-md">
                  <div className="mr-6">
                    <img
                      className="mr-6"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg"
                      alt="team card"
                    />
                  </div>
                  <div className="">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 ">
                      Team
                    </p>
                    <p className="mt-2 font-normal text-base leading-6 text-gray-600 ">
                      Our team of dedicated developers, designers, and task
                      management enthusiasts is committed to bringing you the best
                      experience with TaskJet. We strive to make task management
                      intuitive, efficient, and enjoyable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  