interface testimonialType {
  rating: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: testimonialType[] = [
  {
    rating: 4.8,
    text: "I've tried several task management tools, but this one stands out as the best. The real-time reporting feature is incredibly useful for tracking our team's progress.",
    author: "Ryan Calzoni",
    role: "Marketing Coordinator",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rating: 4.4,
    text: "As someone who juggles multiple projects, I needed a tool that could keep me organized without being a hassle to use. This platform.",
    author: "Kaylynn Westervelt",
    role: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    rating: 4.5,
    text: "This task management website has transformed the way our team works. The ease of assigning tasks, setting deadlines, and tracking progress is unmatched.",
    author: "Maria Dorwart",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    rating: 4.6,
    text: "I love how user-friendly this platform is. It has streamlined our task management and made it easier to oversee multiple projects simultaneously.",
    author: "Erin Levin",
    role: "Dog Trainer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    rating: 4.7,
    text: "The progress tracking and reporting tools are particularly impressive, providing us with the insights we need to make informed decisions quickly. This tool has become an essential part.",
    author: "Charlie Franci",
    role: "President of Sales",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    rating: 4.8,
    text: "The real-time updates and reporting help us stay on top of our projects without any guesswork. Plus, their customer support is fantastic—responsive and helpful.",
    author: "Gretchen Levin",
    role: "Nursing Assistant",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:mt-10">
      <h1 className="h1-custom">What are they say after using Testify</h1>
      <div>
        <div className=" h-full p-4 md:p-6 lg:p-8 bg-accent rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" main-gradient p-4 rounded-lg shadow-card flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-md font-semibold text-primary">
                      {testimonial.author}
                    </h2>
                    <p className="text-sm text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <div className="bg-surface text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.rating} <span className="">★</span>
                </div>
              </div>
              <p className="text-sm text-secondary">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
