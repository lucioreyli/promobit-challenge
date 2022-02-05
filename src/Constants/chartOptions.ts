import { colors } from "~/Styles/colors";

export const chartOptions = {
  grid: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }
   },
  chart: {
    parentHeightOffset: 0,
    toolbar: {
      show: false
    },
  },
  plotOptions: {
    radialBar: {
      offsetX: 0,
      offsetY: 0,
      hollow: {
        size: "65%",
        background: colors.chartBackground,
        margin: 0,
        padding: 0,
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
      },
      track: {
        show: true,
        background: colors.chartBackground,
        margin: 0,
        padding: 0,
      },
      
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: 'clamp(1em, 5em, 2.7vh)',
          color: colors.chartTrack,
          offsetY: 5,
          formatter: (val: any) =>  val + "%"
        },
        total: {
          show: false,
        }
      }, 
    },
  },
  stroke: {
    lineCap: "round"
  },
  fill: {
    type: 'solid',
    colors: colors.chartTrack
  },
}