import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterComparison = ({ beforeImage, afterImage, className = "" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none ${className}`}
      style={{ aspectRatio: '4/3' }}
    >
      {/* Imagem "Depois" (fundo) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="Depois"
          className="object-cover w-full h-full"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          Depois
        </div>
      </div>

      {/* Imagem "Antes" (overlay com clip) */}
      <div 
        className="absolute inset-0"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        <img
          src={beforeImage}
          alt="Antes"
          className="object-cover w-full h-full"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          Antes
        </div>
      </div>

      {/* Linha divisória e controle deslizante */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Círculo de controle */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-4 border-blue-600 cursor-ew-resize flex items-center justify-center hover:scale-110 transition-transform duration-200"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Ícone de setas */}
          <div className="flex space-x-1">
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
            <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Overlay para capturar eventos de mouse em toda a área */}
      {isDragging && (
        <div className="absolute inset-0 cursor-ew-resize" />
      )}
    </div>
  );
};

export default BeforeAfterComparison;

