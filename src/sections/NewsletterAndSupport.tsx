import NewsletterCard from "../components/NewsletterCard";
import SupportCard from "../components/SupportCard";

function NewsletterAndSupport() {
  return (
    <div className="mx-8 my-10 px-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <NewsletterCard/>
        <SupportCard />
      </div>
    </div>
  );
}

export default NewsletterAndSupport;
