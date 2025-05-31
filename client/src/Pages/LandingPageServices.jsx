
// const services = [
//   {
//     id: 1,
//     title: "Cardiology",
//     description: "Seduahag perspiciati under omnised atused error.",
//     icon: "🫀",
//   },
//   {
//     id: 2,
//     title: "Monthly Check Up",
//     description: "Seduahag perspiciati under omnised atused error.",
//     icon: "🩺",
//   },
//   {
//     id: 3,
//     title: "Dental Care",
//     description: "Seduahag perspiciati under omnised atused error.",
//     icon: "🦷",
//   },
//   {
//     id: 4,
//     title: "Ophthalmology",
//     description: "Seduahag perspiciati under omnised atused error.",
//     icon: "🏥",
//   },
// ];



export default function Services(){



      return(
            <div className="flex flex-wrap gap-6 mt-12 justify-center w-full mb-18">

                  <div className="bg-white rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center hover:scale-105 transition">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h4a2 2 0 002-2v-6" />
                              </svg>
                        </div>
                        <h3 className="font-bold text-lg text-slate-700 mb-2 text-center">Interconnected Hospitals</h3>
                        <p className="text-slate-500 text-center">Seamlessly connect hospitals for faster data sharing and coordinated care in emergencies.</p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center hover:scale-105 transition">
                        <div className="bg-green-100 text-green-600 rounded-full p-3 mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 16h6m-7-8V4a1 1 0 011-1h4a1 1 0 011 1v4" />
                              </svg>
                        </div>
                        <h3 className="font-bold text-lg text-slate-700 mb-2 text-center">Emergency Bed Availability</h3>
                        <p className="text-slate-500 text-center">Real-time updates on ICU, oxygen, and ventilator beds for critical patient admissions.</p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center hover:scale-105 transition">
                        <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4.93 19.07a10 10 0 1114.14 0" />
                              </svg>
                        </div>
                        <h3 className="font-bold text-lg text-slate-700 mb-2 text-center">Smart Notifications</h3>
                        <p className="text-slate-500 text-center">Instant alerts for surges, shortages, and emergencies to keep everyone prepared.</p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg w-64 p-6 flex flex-col items-center hover:scale-105 transition">
                        <div className="bg-purple-100 text-purple-600 rounded-full p-3 mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4a4 4 0 014 4v2M9 17H5a2 2 0 01-2-2v-2a4 4 0 014-4h4a4 4 0 014 4v2a2 2 0 01-2 2H9z" />
                              </svg>
                        </div>
                        <h3 className="font-bold text-lg text-slate-700 mb-2 text-center">Unified Health Dashboard</h3>
                        <p className="text-slate-500 text-center">Monitor resources and make informed decisions with a centralized dashboard.</p>
                  </div>
            </div>
      )
}




