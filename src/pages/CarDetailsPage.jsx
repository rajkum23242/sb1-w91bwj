import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarBySlug } from '../services/api';
import Header from '../components/layout/Header';
import Breadcrumb from '../components/navigation/Breadcrumb';
import { LocationIcon, PhoneIcon, EmailIcon } from '../components/icons/Icons';

function CarDetailsPage() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const data = await getCarBySlug(slug);
        setCar(data);
        setError(null);
      } catch (err) {
        setError('Failed to load car details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [slug]);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Cars', path: '/cars' },
    { label: car?.title || 'Loading...' }
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

  if (!car) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="relative h-96 mb-4">
            <img
              src={car.images[activeImage] || car.image}
              alt={car.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {car.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative h-20 ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
              >
                <img
                  src={image}
                  alt={`${car.title} - View ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Car Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-3xl font-bold mb-4">{car.title}</h1>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-2xl font-bold text-blue-600">${car.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-semibold">{car.condition}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <span className="text-gray-600">Year:</span>
                  <span className="ml-2 font-semibold">{car.year}</span>
                </div>
                <div>
                  <span className="text-gray-600">Mileage:</span>
                  <span className="ml-2 font-semibold">{car.mileage} {car.mileage_unit}</span>
                </div>
                <div>
                  <span className="text-gray-600">Transmission:</span>
                  <span className="ml-2 font-semibold">{car.vehicle_transmission}</span>
                </div>
                <div>
                  <span className="text-gray-600">Fuel Type:</span>
                  <span className="ml-2 font-semibold">{car.fuel_type}</span>
                </div>
                <div>
                  <span className="text-gray-600">Drive Type:</span>
                  <span className="ml-2 font-semibold">{car.drive_type}</span>
                </div>
                <div>
                  <span className="text-gray-600">Color:</span>
                  <span className="ml-2 font-semibold">{car.color_name.name}</span>
                </div>
              </div>

              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: car.description }} />
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {car.car_features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Safety Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {car.car_safety_features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dealer Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4">Dealer Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-gray-100 rounded-full">
                    <LocationIcon />
                  </span>
                  <div>
                    <p className="font-semibold">{car.dealer.name}</p>
                    <p className="text-gray-600">{car.dealer.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-gray-100 rounded-full">
                    <PhoneIcon />
                  </span>
                  <p>{car.dealer.phone}</p>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition mb-2">
                  Contact Dealer
                </button>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
                  Schedule Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;