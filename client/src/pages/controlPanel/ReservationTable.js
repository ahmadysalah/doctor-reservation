import React from 'react';
import { Table, Input, Button, Space, message } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import logic from './logic';

const { deleteReserve } = logic;
const key = 'updatable';

class ReservationTable extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    data: '',
  };

  componentDidMount = () => {
    const { getData } = this.props;
    getData().then((data) => this.setState({ data }));
  };

  openMessage = (msg) => {
    const { getData } = this.props;
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: msg, key, duration: 2 });
      getData().then((data) => this.setState({ data }));
    }, 1000);
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const { data } = this.state;
    const columns = [
      {
        title: 'patientName',
        dataIndex: 'patientName',
        key: 'patientName',
        width: '20%',
        ...this.getColumnSearchProps('patientName'),
      },
      {
        title: 'patientGender',
        dataIndex: 'patientGender',
        key: 'patientGender',
        width: '10%',
        ...this.getColumnSearchProps('patientGender'),
      },
      {
        title: 'clinic',
        dataIndex: 'clinic',
        key: 'clinic',
        ...this.getColumnSearchProps('clinic'),
      },
      {
        title: 'doctorName',
        dataIndex: 'doctorName',
        key: 'doctorName',
        ...this.getColumnSearchProps('doctorName'),
      },
      {
        title: 'appointmentDate',
        dataIndex: 'appointmentDate',
        key: 'appointmentDate',
        ...this.getColumnSearchProps('appointmentDate'),
      },
      {
        title: 'appointmentTime',
        dataIndex: 'appointmentTime',
        key: 'appointmentTime',
        ...this.getColumnSearchProps('appointmentTime'),
      },
      {
        title: 'Action',
        fixed: 'right',
        width: 100,
        render: (key) => (
          <Button onClick={() => deleteReserve(key._id).then(this.openMessage)}>
            Delete
          </Button>
        ),
      },
    ];
    return <>{data && <Table columns={columns} dataSource={data} />}</>;
  }
}

export default ReservationTable;
