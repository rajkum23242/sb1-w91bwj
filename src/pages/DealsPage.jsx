import React from 'react';
import Header from '../components/layout/Header';
import DealGrid from '../components/deals/DealGrid';
import Pagination from '../components/pagination/Pagination';
import Breadcrumb from '../components/navigation/Breadcrumb';
import { useDeals } from '../hooks/useDeals';

function DealsPage() {
  const {
    deals,
    currentPage,
    totalPages,
    loading,
    error,
    handlePageChange
  } = useDeals();

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Deals' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Latest EV Deals</h1>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <>
            <DealGrid deals={deals} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default DealsPage;