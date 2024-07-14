import React, { useState } from 'react';
import { Button } from 'antd';
import TableComponent from '../components/TableComponent';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';
import Page5 from '../pages/page5';

function App() {
  const [currentPage, setCurrentPage] = useState('page1'); // Default page is 'page1'

  const getPageContent = () => {
    switch (currentPage) {
      case 'page1':
        return (
          <TableComponent
            columns={Page1.columns}
            data={Page1.data}
            addStudent={Page1.addStudent}
            editStudent={Page1.editStudent}
            deleteStudent={Page1.deleteStudent}
          />
        );
      case 'page2':
        return (
          <TableComponent
            columns={Page2.columns}
            data={Page2.data}
            addStudent={Page2.addStudent}
            editStudent={Page2.editStudent}
            deleteStudent={Page2.deleteStudent}
          />
        );
      case 'page3':
        return (
          <TableComponent
            columns={Page3.columns}
            data={Page3.data}
            addStudent={Page3.addStudent}
            editStudent={Page3.editStudent}
            deleteStudent={Page3.deleteStudent}
          />
        );
      case 'page4':
        return (
          <TableComponent
            columns={Page4.columns}
            data={Page4.data}
            addStudent={Page4.addStudent}
            editStudent={Page4.editStudent}
            deleteStudent={Page4.deleteStudent}
          />
        );
      case 'page5':
        return (
          <TableComponent
            columns={Page5.columns}
            data={Page5.data}
            addStudent={Page5.addStudent}
            editStudent={Page5.editStudent}
            deleteStudent={Page5.deleteStudent}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Buttons to switch between pages */}
        <Button onClick={() => setCurrentPage('page1')}>Page 1</Button>
        <Button onClick={() => setCurrentPage('page2')}>Page 2</Button>
        <Button onClick={() => setCurrentPage('page3')}>Page 3</Button>
        <Button onClick={() => setCurrentPage('page4')}>Page 4</Button>
        <Button onClick={() => setCurrentPage('page5')}>Page 5</Button>

        {/* Render the table based on the selected page */}
        {getPageContent()}
      </header>
    </div>
  );
}

export default App;
