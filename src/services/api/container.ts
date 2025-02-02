import { Container } from '@/models/container';
import { instance as axios } from '.';
const contextPath = 'container';
const container = {
  getContainer(id: string): Promise<Container> {
    return axios.get(`${import.meta.env.VITE_API_URL}/${contextPath}/${id}`).then((res) => res.data);
  },
  getAllContainers(): Promise<Container[]> {
    return axios.get(`${import.meta.env.VITE_API_URL}/${contextPath}`).then((res) => res.data);
  },
};
export default container;
