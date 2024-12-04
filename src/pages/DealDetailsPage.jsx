import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { getDealBySlug } from '../services/api';
import Header from '../components/layout/Header';
import Breadcrumb from '../components/navigation/Breadcrumb';
import { LocationIcon, ClockIcon } from '../components/icons/Icons';

function DealDetailsPage() {
  const { slug } = useParams();
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const fetchDealDetails = async () => {
      try {
        setLoading(true);
        const data = await getDealBySlug(slug);
        setDeal(data);
        setError(null);
      } catch (err) {
        setError('Failed to load deal details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDealDetails();
  }, [slug]);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Deals', path: '/deals' },
    { label: deal?.title || 'Loading...' }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (!deal) return null;

  const daysUntilExpiry = formatDistance(new Date(deal.end_date), new Date(), { addSuffix: true });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-96 mb-8">
          <img
            src={deal.logo}
            alt={deal.title}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080.png/00ff22?text=EV+Deal';
            }}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full">
              {deal.deal_type.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Title & Key Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-3xl font-bold mb-4">{deal.title}</h1>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-green-600">${deal.dealPrice}</span>
                  <span className="text-xl line-through text-gray-400">${deal.price}</span>
                </div>
                <div className="text-red-500 text-xl">
                  Save {deal.deal_discount_percentage}%
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <ClockIcon />
                  <span>Expires {daysUntilExpiry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationIcon />
                  <span>{deal.address}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Deal Description</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: deal.description }} />
            </div>

            {/* Terms & Conditions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => setShowTerms(!showTerms)}
              >
                <h2 className="text-2xl font-semibold">Terms & Conditions</h2>
                <span className="text-2xl">{showTerms ? '−' : '+'}</span>
              </button>
              {showTerms && (
                <div className="mt-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: deal.terms_conditions }} />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="space-y-4">
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                  Claim Deal
                </button>
                <a
                  href={deal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition text-center"
                >
                  Visit Deal Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealDetailsPage;