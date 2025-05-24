import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

const events: TimelineEvent[] = [
  {
    date: "2024.12.25",
    title: "크리스마스 여행",
    description: "자기랑 함께하는 첫여행"
  },
  {
    date: "2024.03.23",
    title: "부산 여행",
    description: "오션뷰 호텔에서 회포장해서 회먹기!"
  },
  {
    date: "2024.05.05",
    title: "거제도 여행",
    description: "풀빌라에서 재미지게 수영"
  },
  {
    date: "2024.05.12",
    title: "도시락 받은날",
    description: "런닝끝나고 먹는 태환이가 싸준 도시락은 행복"
  },
  
  
];

export default function Timeline() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F1E5D1] py-20 px-4 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#987070]">우리의 특별한 순간들</h2>
        
        <div className="relative">
          {/* 물결 모양의 타임라인 선 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#987070] via-[#C39898] to-[#987070] rounded-full" />
          
          {/* 이벤트들 */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* 날짜 */}
                <div className="w-1/2 px-4">
                  <div className={`text-right ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-sm text-gray-500">{event.date}</div>
                    <h3 className="text-xl font-semibold text-[#987070] mt-1">{event.title}</h3>
                    <p className="text-gray-600 mt-1">{event.description}</p>
                  </div>
                </div>

                {/* 중앙 원 */}
                <div className="relative z-10">
                  <div className="w-6 h-6 rounded-full bg-[#987070] border-4 border-[#987070] shadow-lg" />
                </div>

                {/* 빈 공간 */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => navigate('/openletter')}
            className="bg-[#987070] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#C39898] transition-colors duration-300"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            편지 확인하기
          </motion.button>
        </div>
    </div>
  );
} 