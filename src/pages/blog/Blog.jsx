const Blog = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center f-m-w text-first font-bold pt-6">
          Our Blogs
        </h1>
        <div className="pt-10 xl:px-0 px-4">
          <div className="w-full lg:flex">
            <div className="lg:w-1/2">
              <img
                src="https://i.ibb.co/hsPRYmg/glenn-carstens-peters-RLw-UC03-Gwc-unsplash.jpg"
                className="w-full"
              />
              <div className="mt-8 lg:mb-0 mb-8">
                <h1 className="f-m-m text-2xl font-semibold leading-7">
                Mastering Time Management
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                Immerse yourself in the world of efficient time management with TaskJet. This blog series is designed to guide you through practical strategies, helping you optimize your daily workflow, set priorities, and effortlessly meet deadlines. TaskJet is more than a tool; its your comprehensive companion on the journey to mastering the art of effective time management
                </p>
                <div className="mt-6">
                  <a href>
                    <p className="text-second underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://i.ibb.co/cCG2T40/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg"
                  className="w-full lg:w-[40%] lg:h-60"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  Tech Behind TaskJet
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                  Take a behind-the-scenes look at the technology, TaskJets seamless task management platform. This blog offers insights into the cutting-edge technologies and innovative features that make TaskJet a reliable and high-performance solution. 
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-second underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://i.ibb.co/d2YG7Bw/airfocus-f2-C59x5uvn8-unsplash.jpg"
                  className="w-full lg:w-[40%] lg:h-60"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  TaskJet Tips & Tricks
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                  Elevate your task management proficiency with our TaskJet Tips & Tricks series. Whether you are a seasoned user or just getting started, this series provides practical insights into mastering advanced functionalities, and discovering insider tricks. 
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-second underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://i.ibb.co/9Zfr1XC/airfocus-um1z-Vj-VCt-EY-unsplash.jpg"
                  className="w-full lg:w-[40%] lg:h-60"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                  Future of Task Management
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                   Explore emerging trends and innovations that are reshaping the way we work. Stay ahead of the curve, adapt to evolving technologies, and embrace the future of task management with TaskJet.  
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-second underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div />
      </div>
    </div>
  );
};
export default Blog;
