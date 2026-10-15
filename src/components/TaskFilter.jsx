import React, { useState, useRef, useEffect } from 'react';

const TaskFilter = ({ selectedFilter, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { id: 'all', label: 'Все' },
    { id: 'active', label: 'Активные' },
    { id: 'completed', label: 'Выполненные' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    onFilterChange(id);
    setIsOpen(false);
  };

  const currentLabel = options.find((opt) => opt.id === selectedFilter)?.label || 'Все';

  return (
    <div style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }} ref={dropdownRef}>
      {/* Кнопка «Фильтры» */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          color: '#333',
          minWidth: '140px'
        }}
      >
        <span>Фильтры: {currentLabel}</span>
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
          ▼
        </span>
      </button>

      {/* Выпадающий список */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: '4px',
            width: '100%',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 100,
            overflow: 'hidden'
          }}
        >
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '10px 16px',
                fontSize: '14px',
                border: 'none',
                backgroundColor: selectedFilter === option.id ? '#eff6ff' : '#fff',
                color: selectedFilter === option.id ? '#2563eb' : '#333',
                fontWeight: selectedFilter === option.id ? 'bold' : 'normal',
                cursor: 'pointer'
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskFilter;