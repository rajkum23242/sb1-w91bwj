import { useState, useEffect } from 'react';
import { getCars } from '../services/api';
import { ITEMS_PER_PAGE } from '../config/constants';

export const useCars = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await getCars(currentPage, ITEMS_PER_PAGE);
        setCars(response.data);
        setTotalPages(response.last_page);
        setError(null);
      } catch (err) {
        setError('Failed to load cars. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    cars,
    currentPage,
    totalPages,
    loading,
    error,
    handlePageChange
  };
};