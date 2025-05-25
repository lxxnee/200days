import { useState, useEffect } from 'react';
import soodar from '../assets/soodar.png';


export default function Letter() {
  const [isVisible, setIsVisible] = useState(false);
  const fullText = `자기 우리의 200일 축하해 💕

이번 편지 준비하면서 나도 너무 행복했어 처음부터 지금까지 사진 하나하나 보며 골랐더니 그때 감정이 되살아나더라. 

일상에 치여서 너와의 소중한 순간들을 잘 떠올리지 못했는데, 사진을 보다가 네가 서운했던 순간도 떠올랐고, 

자기 에게 미안하고 고마운 마음이 함께 올라왔어.

이걸 보는 자기가 우리 함께한 순간들이 얼마나 예쁘고 행복했는지 다시 한번 기억해줬으면 좋겠어.

우리가 만난 건 겨울이었는데 벌써 두 계절이 지났네 시간 참 빠르다. 

요즘 주말마다 우리 집에서 함께 보내는 시간이 너무 좋아. 

로미 털도 날리고 작게 불편한 일도 있을 텐데 늘 내 곁에 있어줘서 고마워.

아직 200일밖에 안 됐지만, 여행도 많이 다니고 정말 많은 시간을 함께 보낸 것 같아. 

퇴근 후 운동은 솔직히 힘들지만, 자기 얼굴 잠깐이라도 볼 수 있어서 행복해. 

전에는 잠시 떨어지는 게 아쉬웠는데, 이젠 함께하는 시간이 일상이 되어버려서 

하루라도 자기를 못보면 허전하고 잠도 안 와 ㅠㅠ

가끔 내가 멍청하게 투덜거릴 때도 있지만, 진짜 자길 안 사랑하는 게 아니야. 

그러니까 너무 미워하지 말아줘. 나도 더 노력할게.

늘 사랑하고, 늘 고마워. 

내 사랑 윤태환.`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-screen bg-[#F1E5D1] pt-20 flex flex-col">
      {/* 상단 네비게이션 + 진행바 */}
        <main className="flex-1 overflow-auto px-4 pb-8">

        {/* 편지지 영역 */}
        <div
          className="relative mx-auto max-w-3xl bg-white shadow-lg border border-gray-300 rounded-lg p-6"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 22px, rgba(0,0,0,0.03) 23px)',
            backgroundSize: '100% 24px',
          }}
        >
          

          {/* 편지 내용 */}
          <div className="relative z-10">  {/* 글자 위에 페인트 컬러는 penColor 적용 */}
            <div 
              className={`whitespace-pre-wrap leading-relaxed text-black text-lg transition-opacity duration-[2000ms] ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {fullText.split('\n').map((line, index) => (
                <div key={index} className="relative">
                  <span>{line}</span>
                  {line && <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end justify-between">
            <img src={soodar} alt="soodar" className="w-1/2 ml-auto" />
          </div>
        </div>

        {/* 타임라인 버튼 */}
      </main>

      {/* 하단 컬러 선택바 */}
      
    </div>
  );
}

