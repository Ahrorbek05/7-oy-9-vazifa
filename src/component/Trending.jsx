import React, { useState } from 'react';
import images from '../assets/search.svg'

function Trending() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { src: 'https://picsum.photos/700/300', alt: 'Movie 1', title: 'Beyond Earth', info: '2019 • Movie • PG' },
    { src: 'https://picsum.photos/700/300', alt: 'Movie 2', title: 'Beyond Earth', info: '2019 • Movie • PG' },
    { src: 'https://picsum.photos/700/300', alt: 'Movie 3', title: 'Beyond Earth', info: '2019 • Movie • PG' },
    { src: 'https://picsum.photos/700/300', alt: 'Movie 4', title: 'Beyond Earth', info: '2019 • Movie • PG' },
    { src: 'https://picsum.photos/700/300', alt: 'Movie 5', title: 'Beyond Earth', info: '2019 • Movie • PG' },
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsToShow = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - itemsToShow : prevIndex - itemsToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow >= filteredItems.length ? 0 : prevIndex + itemsToShow));
  };

  return (
    <div className='flex flex-col gap-6 pt-8 text-white ml-64'>
      <span className='flex gap-2'>
        <img className='-mt-4' src={images} alt="" />
        <input
        type='text'
        placeholder='Search for movies or TV series'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='mb-4 p-2 rounded-lg border w-72 border-gray-600 bg-gray-800 text-white'
      /></span>
      <h2 className='text-white font-small text-3xl'>Trending</h2>
      <div className="relative">
        <div className="container flex gap-4 mx-auto max-w-[1280px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {filteredItems.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
              <div key={index} className="w-[380px] h-[200px] bg-gray-800 rounded-xl overflow-hidden mr-4">
                <img src={item.src} className="w-full h-full object-cover opacity-70" alt={item.alt} />
                <div className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full">
                  <i className="fa-regular fa-bookmark text-white"></i>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">{item.info}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Trending;
