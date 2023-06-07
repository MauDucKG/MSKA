import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "echarts-wordcloud";


const WordCloudChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: {},
      series: [
        {
          type: "wordCloud",
          gridSize: 2,
          sizeRange: [10, 50],
          rotationRange: [0, 0],
          shape: "apple",
          width: 1000,
          height: 400,
          drawOutOfBound: true,
          textStyle: {
            fontWeight: 'bold',
            color: function () {
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 255),
                  Math.round(Math.random() * 255),
                  Math.round(Math.random() * 255),
                ].join(",") +
                ")"
              );
            },
          },
          emphasis: {
            textStyle: {
              shadowBlur: 10,
              shadowColor: "#333",
            },
          },
          data: [
            {
              name: "Tình Yêu",
              value: 10000,
              textStyle: {
                color: "blue",
              },
              emphasis: {
                textStyle: {
                  color: "red",
                },
              },
            },
            {
              name: "Tình dục",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },
            {
              name: "Macys",
              value: 6181,
            },

            {
              name: "Amy Schumer",
              value: 4386,
            },
            {
              name: "Jurassic World",
              value: 4055,
            },
            {
              name: "Charter Communications",
              value: 2467,
            },
            {
              name: "Chick Fil A",
              value: 2244,
            },
            {
              name: "Planet Fitness",
              value: 1898,
            },
            {
              name: "Pitch Perfect",
              value: 1484,
            },
            {
              name: "Express",
              value: 1112,
            },
            {
              name: "Home",
              value: 965,
            },
            {
              name: "Johnny Depp",
              value: 847,
            },
            {
              name: "Lena Dunham",
              value: 582,
            },
            {
              name: "Lewis Hamilton",
              value: 555,
            },
            {
              name: "KXAN",
              value: 550,
            },
            {
              name: "Mary Ellen Mark",
              value: 462,
            },
            {
              name: "Farrah Abraham",
              value: 366,
            },
            {
              name: "Rita Ora",
              value: 360,
            },
            {
              name: "Serena Williams",
              value: 282,
            },
            {
              name: "NCAA baseball tournament",
              value: 273,
            },
            {
              name: "Point Break",
              value: 265,
            },
          ],
        },
      ],
    };
    chart.setOption(option);
    chart.on("click", "series.wordCloud", function (el) {
      alert(1);
      // add your custom logic here
    });

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default WordCloudChart;
