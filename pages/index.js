import BaseLayout from "@/components/layouts/BaseLayout";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <BaseLayout>
    <Container>
      <h1>home page</h1>
      <Button color="danger">
        save
      </Button>
    </Container>
      
    </BaseLayout>
  );
};
export default Home;
