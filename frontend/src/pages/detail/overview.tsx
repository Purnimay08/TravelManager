import {FC} from 'react';
import {Place} from '../../types';

interface Props {
  place: Place;
}

const Overview: FC<Props> = ({place}) => {
  return (
    <div>
      <div className="border-b border-zinc-300 pb-2 flex gap-6 text-zinc-500">
        <span className="cursor-pointer text-blue-500">Overview</span>
        <span className="cursor-pointer">Rooms</span>
        <span className="cursor-pointer">Features</span>
        <span className="cursor-pointer">Rules</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        <div>
          <h1 className="text-xl font-semibold mb-2">Features</h1>

          <div className="grid grid-cols-2 gap-5">
            {place.amenities.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="border border-gray-300 rounded-md p-2 line-clamp-1">
                {item}
              </span>
            ))}
          </div>
        </div>

        <iframe
          src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBsIeyT619QHjkdSUcn_A0c1Bqy0X8yn8s&q=${place.location}`}
          className="w-full h-full rounded-md lg:max-h-[250px]"
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Overview;
