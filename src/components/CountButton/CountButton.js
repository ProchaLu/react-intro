import './CountButton.css';
import { useEffect, useState } from 'react';

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };

  const buttonColor = {
    backgroundColor: props.buttonColor,
  };

  useEffect(() => {
    if (currentCount > 20) {
      alert('the count is more than 20');
      setCurrentCount(0);
    }
  }, [currentCount]);

  return (
    <div>
      <button onClick={handleClick} style={buttonColor}>
        +{props.incrementBy}
      </button>
      <div className="count-display">{currentCount}</div>
    </div>
  );
};

export default CountButton;
