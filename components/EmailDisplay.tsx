import React, { useEffect, useState } from 'react';

interface Email {
  address: string;
  source: string;
}

interface EmailDisplayProps {
  emailList: Email[];
}

const EmailDisplay: React.FC<EmailDisplayProps> = ({ emailList }) => {
  const [displayList, setDisplayList] = useState<Email[]>([]);

  useEffect(() => {
    setDisplayList(emailList);
  }, [emailList]);

  return (
    <div id="emailDisplay">
      <h2>Extracted Emails</h2>
      <table>
        <thead>
          <tr>
            <th>Email Address</th>
            <th>Source Page</th>
          </tr>
        </thead>
        <tbody>
          {displayList.map((email, index) => (
            <tr key={index}>
              <td>{email.address}</td>
              <td>{email.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailDisplay;