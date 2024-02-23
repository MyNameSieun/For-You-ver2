import { createContext, useState } from 'react';

export const ActiveTabContext = createContext(null);

function ActiveTabContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState('토토로');
  return <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>{children}</ActiveTabContext.Provider>;
}

export default ActiveTabContextProvider;
