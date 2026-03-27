import WdogBreadClum from "@/components/WdogBreadClum";
import RewardMallMain from "@/sections/RewardMallMain";

export default function RewardMall() {

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4">
        <WdogBreadClum page="RewardMall"/> 
      </div>
      <div className="flex gap-4">
        <RewardMallMain />
      </div>


    </div>
  );
}