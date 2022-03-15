import React from 'react';
import Message from '@components/Footer/message';
import SFFormat from '@components/Footer/sfFormat';

const PetitionFooter = ({ locale }) => {
  return (
    <>
      <Message locale={locale} />
      <SFFormat locale={locale} />
    </>
  );
};

export default PetitionFooter;
