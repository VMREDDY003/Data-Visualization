import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import randomUsernameGenerator from 'random-username-generator';

const Highlighter = ({ searchWords, textToHighlight }) => {
  // ... Highlighter component implementation
};

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    // Generate 50 random students when the component mounts
    // const generatedStudents = Array.from({ length: 50 }, (_, index) => {
    //   const username = randomUsernameGenerator.generate();
    //   sessionStorage.setItem('username', username);

    //   const address1 = ['HYD','BLORE','MUMBAI','CHENNAI','PONDY','VZG','KASHMIR','RJY','PANAJI','SHIMLA']
    //   const patternIndex = index % address1.length;
    //   const adds = address1[patternIndex];
      
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      }]
    const gen = Array.from ({lenght: 50},(_, index) => {
const data = [ { key: '11', name: 'John Doe', age: 25, address: '123 Main St', email: 'johndoe@gmail.com' },
{ key: '2', name: 'Jane Smith', age: 30, address: '456 Park Ave', email: 'janesmith@gmail.com' }]

const namei = index % 5;
const names = data[namei];

const agei = index % 5;
const ages = data[agei];

const emaili = index % 5;
const emails = data[emaili];

const addressi = index % 5;
const addresses = data[addressi];

      return {
        key: index + 1,
        name: names,
        age : ages,
        address : addresses,
        email: emails,
      };
    });
    

    setDataSource(gen);
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            // Assign the input reference to the searchInput variable
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8, background: '#1890ff' }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter searchWords={[searchText]} textToHighlight={text.toString()} />
      ) : (
        text
      ),
  });

  const handleSearch = (confirm, dataIndex) => {
    confirm();
    setSearchText('');
    setSearchedColumn('');
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      key: 'key',
      title: 'ID',
      dataIndex: 'keys',
      ...getColumnSearchProps(''),
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address',
      ...getColumnSearchProps('address'),
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (record) => (
        <>
          <EditOutlined onClick={() => onEditStudent(record)} style={{ color: 'blue' }} />
          <DeleteOutlined
            onClick={() => onDeleteStudent(record)}
            style={{ color: 'red', marginLeft: 12 }}
          />
        </>
      ),
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: randomUsernameGenerator.generate(),
      email: `${randomNumber}@gmail.com`,
      address: `Address ${randomNumber}`,
    };
    setDataSource((pre) => [...pre, newStudent]);
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this student record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setDataSource((pre) => pre.filter((student) => student.id !== record.id));
      },
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  let searchInput; // Define searchInput variable

  return (
    <div className="App" style={{ padding: '20px' }}>
      <header className="App-header">
        <Button onClick={onAddStudent} style={{ background: 'pink', color: '#fff' }}>
          Add a new Student
        </Button>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          className="App-table"
          onChange={() => setSearchedColumn('')}
        />
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => setIsEditing(false)}
          onOk={() => setIsEditing(false)}
          className="App-modal"
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => setEditingStudent((pre) => ({ ...pre, name: e.target.value }))}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => setEditingStudent((pre) => ({ ...pre, email: e.target.value }))}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => setEditingStudent((pre) => ({ ...pre, address: e.target.value }))}
          />
        </Modal>
      </header>
    </div>
  );
}

export default App;
