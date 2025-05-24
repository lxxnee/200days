// src/components/ScrollSnapGallery.tsx
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// assets 폴더의 파일명을 띄어쓰기 없이 _ 로 바꾼 것에 주의!1ZZZKakaoTalk_Photo_2025-05-23-21-45-25_019.jpg';
import img1  from '../assets/1.jpeg';
import img2  from '../assets/2.jpeg';
import img3  from '../assets/3.jpeg';
import img4  from '../assets/4.jpeg';
import img5  from '../assets/5.jpeg';
import img6  from '../assets/6.jpeg';
import img7  from '../assets/7.jpeg';
import img8  from '../assets/8.jpeg';
import img9  from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
import img12 from '../assets/12.jpeg';
import img13 from '../assets/13.jpeg';
import img14 from '../assets/14.jpeg';
import img15 from '../assets/15.jpeg';
import img16 from '../assets/16.jpeg';
import img17 from '../assets/17.jpeg';
import img18 from '../assets/18.jpeg';
import img19 from '../assets/19.jpeg';
import img20 from '../assets/20.jpeg';
import img21 from '../assets/21.jpeg';
import img22 from '../assets/22.jpeg';
import img23 from '../assets/23.jpeg';
import img24 from '../assets/24.jpeg';
import img25 from '../assets/25.jpeg';
import img26 from '../assets/26.jpeg';
import img27 from '../assets/27.jpeg';
import img28 from '../assets/28.jpeg';
import img29 from '../assets/29.jpeg';
import img30 from '../assets/30.jpeg';
import img31 from '../assets/31.jpeg';
import img32 from '../assets/32.jpeg';
import img33 from '../assets/33.jpeg';
import img34 from '../assets/34.jpeg';
import img35 from '../assets/35.jpeg';

type ImageItem = {
    src: string;
    date?: string;
    title?: string;
    description?: string;
  };

type Item = {
  id: number;
  text: string;
  images?: ImageItem[];
};

const items: Item[] = [
  { id: 1,  text: "서린이와 태환, 우리의 200일을 축하해 🩶", images: [] },
  {
    id: 2,
    text: "자기, 오늘 드디어 200일이야 오지 않을꺼 같던 날들이 이렇게나 빨리 찾아왔어!",
    images: []
  },
  {
    id: 3,
    text: "이 사진은 우리 첫 만남 날, 아침부터 화장하고 설레는 마음으로 출근했던 그날이야. 계대 앞에서 데이트했던 거 기억나?",
    images: [{src: img1, title: "", description: ""}]
  },
  {
    id: 4,
    text: "이 사진들은 우리 첫 카페 데이트 날이야. 나중에 자기한테 물었을 때 자긴 저날이 젤 좋다했엇어",
    images: [{src: img2, title: "", description: ""}, {src: img4, title: "", description: ""}]
  },
  {
    id: 5,
    text: "이날은 우리가 사귄 지 얼마 안 돼서 자기 집에서 자기가 밥을 해주고 같이 잤던 날이야. 그때 자기 구역에 들어간거같아 기분 좋았어😊",
    images: [{src: img3, title: "", description: ""}]
  },
  {
    id: 6,
    text: "이날은 자기가 내가 서운하다 하기 전에 겜 왕창 하고 그다음 날 내가 밥을 해줬어",
    images: [{src: img7, title: "", description: ""}, {src: img8, title: "", description: ""}]
  },
  {
    id: 7,
    text: "로미가 아픈 것 같다고 했더니, 자기가 우리 집에서 데려가서 병원까지 함께 가줬잖아. 고마워",
    images: [{src: img9, title: "", description: ""}]
  },
  {
    id: 8,
    text: "우리 크리스마스 여행 간 날도 무지 행복했잖아 만난지 얼마 안 돼서 첫 여행이었고",
    images: [{src: img10, title: "", description: ""}, {src: img11, title: "", description: ""}]
  },
  {
    id: 9,
    text: "자기가 나 동구까지 같이 가줘서 머리하는 거 기다려주고 내 친구 반창고도 사주고",
    images: [{src: img14, title: "", description: ""}]
  },
  {
    id: 10,
    text: "이날은 자기랑 김광석 거리 가서 캐리커쳐 받고 자기 차 좋아해서 내가 카페 알아봤는데 은근 멀었어",
    images: [{src: img15, title: "", description: ""}, {src: img16, title: "", description: ""}]
  },
  {
    id: 11,
    text: "그리고 백일을 맞이했을 때, 자기한테 안 좋은 일이 있었는지 몰랐던 나는 사랑이 식은 줄만 알고 걱정했어…",
    images: [{src: img18, title: "", description: ""}]
  },
  {
    id: 12,
    text: "그러고 나 일본 갔다 와서 그 당일 내가 씅질 냈지만 맛있는 사케 먹고!! (또 먹고 싶어) 오랜만에 자길 봐서 너무 행복했어",
    images: [{src: img19, title: "", description: ""}]
  },
  {
    id: 13,
    text: "운동하는 자기 모습이 너무 귀여워서 사진에 넣었어. 요즘 도촬이 뜸하니까, 다시 찍어야겠다!",
    images: [{src: img20, title: "", description: ""}]
  },
  {
    id: 14,
    text: "이렇게 자기와 보낸 모든 순간이 내게는 너무 소중하고 값졌어.",
    images: [{src: img21, title: "2025.04.27", description: "동물원 데이트"},
         {src: img22, title: "2025.04.27", description: "동물원 데이트"},
          {src: img23, title: "2025.04.27", description: "나 다욧트한다고 자기랑 다이어트 도시락"},
           {src: img24, title: "2025.05.01", description: "비오는날 시내 뎃뚜"}, 
           {src: img25, title: "2024.05.05", description: "거제도 풀빌라 가는길"},
            {src: img26, title: "2024.05.05", description: "자기가 나 떠맥여 주는중 ㅎㅎ"},
             {src: img27, title: "2024.05.05", description: "떠먹여주는거 좋아서 찍어뒀어"},
              {src: img28, title: "2024.05.05", description: "하트 풍선으로 플러팅하는 태환"},
               {src: img29, title: "2024.05.05", description: "행복한 우리"},
                {src: img30, title: "2024.05.05", description: "포징하는 태환"},
                 {src: img31, title: "2024.05.05", description: "자쿠지에서 조식먹을때"},
                  {src: img32, title: "2024.05.05", description: "5,000원의 행복"},
                   {src: img33, title: "2024.05.05", description: "귀엽다(곰돌이가)"},
                    {src: img34, title: "2024.05.05", description: "도시락 싸주는 남자"},
                     {src: img35, title: "2024.05.05", description: "이별 위기 후 엽떡"}
                    ]   },
  
  
];



export default function ScrollSnapGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingDoneAt, setTypingDoneAt] = useState<number | null>(null);
    const [lightbox, setLightbox] = useState<ImageItem | null>(null);
  
    const scrollTo = useCallback((idx: number) => {
      const sec = containerRef.current?.children[idx] as HTMLElement | undefined;
      sec?.scrollIntoView({ behavior: 'smooth' });
    }, []);
  
    // 자동 스크롤
    useEffect(() => {
      if (typingDoneAt === currentIndex && currentIndex < items.length - 1) {
        const timer = setTimeout(() => scrollTo(currentIndex + 1), 2000);
        return () => clearTimeout(timer);
      }
    }, [typingDoneAt, currentIndex, scrollTo]);
  
    return (
      <Fragment>
        {/* 진행 상태 게이지 */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center space-x-2">
            {items.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[#987070] scale-125'
                    : idx < currentIndex
                    ? 'bg-[#C39898]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div
          ref={containerRef}
          className="h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory touch-pan-y -webkit-overflow-scrolling-touch"
        >
          {items.map((item, idx) => (
            <Section
              key={item.id}
              item={item}
              index={idx}
              lastIndex={items.length - 1}
              onInView={setCurrentIndex}
              onTypingComplete={setTypingDoneAt}
              openLightbox={setLightbox}
              navigate={navigate}
            />
          ))}
        </div>
  
        {lightbox && (
          <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50" onClick={() => setLightbox(null)}>
            <motion.img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-[90%] max-h-[80%] rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="mt-4 text-white text-center space-y-1">
              {lightbox.date && <div className="text-sm">{lightbox.date}</div>}
              {lightbox.title && <div className="font-semibold">{lightbox.title}</div>}
              {lightbox.description && <div className="text-sm">{lightbox.description}</div>}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
  
  type SectionProps = {
    item: Item;
    index: number;
    lastIndex: number;
    onInView: (i: number) => void;
    onTypingComplete: (i: number) => void;
    openLightbox: (img: ImageItem) => void;
    navigate: (path: string) => void;
  };
  
  function Section({ item, index, lastIndex, onInView, onTypingComplete, openLightbox, navigate }: SectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { margin: '-50% 0px -50% 0px' });
    const [displayText, setDisplayText] = useState('');
    const [typed, setTyped] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (inView) {
        onInView(index);
        if (!typed) {
          const chars = Array.from(item.text);
          let i = 0;
          const iv = setInterval(() => {
            setDisplayText(chars.slice(0, i + 1).join(''));
            i++;
            if (i === chars.length) {
              clearInterval(iv);
              setTyped(true);
              onTypingComplete(index);
            }
          }, 100);
          return () => clearInterval(iv);
        }
      }
    }, [inView, index, item.text, typed, onInView, onTypingComplete]);
  
    // 마지막 슬라이딩 자동 + 수동 스크롤
    useEffect(() => {
      if (index === lastIndex) {
        const el = carouselRef.current;
        let rafId: number;
        const speed = 0.5; // px/frame
        const step = () => {
          if (el) {
            el.scrollLeft += speed;
            if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
          }
          rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
      }
    }, [index, lastIndex]);
  
    const renderImages = () => {
      if (!item.images || item.images.length === 0) return null;
  
      // 마지막 섹션
      if (index === lastIndex) {
        return (
          <div ref={carouselRef} className="w-full flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4 py-2">
            {[...item.images, ...item.images].map((img, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center">
                <img src={img.src} alt={img.title} className="w-56 h-56 object-cover rounded-lg cursor-pointer" onClick={() => openLightbox(img)} />
                {img.date && <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="mt-1 text-sm">{img.date}</motion.div>}
                {img.title && <motion.div initial={{ scale:1 }} animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, duration:1.5 }} className="text-sm font-medium">{img.title}</motion.div>}
              </div>
            ))}
          </div>
        );
      }
  
      // 단일 이미지
      if (item.images.length === 1) {
        const img = item.images[0];
        return (
          <div className="flex flex-col items-center space-y-2">
            <img src={img.src} alt={img.title} className="w-56 h-56 object-cover rounded-lg cursor-pointer" onClick={() => openLightbox(img)} />
            {img.date && <div className="text-sm">{img.date}</div>}
            {img.title && <div className="text-sm font-medium">{img.title}</div>}
            {img.description && <div className="text-xs">{img.description}</div>}
          </div>
        );
      }
  
      // 다중 이미지 일반
      return (
        <div className="w-full flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4 py-2">
          {item.images.map((img, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center">
              <motion.img
                src={img.src}
                alt={img.title}
                className="w-56 h-56 object-cover rounded-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                onClick={() => openLightbox(img)}
              />
              {img.date && <div className="mt-1 text-sm">{img.date}</div>}
              {img.title && <div className="text-sm font-medium">{img.title}</div>}
            </div>
          ))}
        </div>
      );
    };
  
    return (
      <motion.section
        ref={ref}
        className="h-screen snap-start flex flex-col items-center justify-center p-4 space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-2xl font-bold text-center px-4">{displayText}</div>
        {renderImages()}
        {index === items.length - 1 && (
          <motion.button
            onClick={() => navigate('/timeline')}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-[#987070] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#C39898] transition-colors duration-300"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            우리의 타임라인 구경하기    
          </motion.button>
        )}
      </motion.section>
    );
  }
  