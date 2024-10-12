import React from 'react';
import CardItem from './CardItem';

export default function CardContainer({ dataCards }) {

  return (
    <>
      <main className='mt-5'>
        <section>
          {dataCards.map((item, index) => (
            <CardItem key={index} dataCard={item} />
          ))}
        </section>
      </main>
    </>
  );
}
