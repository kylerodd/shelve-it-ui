import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { container as containerApi } from '@api';
import { Container as ContainerModel } from '@models';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [containers, setContainers] = useState<ContainerModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    containerApi.getAllContainers().then((res) => setContainers(res));
  }, []);

  const onItemClick = (container: ContainerModel) => {
    navigate(`/container/${container.id}`);
  };
  return (
    <div>
      <List sx={{ backgroundColor: 'gray' }}>
        {containers.map((container) => (
          <ListItem key={container.id}>
            <ListItemButton onClick={() => onItemClick(container)}>
              <ListItemText primary={container.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Home;
