import React from 'react';
import Head from 'next/head';
import UserAuth from '../components/UserAuth';
import DomainInput from '../components/DomainInput';
import AdvancedSearch from '../components/AdvancedSearch';
import EmailDisplay from '../components/EmailDisplay';
import ResultsFilter from '../components/ResultsFilter';
import Export from '../components/Export';
import Alerts from '../components/Alerts';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Email Extraction Tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UserAuth />
        <DomainInput />
        <AdvancedSearch />
        <EmailDisplay />
        <ResultsFilter />
        <Export />
        <Alerts />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Email Extraction Tool. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;