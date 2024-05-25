import React, { lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import instruments from './Instruments';
import '../styles/InstrumentPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const InstrumentPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const instrument = instruments.find((item) => item.pageName === name);

  if (!instrument) return <div>Інструмент не знайдено</div>;

  // Динамічний імпорт сторінки з інструментом за допомогою React.lazy() та import()
  const InstrumentComponent = lazy(() => import(`./${instrument.pageName}`));

  return (
    <div className='instrument-page'>
      <div className='instr-header'>
      <Link to="/start" className="back-button"><FontAwesomeIcon icon={faChevronLeft} className ="icon"/></Link></div>
      {/* Використання Suspense для відображення лоадера під час завантаження компонента */}
      <Suspense fallback={<div>Loading...</div>}>
        <InstrumentComponent />
      </Suspense>
    </div>
  );
};

export default InstrumentPage;
