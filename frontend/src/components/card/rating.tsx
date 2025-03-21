import {FC} from 'react';

interface Props {
  rating: number;
  expanded?: boolean;
}

const Rating: FC<Props> = ({rating, expanded = false}) => {
  // determine color
  const color =
    rating >= 4.7
      ? 'bg-blue-500'
      : rating >= 4
      ? 'bg-green-500'
      : rating >= 3
      ? 'bg-yellow-500'
      : 'bg-red-500';

  // determine text
  const text =
    rating >= 4.7
      ? 'Outstanding'
      : rating >= 4
      ? 'Great'
      : rating >= 3
      ? 'Good'
      : rating >= 2
      ? 'Poor'
      : 'Not Worth It';

  return (
    <div>
      <span className={`${color} text-white p-2 rounded-lg font-bold w-fit`}>
        {rating}
      </span>

      {expanded && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
