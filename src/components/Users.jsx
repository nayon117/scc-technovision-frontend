const Users = () => {
  const userTypes = [
    "Developers",
    "Corporate Professionals",
    "Bankers",
    "Freelancers",
    "Small Business Owners",
    "Project Managers",
    "Students",
    "Entrepreneurs",
  ];

  return (
    <div className="bg-third py-16">
      <div className="section-container text-center">
        <h2 className="font-bold text-4xl text-second mb-6">
          Empowering a Diverse Community
        </h2>
        <p className="font-normal text-base text-gray-600 mb-8">
          Discover how TaskJet is making a difference in the lives of
          individuals and professionals from various backgrounds. Whether you
          are a developer, corporate professional, banker, freelancer, or a
          small business owner, TaskJet is designed to streamline your task
          management experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {userTypes.map((type, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-6 rounded-md hover:bg-first  shadow-md"
            >
              <p className="font-semibold hover:text-white text-gray-800">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
