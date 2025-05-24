import { useNavigate } from 'react-router-dom';

export default function Heart() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chest');
  };

  return (
    <div className="heart-container" onClick={handleClick}>
      <div className="heart"></div>
    </div>
  );
}