import { Container, FlexboxGrid } from "rsuite";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={16}>
        <Navbar />
        <Container className="Content-Container">
          <Outlet />
        </Container>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={4}></FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default MainLayout;
