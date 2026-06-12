import CommunityCard from "../components/CommunityCard";
import { communityData } from "../data/data";

function Community() {
  return (
    <div className="my-10 px-10 bg-cream-highlight">
      <div className="p-4">
        <div className="flex flex-col mt-4 items-center">
          <h2 className="text-lg font-bold text-primary">
            OUR DIVERSE COMMUNITY
          </h2>
          <p className="text-center text-secondary-text w-auto">
            Many cultures, one faith. We are one family in Christ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {communityData.map((com, index) => (
            <div key={index}>
              <CommunityCard
                image={com.image}
                title={com.title}
                description={com.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;
