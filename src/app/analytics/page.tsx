import { analytics } from "@/utils/analytics";

const page = async () => {
  const pageView = await analytics.retrieveDays("page-view", 1);
  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">

      </div>
    </div>
  );
};

export default page;
