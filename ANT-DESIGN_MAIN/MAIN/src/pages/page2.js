import React, { useState } from 'react';
import { Button, Table, Select, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const generateRandomMember = (index) => {
  
  const tagsPattern = ['nice', 'cool', 'good', 'developer', 'loser'];
  const patternIndex = index % tagsPattern.length;
  const tags = tagsPattern[patternIndex];

 const namess = [
  {name:'ramya', age: 20, address:'ynm'}
 ]

  
  return {
    
    name: namess[0][0],
    age: Math.floor(Math.random() * (25 - 18 + 1)) + 18,
    address: `Address ${index + 1}`,
    gender: 'Male',
    tags: [tags],
  };
};


const generateMembersData = () => {
  return Array.from({ length: 50 }, (_, index) => generateRandomMember(index));
};

const App = () => {
  const [data, setData] = useState(generateMembersData());

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="/some-page">{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender, record) => (
        <Select
          value={gender}
          onChange={(value) => handleGenderChange(value, record.key)}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Other">Other</Option>
        </Select>
      ),
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            switch (tag) {
              case 'cool':
                color = 'green';
                break;
              case 'good':
                color = 'yellow';
                break;
              case 'developer':
                color = 'purple';
                break;
              default:
                color = tag === 'loser' ? 'volcano' : 'blue';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const handleGenderChange = (value, key) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, gender: value } : item
      )
    );
  };

  const handleAddMember = () => {
    const newMember = generateRandomMember(data.length);
    setData((prevData) => [...prevData, newMember]);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAddMember}
        style={{ marginBottom: 16 }}
      >
        Add Member
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default App;
