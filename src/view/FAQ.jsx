import React from 'react'
import Header from "../component/Header.jsx";
import Question_component from '../component/Question_component.jsx'
const FAQ = () => {
    const faqs = [
  {
    question: "What type of services Goaira provide?",
    answer:
      "Goaira feels proud to serve all platforms in one application. We have fleet services and Sarathy (driver/chauffeur) and many services in nearest future.",
  },
  {
    question: "Is booking fleet services are easy?",
    answer:
      "Absolutely! Our booking is very simple and easy. You can choose your vehicle and book through application provided in android and ios. You can make a booking in 2 minutes.",
  },
  {
    question: "What type of fleet services you provide?",
    answer:
      "We currently provide fleets like Auto, Bike and Cars.",
  },
  {
    question: "What if I cancel the services?",
    answer:
      "Cancelling the fleet services before execution is completely free. It can be done through application provided.",
  },
  {
    question: "Are there any cancellation charges?",
    answer:
      "There are no charges if u cancel more than 3 times. Frequent cancellation will be charged.",
  },
  {
    question: "Are the drivers well trained?",
    answer:
      "We have all well-trained and certified drivers.",
  },
  {
    question: "What if I cannot find the driver?",
    answer:
      "If you are not able to find the driver, we will switch for spare drivers immediately.",
  },
  {
    question: "Are there anymore additional charges?",
    answer:
      "The price includes the first hour of waiting. Each additional hour of waiting at the airport / any other places will be charged according to the price list.",
  },
  {
    question: "Is price charged per vehicle or per person?",
    answer:
      "Prices are in the majority per vehicle. When you are booking, be careful to select the right car because of the number of passenger and luggage.",
  },
  {
    question: "Which locations does your services operate?",
    answer:
      "We currently operate in Tamil Nadu.",
  },
  {
    question: "Can I get a bill / copy of a payment?",
    answer:
      "Yes. After payment you will get a copy of bill to your whatsapp and mail from our driver.",
  },
  {
    question: "What are the modes of payment accepted?",
    answer:
      "We accept payments in our gateway thru cash, gpay, debitcard / creditcard.",
  },
  {
    question: "What if the driver overcharged me during the trip?",
    answer:
      "Our drivers will not overcharge during the trip. If it happens, kindly raise a complaint to connect@goaira.com / send us the feedback and rating thru our application so that we will compensate you in the next trip thru coupons.",
  },
  {
    question: "What if my fleet services are late?",
    answer:
      "In case if vehicle gets delayed and you have to cancel your bookings, we will waive off last minute cancellation fees. We earnestly work to avoid any such delays and work to ensure a 100% on-time performance.",
  },
];

  return (
    <div className="cursor-default">
      <Header />
      <div className="h-[75px]"></div>
       <Question_component questions={faqs}  />
    </div>
  )
}

export default FAQ
