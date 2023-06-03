import React from "react";
import { Vega } from "react-vega";
import { zodiacColors } from "../shared/zodiacColors";

const demodata = [
  { category: "Ari", amount: 1.1 },
  { category: "Tau", amount: 0.1 },
  { category: "Gem", amount: 0.2 },
  { category: "Can", amount: 0.3 },
  { category: "Leo", amount: 0.4 },
  { category: "Vir", amount: 0.5 },
  { category: "Lib", amount: 0.5 },
  { category: "Sco", amount: 0.6 },
  { category: "Sag", amount: 0.7 },
  { category: "Cap", amount: 0.8 },
  { category: "Aqu", amount: 0.9 },
  { category: "Pis", amount: 1 },
];

const spec = {
  $schema: "https://vega.github.io/schema/vega/v5.json",
  width: 600,
  height: 400,
  padding: { left: 5, right: 5, top: 20, bottom: 0 },
  autosize: "none",
  signals: [
    { name: "cx", update: "width / 2" },
    { name: "cy", update: "height / 2" },
    {
      name: "gravityX",
      value: 0.2,
    },
    {
      name: "gravityY",
      value: 0.2,
    },
  ],
  data: [
    {
      name: "table",
      values: demodata,
    },
  ],
  scales: [
    {
      name: "size",
      domain: { data: "table", field: "amount" },
      range: [1200, 5000],
    },
    {
      name: "color",
      type: "ordinal",
      domain: { data: "table", field: "category" },
      range: Object.values(zodiacColors),
    },
  ],
  marks: [
    {
      name: "nodes",
      type: "symbol",
      from: { data: "table" },
      encode: {
        enter: {
          fill: { scale: "color", field: "category" },
          xfocus: { signal: "cx" },
          yfocus: { signal: "cy" },
        },
        update: {
          size: { signal: "pow(2 * datum.amount, 2)", scale: "size" },
          stroke: { value: "white" },
          strokeWidth: { value: 1 },
        },
      },
      transform: [
        {
          type: "force",
          iterations: 100,
          static: false,
          forces: [
            {
              force: "collide",
              iterations: 2,
              radius: { expr: "sqrt(datum.size) / 1.9" },
            },
            { force: "center", x: { signal: "cx" }, y: { signal: "cy" } },
            { force: "x", x: "xfocus", strength: { signal: "gravityX" } },
            { force: "y", y: "yfocus", strength: { signal: "gravityY" } },
          ],
        },
      ],
    },
    {
      type: "text",
      from: { data: "nodes" },
      encode: {
        enter: {
          align: { value: "center" },
          baseline: { value: "middle" },
          fontSize: { value: "15" },
          fontWeight: { value: "bold" },
          fill: { value: "white" },
          text: { field: "datum.category" },
        },
        update: { x: { field: "x" }, y: { field: "y" } },
      },
    },
  ],
};
export default function Home() {
  return <Vega spec={spec} actions={false} />;
}
