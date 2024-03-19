import React, { useState } from 'react';
import { emailList } from '../lib/emailExtractor';
import { Button } from '@material-ui/core';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const Export = () => {
  const [exportFormat, setExportFormat] = useState('csv');

  const handleExport = () => {
    let data, filename, type;
    switch (exportFormat) {
      case 'csv':
        data = new Blob([emailList.join('\n')], { type: 'text/csv' });
        filename = 'emails.csv';
        break;
      case 'xlsx':
        const ws = XLSX.utils.aoa_to_sheet([emailList]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Emails');
        data = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        filename = 'emails.xlsx';
        break;
      default:
        return;
    }
    saveAs(data, filename);
  };

  return (
    <div>
      <select value={exportFormat} onChange={(e) => setExportFormat(e.target.value)}>
        <option value="csv">CSV</option>
        <option value="xlsx">Excel</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleExport} id="exportButton">
        Export
      </Button>
    </div>
  );
};

export default Export;