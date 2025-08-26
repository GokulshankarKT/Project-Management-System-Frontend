import { Star, PercentSquare, GroupIcon } from "lucide-react";
type RatingType = {
  node: React.ReactNode | string;
  title: string;
  description: string;
};

const ratings: RatingType[] = [
  {
    node: <GroupIcon size={30} />,
    title: "120K+",
    description: "Users and Teams actively using taskify for productivity",
  },
  {
    node: <Star size={30} />,
    title: "4.8",
    description: "Positive ratings by pulse user around the world",
  },
  {
    node: <PercentSquare size={30} />,
    title: "100%",
    description: "User Satisfaction with taskify, reflection improvement",
  },
];

const Rating = () => {
  return (
    <div className="w-full h-full p-2 md:p-3 lg:p-4  rounded-4xl flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 mt-10">
      {ratings.map((rating: RatingType, index: number) => (
        <div
          key={index}
          className="flex-1 flex flex-col gap-5 items-center justify-center text-center md:text-left">
          <div className="flex flex-row items-center justify-center gap-3">
            {rating.node}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              {rating.title}
            </h1>
          </div>
          <p className="text-md text-secondary">{rating.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Rating;
