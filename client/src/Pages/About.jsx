import React from "react";


const aboutData = [
  {
    id: 1,
    title: "Interconnected Hospitals",
    image: "https://img.freepik.com/free-vector/medics-working-charts_1262-19836.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "Sanjeevani connects hospitals through a secure digital network, allowing them to share critical medical data, transfer patients efficiently, and collaborate during emergencies."
  },
  {
    id: 2,
    title: "Real-time Bed Availability",
    image: "https://img.freepik.com/free-vector/doctor-technicians-discussing-medical-record_1262-19767.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "We provide real-time updates on bed availability, including ICU beds, oxygen-supported beds, and ventilator-equipped units to ensure faster patient admissions."
  },
  {
    id: 3,
    title: "Emergency Medical Routing",
    image: "https://img.freepik.com/premium-photo/businessman-hold-virtual-plus-medical-network-connection-icons-covid-19-pandemic-develop-people-awareness-spread-attention-their-healthcare-doctor-document-medicine-ambulance-patient-icon_150455-10815.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "Our intelligent routing system guides ambulances to the nearest hospital with the required facilities, reducing patient transport delays in emergencies."
  },
  {
    id: 4,
    title: "Unified Health Dashboard",
    image: "https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148564506.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "Hospitals and authorities use a centralized dashboard to monitor resources, manage hospital load, and make informed decisions during health crises."
  },
  {
    id: 5,
    title: "Smart Notifications",
    image: "https://img.freepik.com/free-vector/family-with-baby-visiting-doctor_1262-19778.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "Sanjeevani alerts stakeholders about sudden surges, emergencies, or shortages, enabling proactive responses and better preparedness."
  },
  {
    id: 6,
    title: "Patient-Centric Platform",
    image: "https://img.freepik.com/free-vector/man-woman-accessing-medical-website_1262-19801.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "We empower patients to search hospitals, track availability, and get timely access to care through a user-friendly interface."
  },
  {
    id: 7,
    title: "Secure Medical Data Sharing",
    image: "https://img.freepik.com/free-vector/online-doctor-concept_23-2148546392.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "Using encryption and access controls, Sanjeevani ensures that hospital and patient data is shared safely across the network."
  },
  {
    id: 8,
    title: "24x7 Support",
    image: "https://img.freepik.com/premium-vector/tiny-people-doctor-prescribing-medicine-patients-online-online-prescription-system_566886-3210.jpg?ga=GA1.1.662315404.1747580086&semt=ais_items_boosted&w=740",
    content: "Our platform is monitored round-the-clock to ensure uptime, fast updates, and continuous support for all medical facilities."
  }
];

const aboutParagraphs = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "At Sanjeevani, our mission is to transform the healthcare ecosystem by leveraging technology to bridge the gap between patients and medical institutions. We strive to ensure that every citizen, regardless of location, can access timely and reliable healthcare. By digitally interconnecting hospitals and streamlining resource sharing, we aim to minimize delays, prevent crises, and ultimately save lives. Our platform is built with a commitment to transparency, accessibility, and efficiency, putting patient care at the forefront of innovation."
  },
  {
    id: 3,
    title: "Real-Time Monitoring and Availability",
    description:
      "In critical medical situations, time is of the essence. Sanjeevani addresses this challenge by offering real-time tracking of hospital resources across multiple locations. Whether it's a ventilator, oxygen-supported bed, or specialized doctor, the platform enables users to find the nearest available facility with the necessary resources. Hospital dashboards are continuously updated, ensuring data accuracy and helping emergency services make fast, informed routing decisions. This seamless coordination significantly enhances the survival rate and quality of care."
  },
];



const About = () => {

  return(
    <section>

      <div className="pt-4 w-full">
        {
          aboutParagraphs.map(para => (
            <div key={para.id} className="mx-[200px]">
              <p className="font-bold text-xl text-slate-700 text-center mt-8">{para.title}</p>
              <p className="font-serif text-slate-800 max-w-[90%] text-center mt-4">{para.description}</p>
            </div>
          ))
        }
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-3 mt-12 mb-10 justify-center">
        {aboutData.map(card => (
            <div key={card.id} className="bg-gray-50 rounded-xl shadow-md h-[450px] w-[320px] hover:shadow-lg transition">
              {/* <p>{card.id}</p> */}
              <div className="h-56 w-full object-cover p-{1px}">
                <img className="rounded-2xl h-56 w-full" src={card.image} alt="" />
              </div>
              <p className="font-bold text-xl text-center text-slate-700">{card.title}</p>
              <p className="text-slate-700 text-center mt-4">{card.content}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default About
