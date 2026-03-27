import * as React from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";
import type { RankingItem } from "shared";
import { startOfMonth, endOfMonth, format } from 'date-fns';

// const rankingData = [
//   { rank: 1, name: "민준", record: "주 6회 · 540분", image: "" },
//   { rank: 2, name: "서연", record: "주 6회 · 500분", image: "" },
//   { rank: 3, name: "지호", record: "주 5회 · 470분", image: "" },
//   { rank: 4, name: "하윤", record: "주 5회 · 430분", image: "" },
//   { rank: 5, name: "도윤", record: "주 4회 · 400분", image: "" },
// ]

const now = new Date();

const from_dt = startOfMonth(now);
const to_dt = endOfMonth(now);

const sizeByRank: Record<number, string> = {
  1: "h-32 w-32",
  2: "h-28 w-28",
  3: "h-24 w-24",
  4: "h-20 w-20",
  5: "h-[4.5rem] w-[4.5rem]",
}

const fallbackTextByRank: Record<number, string> = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
  4: "text-lg",
  5: "text-base",
}

const gaugeMetaByRank: Record<number, { fill: number; duration: number }> = {
  1: { fill: 100, duration: 1.1 },
  2: { fill: 92, duration: 1.4 },
  3: { fill: 84, duration: 1.8 },
  4: { fill: 74, duration: 2.2 },
  5: { fill: 64, duration: 2.7 },
}

const ExerciseRankingAvatar = () => {
  const [rankingData, setRankingData] = useState<RankingItem[]>([]);
  useEffect(() => {
    // 회원 정보 조회
    fetch(`http://localhost:3001/api/getRanking?from_dt=${format(from_dt, 'yyyy-MM-dd')}&to_dt=${format(to_dt, 'yyyy-MM-dd')}`)
      .then(res => res.json())
      .then(data => {
        console.log("Ranking data:", data.data
        );
        setRankingData(data.data);
      });
  }, []);

  return (
    <>
      <style>{`
        @keyframes gauge-fill {
          0% {
            width: 0%;
            opacity: 0.55;
          }
          100% {
            width: var(--fill);
            opacity: 1;
          }
        }

        @keyframes run-right-to-left {
          0% {
            right: 10px;
          }
          100% {
            right: calc(var(--fill) - 28px);
          }
        }

        .runner-fill {
          animation: gauge-fill 0.9s ease-out forwards;
        }

        .runner-icon {
          animation: run-right-to-left var(--duration) linear infinite;
        }
      `}</style>

      <Card className="mx-auto w-full max-w-6xl border-0 bg-white shadow-xl">
        <CardHeader className="px-8 pt-8">
          <CardTitle className="text-4xl font-bold text-[#02899B]">
            운동 기록 순위
          </CardTitle>
        </CardHeader>

        <CardContent className="px-6 pb-8 sm:px-8">
          <div className="flex w-full flex-col gap-5">
            {rankingData.map((user) => {
              const isTop3 = user.rank <= 3
              const gauge = gaugeMetaByRank[user.rank]

              return (
                <div
                  key={user.rank}
                  className="flex w-full items-center rounded-3xl bg-white px-6 py-5 shadow-md transition-all hover:shadow-xl hover:scale-[1.01]"
                >
                  <div className="flex shrink-0 items-center gap-6 sm:gap-8">
                    <div
                      className={`w-16 text-right text-2xl font-bold sm:w-20 sm:text-3xl ${user.rank === 1 ? "text-[#02899B]" : "text-[#79C7C1]"
                        }`}
                    >
                      #{user.rank}
                    </div>

                    <Avatar
                      className={`${sizeByRank[user.rank]} shrink-0 transition-all ${user.rank === 1
                          ? "scale-105 bg-[#02899B] text-white shadow-2xl"
                          : user.rank <= 3
                            ? "bg-[#79C7C1] text-white shadow-lg"
                            : "bg-[#EAF7F6] text-[#02899B] shadow-md"
                        }`}
                    >
                      <AvatarImage src={user.img} alt={user.name} />
                      <AvatarFallback
                        className={`whitespace-nowrap font-bold ${fallbackTextByRank[user.rank]}`}
                      >
                        {user.name}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="ml-8 flex min-w-0 flex-1 items-center gap-8">
                    <div className="w-[180px] shrink-0 text-right sm:w-[220px]">
                      <p
                        className={`truncate text-2xl font-semibold sm:text-3xl ${isTop3 ? "text-[#02899B]" : "text-gray-700"
                          }`}
                      >
                        {user.name}
                      </p>
                      <p className="truncate text-lg text-gray-400 sm:text-xl">
                        {user.record}
                      </p>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className="relative h-8 w-full overflow-hidden rounded-full bg-[#EAF7F6] shadow-inner"
                        style={
                          {
                            ["--fill" as string]: `${gauge.fill}%`,
                            ["--duration" as string]: `${gauge.duration}s`,
                          } as React.CSSProperties
                        }
                      >
                        <div
                          className={`runner-fill absolute right-0 top-0 h-full rounded-full ${user.rank === 1
                              ? "bg-[#02899B]"
                              : user.rank <= 3
                                ? "bg-[#49B7B3]"
                                : "bg-[#79C7C1]"
                            }`}
                        />

                        <div className="absolute inset-0 rounded-full bg-gradient-to-l from-white/0 via-white/10 to-white/25" />

                        <div
                          className="runner-icon absolute top-1/2 z-10 -translate-y-1/2 text-[28px]"
                        >
                          🏃
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ExerciseRankingAvatar