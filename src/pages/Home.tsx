import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { BarChart } from "@mui/x-charts/BarChart";
import styled from "@emotion/styled";

const Home = () => {
  const Styledtext = styled.p`
    color: red;
  `;

  return (
    <>
      <h3>Sample MUI Components</h3>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "500px",
        }}
      >
        <Styledtext>sample styled with @emotion</Styledtext>
        <Button variant="contained">Sample Button</Button>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </div>
    </>
  );
};

export default Home;
