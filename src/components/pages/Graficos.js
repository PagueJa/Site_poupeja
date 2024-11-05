import React from 'react';
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer';
import PolarArea from "../layout/graphics/PolarArea";
import BarChart from "../layout/graphics/BarChart";
import LineChart from "../layout/graphics/LineChart";
import HorizontalBarChart from "../layout/graphics/HorizontalBarChart";
import AreaChart from "../layout/graphics/AreaChart";
import BubbleChart from "../layout/graphics/BubbleChart";

const Graficos = () => {
  return (
    <>
      <Navbar />  

      {/* Container principal */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow" style={{ height: '350px' }}>
              <PolarArea />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow" style={{ height: '350px' }}>
              <BarChart />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow" style={{ height: '350px' }}>
              <LineChart />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow" style={{ height: '350px' }}>
              <HorizontalBarChart />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow" style={{ height: '350px' }}>
              <AreaChart />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow" style={{ height: '350px' }}>
              <BubbleChart />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Graficos;



