import { Container, Label } from "./styles"
import Chart from "react-apexcharts";
import { chartOptions } from "~/Constants/chartOptions";

type Props = { 
  value: number 
}

export const Graph: React.FC<Props> = ({value}) => {

  const options = chartOptions

  return(
    <Container>
      <Chart
        //@ts-ignore
        options={options}
        series={[value]}
        width={100}
        padding={0}
        type={'radialBar'}
      />
      <Label>
        Avaliação dos<br/>
        usuários
      </Label>
    </Container>
  )
}