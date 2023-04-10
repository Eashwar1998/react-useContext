import React, { useContext } from 'react';
import LevelContext from './LevelContext';

const Section = ({ children }) => {
  const level = useContext(LevelContext);
  return (
    <LevelContext.Provider value={level + 1}>
      <div>{children}</div>
    </LevelContext.Provider>
  );
};

export default Section;
