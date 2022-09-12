import Button from "../components/shared/Button";

const Home = () => {
  return (
    <div>
      <Button onClick={() => alert("Welcome")}>Hello</Button>
    </div>
  );
};

export default Home;
