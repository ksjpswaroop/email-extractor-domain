import { NextPage } from 'next';
import { HelpSupport } from '../components/HelpSupport';

const HelpPage: NextPage = () => {
  return (
    <div id="help">
      <HelpSupport />
    </div>
  );
};

export default HelpPage;