
import QuickactionCard from "../components/QuickactionCard";
import { quickActions } from "../data/data";


const QuickActions = () => {
  return (
    <div className="mx-8 my-10 px-8">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl">I'M LOOKING FOR</h3>
        <div className="w-16 h-1 bg-primary mt-2"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        {quickActions.map((action, index) => (
          <QuickactionCard
            key={index}
            title={action.title}
            description={action.description}
          >
            {action.icon}
          </QuickactionCard>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
