import {useMutation, useQuery} from '@tanstack/react-query';
import {Place, PlaceData, PlaceResponse, PlacesResponse} from '../types';
import api from './api';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

/* 
! Important
 * We provide the useQuery hook with the name of the API request and the function that makes the request.
 * useQuery makes the API request for us and manages the state of the process.
 * It keeps states like isLoading, error, data for us.
 * If an error occurs, it makes 3 more requests to the same address to ensure it's not a temporary error.
 * If data is received, it caches the response.
 * If multiple components need the same data, you can make the API request in all components without needing a state management library; only the first request goes to the API, others use the cached response.
 */
export const usePlaces = (paramsObj?: any) => {
  return useQuery({
    // unique name for the query
    queryKey: ['places', paramsObj],
    // function that makes the API request
    queryFn: () =>
      api
        .get<PlacesResponse>('/places', {params: paramsObj})
        .then(res => res.data.places),
    // if an error occurs, it makes 3 more requests to the same address to ensure it's not a temporary error
    retry: 3,
    // wait 1 second between each request
    retryDelay: 1000,
    // stale time: the duration the data in the cache remains "fresh/valid"
    staleTime: 0,
    // the duration the data in the cache remains "stale/cleaned" - garbage collection
    gcTime: 300000,
  });
};

export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    // mutation key
    mutationKey: ['create'],
    // function that makes the API request
    mutationFn: (body: PlaceData) => api.post('/places', body),
    // when the request is successful
    onSuccess: res => {
      toast.success('Accommodation point created');
      navigate(`/`);
    },
    // when the request fails
    onError: error => {
      toast.error('An error occurred');
    },
  });
};

export const usePlace = (id: string) => {
  return useQuery({
    queryKey: ['place'],
    queryFn: () =>
      api.get<PlaceResponse>(`/place/${id}`).then(res => res.data.place),
  });
};

export const useRemovePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['remove'],

    mutationFn: (id: number) => api.delete(`/place/${id}`),

    onSuccess: () => {
      toast.success('Accommodation point removed');
      navigate('/');
    },

    onError: () => {
      toast.error('An error occurred');
    },
  });
};
