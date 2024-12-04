import React from 'react';
import Header from '../components/layout/Header';
import CarGrid from '../components/cars/CarGrid';
import Pagination from '../components/pagination/Pagination';
import Breadcrumb from '../components/navigation/Breadcrumb';
import { useCars } from '../hooks/useCars';

function CarsPage() {
  const {
    cars,
    currentPage,
    totalPages,
    loading,
    error,
    handlePageChange
  } = useCars();

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Cars' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Available Electric Vehicles</h1>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <>
            <CarGrid cars={cars} />
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

export default CarsPage;