import React from "react";
import Nav from "../shared/nav";
import Foot from "../shared/foot";
import WordCloudChart from './WordCloudChart';

const data = [
  {
    name: 'Lorem',
    value: 1000,
  },
  {
    name: 'Ipsum',
    value: 800,
  },
  {
    name: 'Dolor',
    value: 600,
  },
  {
    name: 'Sit',
    value: 400,
  },
  {
    name: 'Amet',
    value: 200,
  }
];

export default function Overview() {
  return (
    <>
      <div className="container">
        <div>
          <Nav />
        </div>
        <div className="d-flex justify-content-between align-items-center row">
            <div className="col-md-6 col-12 text-center">
              <h1>
                Những câu hỏi thường được hỏi về các chòm sao ???
              </h1>
            
            </div>
            <div className="col-md-6 col-12 text-center">
            <WordCloudChart data={data} />
            </div>
          </div>
        <div>
          <Foot />
        </div>
      </div>
    </>
  );
}
