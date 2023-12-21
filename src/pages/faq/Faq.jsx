const Faq = () => {
  return (
      <div className="section-container mt-28">
         <div className="space-y-3 mt-12">
          <h2 className="text-xl md:text-2xl  lg:text-4xl text-center font-bold">
          Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-center font-medium">
          Explore Common Queries About TaskJet and Enhance Your Task Management Experience
          </p>
        </div>
          <div className="mt-16">
          <div className="collapse collapse-plus bg-third">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
        How can TaskJet help me manage my tasks effectively
        </div>
        <div className="collapse-content">
          <p>TaskJet empowers users to optimize task management with features such as intuitive drag-and-drop functionality, priority settings, and deadline tracking. It simplifies the process of creating, organizing, and completing tasks, resulting in a more efficient workflow</p>
        </div>
      </div>
      <div className="collapse collapse-plus my-6 bg-third">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How secure is the data on TaskJet, and is my information private
        </div>
        <div className="collapse-content">
          <p>At TaskJet, we prioritize the security and privacy of your data. We employ robust security measures and encryption protocols to safeguard your information. Your tasks and personal details are kept confidential, and we adhere to strict privacy policies to ensure a secure user experience</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-third">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Is TaskJet suitable for both individuals and teams
        </div>
        <div className="collapse-content">
          <p>Yes, TaskJet is designed to cater to both individual users and collaborative teams. Its user-friendly interface and versatile features make it an ideal solution for freelancers, small businesses, and larger teams alike. The platform facilitates seamless collaboration, ensuring everyone stays on the same page</p>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Faq;
