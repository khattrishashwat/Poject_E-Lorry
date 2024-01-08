import React from "react";
import Footer from "../Footer/footer";
// import "./resource.css";
import Toggleside from '../sidetoggle/sidetoggle'

function Shopping() {
  return (
    <>
      <Toggleside />
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title">Shipping And Logistics Operators</h2>
        </div>
      </div>

      <div className="small-container">
        <h1 className="inner-h mt-3">Logistics operators: an overview</h1>
        <hr className="inner-hr" />
        <p className="font-ship">
          Logistics Operators, sometimes referred to as Logistics Providers, are
          key players in trade activities at a national and international level.
          As a result, they contribute a lot to the business success of
          companies engaged in this trade, especially in terms of helping them
          gain a competitive advantage. Logistics Operators come in many
          different forms and take different names, but they all have the same
          objective: to assist companies working in the transportation, storage,
          shipment and distribution of goods from seller to buyer.
        </p>

        <p className="font-ship mt-4">
          The market size of the European logistics sector totalled €1,050B in
          2016 and, in mature markets, it’s outgrowing the annual GDP rate. The
          biggest markets in Europe are Germany, UK, France, Italy and Spain,
        </p>

        <div className="ship-img mt-5">
          <img src={process.env.PUBLIC_URL + "/image/pole.png"}  alt="shop34"/>
        </div>

        <p className="font-ship">
          The Ten Biggest Logistics Markets in Europe, according to total
          logistic expenditure volume in Billion Euros in 2016. Source:
          Fraunhofer SCS. While Logistics Operators are integral to the global
          supply chain, as Skender suggest, the differences between different
          types of Logistics Operators are not very well-understood. So let’s
          dive right in: what are the different categories of Logistics Operator
          out there?
        </p>

        <h1 className="inner-h mt-3">
          The Different Types of Logistics Operators
        </h1>

        <p className="font-ship mt-6">
          Generally-speaking, Logistic Operators aggregate several types of
          services connected to the transportation supply chain, including but
          not limited to:
        </p>

        <div className="option">
          <ul>
            <li>Warehousing;</li>
            <li>Packaging/Labelling and Repackaging and relabelling;</li>
            <li>Picking;</li>
            <li>Labelling;</li>
            <li>Inventory - supply chain optimisation;</li>
            <li>Customer Service;</li>
            <li>
              Aggregation of different providers of varying transportation
              modes.
            </li>
          </ul>
        </div>

        <p className="font-ship mt-6">
          Depending on the amount and level of integration of the services they
          provide, Logistic Operators can range from first-party to fifth-party
          logistics providers as can be seen in the graphic below:
        </p>

        <div className="ship-img mt-5">
          <img src={process.env.PUBLIC_URL + "/image/info-1.png"} 
          alt="shop44"/>
        </div>

        <h1 className="inner-h mt-3">Warehousing Services</h1>

        <p className="font-ship">
          Companies don’t only seek help from Logistics Operators for
          transportation services but also for managing their inventory - in
          other words, storing their products before or between shipment(s) and
          cataloguing and tracking their inventory until it is delivered. This
          not only requires storage space (the warehouse itself) but also a
          reliable and efficient cataloguing and tracking system. Warehousing is
          a fundamental part of logistics and often needs to be flexible,
          depending on how much space Logistic Operators’ clients need for their
          products and how long they need it for. Some Logistics Providers have
          their own warehouses, whereas others rely on a third-party provider
          for this.
        </p>

        <h1 className="inner-h mt-3">Freight Services</h1>

        <p className="font-ship">
          Freight services are used for large items and large orders (large
          quantities). This often requires a combination of vehicles, including
          trucks, aeroplanes, trains, cargo ships, and more. Drayage services,
          the short distance transportation of goods from, for instance, a ship
          to a warehouse to storage, are typically involved in freight services.
          As with warehousing, freight shipping involves continuous fluctuations
          in demand, labour shortages, shipping times, etc which requires
          flexibility on the part of the Logistics Operators. As major players
          in the business of transporting goods, some logistics operators own
          transportation equipment themselves.
        </p>

        <h1 className="inner-h mt-3">Courier Services</h1>

        <p className="font-ship">
          Courier shipping is most people’s idea of what a "shipping company"
          is. It’s generally reserved for smaller, time-sensitive orders that
          require a higher level of care, Shipping smaller orders, rather than
          the larger quantities involved in freight shipping, is, however, more
          expensive. As a result, courier services tend to be used exclusively
          for last-mile logistics, where individual orders go directly from the
          warehouse to the buyer or end-user.
        </p>

        <h1 className="inner-h mt-3">
          An Integral Part of the Global Transportation Chain
        </h1>

        <p className="font-ship">
          Logistics Providers not only add value but are crucial intermediaries
          in the global transportation and supply chain. As coordinators of many
          different services (as noted above), Operators, especially those that
          are 3PLs and above, are in close collaboration with many links within
          the supply chain and are thus indispensable to most trading
          businesses. In this sense, they differ from pure transportation
          companies in their complex and multi-service role as a transportation
          intermediary, rather than straight transportation provider.
        </p>

        <h1 className="inner-h mt-3">
          How Ontruck Can Help Logistics Operators
        </h1>

        <p className="font-ship">
          As a Logistics Operators gradually evolve into more complex creatures
          (3PL onwards) the tangible part of their business with less added
          value - in other words, road transportation - is rapidly becoming a
          less integral part of their activities. Instead, they’re beginning to
          invest in more high added value, intangible assets and services. In
          some cases, these involve a high degree of IT complexity. These
          services offer a greater competitive advantage.
        </p>

        <p className="font-ship">
          This increased complexity means investing heavily in order to reach a
          higher level of optimisation. To do this, many are looking for digital
          solutions that will allow them to optimise more efficiently and
          effectively, scale faster and attract bigger business and clients. In
          particular, 5PL businesses are focused on optimising the whole supply
          chain, moving away from an asset-based model towards a
          service/consulting-based company.
        </p>

        <p className="font-ship">
          That’s is where Ontruck comes in. Already working with major Logistics
          Providers from XPO and Kuehne Nagel to Dascher, DB Schenker, Hellmann,
          and DHL, Ontruck can assist both asset and service-based Logistics
          Operators in optimising their operations. Ontruck enables access to
          higher-value services: flexibility, traceability, digital PODs, data
          analytics, and more, at a fair price. In an increasingly volatile and
          “real-time” global supply chain, Logistics Operators need to optimise
          and become more flexible in order to survive. Opting for a proven
          digital solution like Ontruck is a quick and effective way to do this.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Shopping;
