import axios from 'axios';

const logic = {
  allReservation: async () => {
    try {
      const { data } = await axios.get('/api/v1/appointments');
      return data.appointmentsData.reverse();
    } catch (e) {
      return 'No Data';
    }
  },
  allDoctors: async () => {
    try {
      return (await axios.get(`/api/v1/doctors`)).data.map(
        ({ fullName }) => fullName
      );
    } catch (e) {
      return 'No Data';
    }
  },
  deleteReserve: async (id) => {
    try {
      const { data } = await axios.delete(`/api/v1/appointments/${id}`);
      return data.message;
    } catch (e) {
      return 'Sorry Check your data';
    }
  },
};

export default logic;
