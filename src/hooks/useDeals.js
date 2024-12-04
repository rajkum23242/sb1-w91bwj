import { useState, useEffect } from 'react';
import { getDeals } from '../services/api';
import { ITEMS_PER_PAGE } from '../config/constants';

export const useDeals = () => {
  const [deals, setDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const response = await getDeals(currentPage, ITEMS_PER_PAGE);
        setDeals(response.data);
        setTotalPages(response.last_page);
        setError(null);
      } catch (err) {
        setError('Failed to load deals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    deals,
    currentPage,
    totalPages,
    loading,
    error,
    handlePageChange
  };
};