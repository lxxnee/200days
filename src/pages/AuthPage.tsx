import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [girlfriendName, setGirlfriendName] = useState('');
  const [girlfriendBirthday, setGirlfriendBirthday] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const correctName = '윤태환';
  const correctAge = '26';
  const correctGirlfriendName = '이서린';
  const correctGirlfriendBirthday = '0131';

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === correctName) {
      setError('');
      setTimeout(() => setStep(2), 500);
    } else {
      setError('접근이 허용된 사용자가 아닙니다');
    }
  };

  const handleAgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (age === correctAge) {
      setError('');
      setTimeout(() => setStep(3), 500);
    } else {
      setError('접근이 허용된 사용자가 아닙니다');
    }
  };

  const handleGirlfriendNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (girlfriendName === correctGirlfriendName) {
      setError('');
      setTimeout(() => setStep(4), 500);
    } else {
      setError('접근이 허용된 사용자가 아닙니다');
    }
  };

  const handleGirlfriendBirthdaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (girlfriendBirthday === correctGirlfriendBirthday) {
      navigate('/heart');
    } else {
      setError('접근이 허용된 사용자가 아닙니다');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1E5D1] p-4">
      <motion.div
        className="w-full max-w-sm bg-[#DBB5B5] p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[#987070] text-center mb-4 text-sm"
          >
            {error}
          </motion.p>
        )}

        <AnimatePresence initial={false} mode="wait">
          {step === 1 ? (
            <motion.form
              key="name-form"
              onSubmit={handleNameSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-[#987070] text-center">
                당신의 이름은 무엇인가요?
              </h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full border border-[#C39898] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#C39898] transition"
              />
              <button
                type="submit"
                className="w-full bg-[#987070] text-white py-2 rounded-md hover:bg-[#C39898] transition"
              >
                다음
              </button>
            </motion.form>
          ) : step === 2 ? (
            <motion.form
              key="age-form"
              onSubmit={handleAgeSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-[#987070] text-center">
                몇 살인가요?
              </h2>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="나이를 입력하세요"
                className="w-full border border-[#C39898] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#C39898] transition"
              />
              <button
                type="submit"
                className="w-full bg-[#987070] text-white py-2 rounded-md hover:bg-[#C39898] transition"
              >
                다음
              </button>
            </motion.form>
          ) : step === 3 ? (
            <motion.form
              key="girlfriend-name-form"
              onSubmit={handleGirlfriendNameSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-[#987070] text-center">
                여자친구의 이름은 무엇인가요?
              </h2>
              <input
                type="text"
                value={girlfriendName}
                onChange={(e) => setGirlfriendName(e.target.value)}
                placeholder="여자친구의 이름을 입력하세요"
                className="w-full border border-[#C39898] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#C39898] transition"
              />
              <button
                type="submit"
                className="w-full bg-[#987070] text-white py-2 rounded-md hover:bg-[#C39898] transition"
              >
                다음
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="girlfriend-birthday-form"
              onSubmit={handleGirlfriendBirthdaySubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-[#987070] text-center">
                여자친구의 생일은 언제인가요?
              </h2>
              <input
                type="text"
                value={girlfriendBirthday}
                onChange={(e) => setGirlfriendBirthday(e.target.value)}
                placeholder="생일을 입력하세요 (예: 0104)"
                className="w-full border border-[#C39898] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#C39898] transition"
              />
              <button
                type="submit"
                className="w-full bg-[#987070] text-white py-2 rounded-md hover:bg-[#C39898] transition"
              >
                확인
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthPage;