import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import UserAuth from '../components/UserAuth';
import EmailDisplay from '../components/EmailDisplay';
import AdvancedSearch from '../components/AdvancedSearch';
import ResultsFilter from '../components/ResultsFilter';
import Export from '../components/Export';
import Alerts from '../components/Alerts';

const Dashboard: NextPage = () => {
  const [user, setUser] = useState(null);
  const [emailList, setEmailList] = useState([]);
  const [searchSettings, setSearchSettings] = useState({});

  useEffect(() => {
    // Fetch user data and set state
    // Fetch email list and set state
    // Fetch search settings and set state
  }, []);

  return (
    <div id="dashboard">
      <UserAuth user={user} setUser={setUser} />
      <div id="domainInput">
        <AdvancedSearch settings={searchSettings} updateSettings={setSearchSettings} />
      </div>
      <div id="emailDisplay">
        <EmailDisplay emails={emailList} />
      </div>
      <div id="resultsFilter">
        <ResultsFilter emails={emailList} updateEmails={setEmailList} />
      </div>
      <div id="exportButton">
        <Export emails={emailList} />
      </div>
      <div id="alerts">
        <Alerts user={user} />
      </div>
    </div>
  );
};

export default Dashboard;