import { ArrowLeft, User } from 'lucide-react';

// 운동 용품 데이터
const rewardItems = [
  {
    id: 1,
    name: '요가 매트',
    points: 500,
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwZml0bmVzc3xlbnwxfHx8fDE3NzM3OTIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: '덤벨 세트',
    points: 800,
    discount: '30%',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW1iYmVsbHMlMjB3ZWlnaHRzfGVufDF8fHx8MTc3MzgwNTQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: '저항 밴드',
    points: 300,
    discount: '15%',
    image: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpc3RhbmNlJTIwYmFuZHN8ZW58MXx8fHwxNzczODA1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: '스포츠 물병',
    points: 200,
    discount: '10%',
    image: 'https://images.unsplash.com/photo-1653527619751-9b5a6854a176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMGZpdG5lc3N8ZW58MXx8fHwxNzczODA1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: '폼롤러',
    points: 400,
    discount: '25%',
    image: 'https://images.unsplash.com/photo-1591741535585-9c4f52b3f13f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2FtJTIwcm9sbGVyfGVufDF8fHx8MTc3MzgwNTQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: '케틀벨',
    points: 700,
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1538134764063-789a8eaf6e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXR0bGViZWxsJTIwd29ya291dHxlbnwxfHx8fDE3NzM4MDU0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function RewardMallMain() {
  const currentPoints = 700;

  return (
    <div className="min-h-screen bg-white">

      {/* 메인 컨텐츠 */}

        {/* 포인트 표시 */}
        <div className="flex flex-col items-center mb-12 rounded-2xl p-8" style={{ backgroundColor: '#7FCDC4' }}>
          <h1 className="mb-2" style={{ color: '#02899C' }}>보유 포인트</h1>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold" style={{ color: '#02899C' }}>{currentPoints}</span>
            <span className="text-2xl" style={{ color: '#02899C' }}>P</span>
          </div>
          <p className="mt-2" style={{ color: '#02899C' }}>운동으로 포인트를 모아 리워드를 받으세요!</p>
        </div>

        {/* 상품 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {rewardItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              style={{ border: '2px solid #7FCDC4' }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 text-white px-2 py-1 rounded-md text-sm font-bold" style={{ backgroundColor: '#02899C' }}>
                  {item.discount}
                </div>
              </div>
              <div className="p-3" style={{ backgroundColor: '#FFFFFF' }}>
                <h3 className="font-semibold mb-1" style={{ color: '#02899C' }}>{item.name}</h3>
                <p className="font-bold" style={{ color: '#02899C' }}>{item.points} P</p>
              </div>
            </div>
          ))}

          {/* 마지막 블록: 몰에서 더 보기 */}
          <div className="rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex items-center justify-center aspect-square" style={{ backgroundColor: '#02899C' }}>
            <div className="text-center p-4">
              <div className="text-white text-4xl mb-2">+</div>
              <p className="text-white font-semibold">몰에서 더 보기</p>
            </div>
          </div>
        </div>

    </div>
  );
}