import axios from 'axios';
import { API_BASE_URL, API_HEADERS } from '../config/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: API_HEADERS
});

export const getDeals = async (page = 1, perPage = 10) => {
  try {
    const response = await api.get(`/deals`, {
      params: { page, per_page: perPage }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch deals');
  }
};

export const getDealBySlug = async (slug) => {
  try {
    const response = await api.get(`/deals/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch deal details');
  }
};

export const getCars = async (page = 1, perPage = 10) => {
  try {
    const response = await api.get(`/car-listing`, {
      params: { page, per_page: perPage }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch cars');
  }
};

export const getCarBySlug = async (slug) => {
  try {
    const response = await api.get(`/car-listing/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch car details');
  }
};

export default api;