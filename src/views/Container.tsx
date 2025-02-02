import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container as ContainerModel } from '@models';
import { container as containerApi } from '@api';
const Container = () => {
  const [container, setContainer] = useState<ContainerModel>();
  const { containerId } = useParams();
  useEffect(() => {
    if (containerId) {
      containerApi.getContainer(containerId).then((ret) => setContainer(ret));
    }
  }, [containerId]);
  return (
    <div>
      <span>Container {container?.name}</span>
    </div>
  );
};
export default Container;
