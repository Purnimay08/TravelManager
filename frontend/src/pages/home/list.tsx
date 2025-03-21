import {FC} from 'react';
import {usePlaces} from '../../utils/service';
import Loader from '../../components/loader';
import Error from '../../components/error';
import Card from '../../components/card';
import {useSearchParams} from 'react-router-dom';

const List: FC = () => {
  const [searchParams] = useSearchParams();
  // ! convert search params to an object
  const paramsObj = Object.fromEntries(searchParams.entries());

  const {data, isLoading, error, refetch} = usePlaces(paramsObj);

  if (isLoading) return <Loader />;

  if (error) return <Error message={error.message} onRetry={refetch} />;

  return (
    <div className=" mt-10">
      <h1 className="text-3xl font-bold">Explore locations around You</h1>

      <div className="grid gap-5 mt-5">
        {data?.map(place => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default List;
