
import WdogBreadClum from "@/components/WdogBreadClum";
import RewardRankingMain from "@/sections/RewardRankingMain";


export default function RewardRanking() {

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4">
        <WdogBreadClum page="RewardRanking" />
      </div>
      <div className="flex gap-4 w-full">
        <RewardRankingMain />
      </div>
    </div>
  );
}