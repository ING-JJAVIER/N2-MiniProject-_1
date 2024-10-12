import { useState } from 'react';
import Header from "./components/Header";
import SearchModal from "./components/SearchModal";
import CardContainer from './components/CardContainer';
import State from "./Customhook/State";

export default function App() {
  const [modal, setModal] = useState(false);
  const [dataCards, setDataCards] = useState([]);
  const [filData, setFilData] = useState([]);

  const modalOpen = () => {
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  return (
    <>
      <State setDataCards={setDataCards} />
      <div className="flex justify-center m-auto relative ">
        <div className="w-full justify-center flex absolute bg-white">
          {modal && (
            <SearchModal modalClose={modalClose} dataCards={dataCards} setFilData={setFilData} />
          )}
        </div>
       
      </div>
      <div className="w-11/12 m-auto mt-3">
        <Header modalOpen={modalOpen} />
        <header className='flex justify-between items-end my-6'>
          <h2 className='font-bold text-lg'>Stays in Finland</h2>
          <h3 className='text-sm font-semibold'>12+ stays</h3>
        </header>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5'>
          {filData.length > 0 ? filData.map((dataCard, index) => (
            <CardContainer key={index} dataCards={[dataCard]} />
          )) : dataCards.map((dataCard, index) => (
            <CardContainer key={index} dataCards={[dataCard]} />
          ))}
        </div>
      </div>
    </>
  )
}
