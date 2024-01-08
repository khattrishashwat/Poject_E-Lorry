import React from "react";
// import "./resource.css";
import Footer from "../Footer/footer";
import Toggleside from '../sidetoggle/sidetoggle'

function Zetfinancing() {
  return (
    <>
      <Toggleside />
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title"> ZET Financing</h2>
        </div>
      </div>

      <section className="middle-sec pt-5 pb-3">
        <div className="small-container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="inner-h">ZET Financing</h1>
              <hr className="inner-hr" />
              <img
                src={process.env.PUBLIC_URL + "/image/finance.png"}
                className="w-100"
                alt="zetf34"
              />
              <div className="newsdetails-main-s">
                <div className="news-dtls-box enevt-dtls-box">
                  <div className="news-content-inv-s col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="content-block-extra-inv-s event-block-extra-s">
                      <h3>
                        Overcoming market barriers to mobilise ZET finance
                      </h3>
                      <p>
                        Lack of financing is one of the critical barriers to EV
                        adoption. EV capital costs, including for ZETs, are much
                        higher than diesel counterparts. At the same time, the
                        interest rate offered on loans for EVs is much higher
                        than diesel vehicles. The loan-to-value ratios are low
                        and loan terms are short. Innovative financing schemes
                        and business models to operate ZETs can catalyse the
                        market and spur deployment by helping would-be ZET fleet
                        operators overcome upfront capex hurdles and access
                        ZETs’ superior opex and total cost of ownership
                      </p>
                      <p>
                        Revenue uncertainty in the market raises even further
                        the credit risk associated with a borrowing
                        owner-operator, which means that most new freight
                        vehicles are financed through non-banking financial
                        companies (NBFCs). These companies are less risk-averse
                        than banks but charge higher interest rates. The loans
                        stand at an average interest rate of between 12% and
                        16%, tenures of three to four years, and loanto-value
                        ratios often exceeding 80%, altogether driving the
                        market towards low-cost business models seeking to
                        minimise upfront costs.
                      </p>
                      <h3>
                        Trucking market overview: Dominated by smaller companies
                        and perceived credit risk
                      </h3>
                      <p>
                        The demand for goods and freight movement in India is
                        not centralised. While there are a few tier-one hubs
                        like Delhi and Mumbai, tier-two and -three cities
                        comprise nearly 60% of the country’s total demand for
                        goods and freight traffic volume.60 Drivers also prefer
                        to travel along routes where they are familiar with the
                        local language and road network. Limited regulation and
                        a low barrier to entry have led to a crowded market with
                        many small fleet operators and unskilled drivers — in
                        fact, over 75% of the freight market is made up of small
                        owner-operators who own fewer than five commercial goods
                        carriers.
                      </p>
                      <p>
                        This disproportionate amount of smaller regional
                        aggregators creates a high degree of fragmentation,
                        resulting in unsustainably low returns. Those low
                        returns and high competitive pressures make the small
                        carriers unattractive to creditors because their
                        businesses face high risk. At the same time, those price
                        pressures can lead to behavior such as overloading —
                        which larger, more compliant companies cannot engage in
                        — precluding consolidation. As a result, only small
                        operators can survive, but they often lack access to the
                        information, capital, or level of sophistication it
                        takes to fully invest in modern trucking technologies.
                      </p>
                      <h3>
                        Barriers to growth of ZET financing, from purchase to
                        production
                      </h3>
                      <p>
                        The critical role of financing in the trucking system
                        makes it an important consideration in growing the
                        penetration of ZETs. This is exemplified on the
                        purchasing side by the fact that buying an MDT ZET costs
                        two to three times more than a similar-sized diesel
                        vehicle, and an HDT ZET costs four to seven times more
                        than a diesel HDT. This relatively high upfront cost
                        presents a significant barrier for already
                        capital-constrained small fleet operators. Without
                        access to affordable financing, it will be difficult for
                        most operators to modernise their fleets.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img
                      src={process.env.PUBLIC_URL + "/image/finance-1.png"}
                      className="w-100"
                      alt="zetf44"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Zetfinancing;
