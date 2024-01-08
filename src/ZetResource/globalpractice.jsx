import React from "react";
// import "./resource.css";
import Footer from "../Footer/footer";
import Toggleside from '../sidetoggle/sidetoggle'

function globalpractice() {
  return (
    <>
      <Toggleside />
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title">Global Practices</h2>
        </div>
      </div>

      <div className="small-container">
        <h2 className="glob">Global Vehicle Commercial Drive To Zero Campaign</h2>
        <img src={process.env.PUBLIC_URL + "/image/drive-to-zero.jpg"} />

        <h3 className="goal-head">Goal</h3>
        <p className="goal-para">
          100% Zero-Emission New Truck and Bus Sales & Manufacturing by 2040
        </p>

        <h3 className="goal-head">The Program</h3>
        <p className="goal-pro mt-1">
          CALSTART Drive to ZeroTM program and campaign aims to accelerate the
          growth of global zero- and near-zero-emission (ZE) commercial vehicle
          space, with the aim of ZE technology becoming commercially competitive
          by 2025 and dominant by 2040 in specific vehicle segments and regions.
          Drive to Zero is built upon a technology strategy for change called
          The Beachhead Strategy — a strategy that identifies the commercial
          vehicle market segments where zero- and near-zero technologies are
          most likely to succeed and help drive growth in other segments.
        </p>

        <p className="goal-pro mt-4">
          Reaching zero emissions requires a complete transformation of how we
          power our daily lives and the global economy. The IEA's Zero by 2050
          Scenario lays out a narrow but achievable pathway to net zero
          emissions in the Truck sector by mid-century – a trajectory consistent
          with limiting Following this pathway represents the world’s best
          chance of avoiding the worst effects of Zero Emission Truck, and
          requires accelerating the shift to non-emitting sources of Truck,
          increasing electric transport,expanding the use of clean hydrogen and
          other low-emission fuels; and investing in emissions abating
          technologies, including negative emission technologies.
        </p>

        <h3 className="goal-head">At This Event You Can</h3>
        <div className="event">
          <ul>
            <li>Ask questions and get answers from CARB and CEC experts.</li>
            <li>
              Find out how to get funding for vehicles, infrastructure, and
              off-road equipment.
            </li>
            <li>
              Talk to experts about how to transition your fleet to
              zero-emission.
            </li>
          </ul>
        </div>

        <h3 className="goal-head">Zero Emission Road Vehicles</h3>
        <p className="goal-para">
          Test drive zero-emission medium-duty and heavy-duty trucks and vans.
        </p>

        <div className="global-grid-main">
          <div className="global-grid-1">
            <img src={process.env.PUBLIC_URL + "/image/images-2.jpg"} />
            <div className="white-box"></div>
            <a href="byd.html">
              <h3>Byd 8tt className-7-8</h3>
            </a>
          </div>

          <div className="global-grid-1">
            <img src={process.env.PUBLIC_URL + "/image/images-1.jpg"} />
            <div className="white-box"></div>
            <a href="evo.html">
              <h3>Evolectric CEV 45</h3>
            </a>
          </div>

          <div className="global-grid-1">
            <img src={process.env.PUBLIC_URL + "/image/truck-1.jpg"} />
            <div className="white-box"></div>
            <a href="freight.html">
              <h3>Freightliner</h3>
            </a>
          </div>

          <div className="global-grid-1">
            <img src={process.env.PUBLIC_URL + "/image/tuckss-1.jpg"} />
            <div className="white-box"></div>
            <a href="hummin.html">
              <h3>Hummingbird EV</h3>
            </a>
          </div>

          <div className="global-grid-1">
            <img src={process.env.PUBLIC_URL + "/image/truck-10.jpg"} />
            <div className="white-box"></div>
            <a href="hyzon.html">
              <h3>Hyzon Motors</h3>
            </a>
          </div>

          <div className="global-grid-1">
            <img src={process.env.PUBLIC_URL + "/image/truck-11.jpg"} />
            <div className="white-box"></div>
            <a href="nikola.html">
              <h3>Nikola Motor FCEV</h3>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default globalpractice;
