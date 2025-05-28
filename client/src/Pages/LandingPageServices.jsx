
const services = [
  {
    id: 1,
    title: "Cardiology",
    description: "Seduahag perspiciati under omnised atused error.",
    icon: "🫀",
  },
  {
    id: 2,
    title: "Monthly Check Up",
    description: "Seduahag perspiciati under omnised atused error.",
    icon: "🩺",
  },
  {
    id: 3,
    title: "Dental Care",
    description: "Seduahag perspiciati under omnised atused error.",
    icon: "🦷",
  },
  {
    id: 4,
    title: "Ophthalmology",
    description: "Seduahag perspiciati under omnised atused error.",
    icon: "🏥",
  },
];



export default function Services(){



      return(
            <>
            <p className="w-full font-bold text-blue-500 text-center mt-18">Our Services</p>
            <p className="w-full font-bold text-slate-700 text-2xl text-center font-serif">Services For Your Life</p>

            <div className="w-full flex gap-4 mt-18 mb-32 justify-center">
                  {services.map(service => (
                        <div key={service.id} className="h-[300px] w-[300px] px-4 py-4 shadow-md rounded-lg text-center hover:shadow-lg transition flex-wrap">
                              <div className="text-xl mb-2">{}{service.icon}</div>
                              <h3 className=" font-bold text-lg text-slate-600">{service.title}</h3>
                              <p className="text-gray-500 mt-10">{service.description}</p>
                              <a href="#" className="font-semibold mt-18 bg-blue-400 text-white hover:bg-blue-600 hover:text-white mx-auto h-[40px] w-[120px] flex items-center justify-center rounded-sm">Explore Now</a>
                        </div>
                  ))}
            </div>

            <div className="w-full flex px-14 mb-4 gap-12">

                  <div className="flex justify-center w-[50%] bg-center bg-cover py-20">
                        <div className="h-[380px] w-[360px] bg-gradient-to-br from-yellow-50 to-white rounded-lg shadow">
                              <img className="h-[380px] w-[360px] transform origin-bottom-right rotate-12" src="https://img.freepik.com/premium-photo/group-medical-workers-working-together-hospital_118454-16372.jpg" alt="" />
                        </div>
                  </div>

                  <div className="w-[50%]">
                        <p className="font-bold text-blue-500 text-center">25+ Years Of Experiences</p>
                        <p className="text-[36px] font-serif font-semibold text-slate-700 mt-6 text-center">We Are Always Ensure Best Medical Treatment For Your Health</p>

                        <div className="flex h-auto w-full mt-4">
                              <div>
                                    <p className="max-w-[90%]">There are many variation of passages of Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sequi nihil reiciendis tempore reprehenderit natus enim animi neque ad, ex quaerat totam omnis velit, in rem ab ullam impedit voluptas!
                                    </p>
                                    <button className="h-[38px] w-[120px] rounded text-white bg-blue-400 hover:bg-blue-600 hover:text-white mt-8">More Info</button>                                    
                              </div>
                              <div className="container h-full w-full ">
                                    <img className="h-52 w-full rounded-3xl" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                              </div>
                        </div>
                  </div>
                  
            </div>

            <div className=" w-full flex gap-24 justify-center mb-18">
                  <div className="h-20 w-20 bg-center bg-cover">
                        <img src="https://imgs.search.brave.com/Vg5fv-P8LlNVo-EIMKyUrGJQ708o_6TrM2LTfrN4ubs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vOGFwanZP/Vl9pczNWMGVHVXpT/UFl2b2R4WGJLcDFN/b2YzSVZLOTJUdEdf/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/RTEvT1RZeE9UZ3dN/eTkyWldOMC9iM0l2/Ylc5a1pYSnVMV2hs/L1lXeDBhQzFqWVhK/bExXSjEvYzJsdVpY/TnpMV2xqYjI0dC9Z/M0p2YzNNdGMzbHRZ/bTlzL0xXUmxjMmxu/YmkxbGJHVnQvWlc1/MExtcHdaejl6UFRZ/eC9NbmcyTVRJbWR6/MHdKbXM5L01qQW1Z/ejF1U0VSNWRqVnIv/TTI5eFJqaE9UbFow/ZEVZdC9UMWRvUkZk/SFUxRjBaemx6L1p6/QTRjazFEVEZselgx/Tm4vUFE.jpeg" alt="" />
                  </div>
                  <div className="h-20 w-20 bg-center bg-cover">
                        <img src="https://imgs.search.brave.com/bPLeQO9heWY0YczxpYC7zsgyv3QorGYwtyCRsxx2w58/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vQloyMFVj/Q3hXUzZXOFdxRUlC/d3owNFEzMFdFUWNo/eHpVUER0UWhVMktJ/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldGbi9aWE10Y0d4/aGRHWnZjbTB1L09U/bHpkR0YwYVdNdVky/OXQvTHk5d1lsVkRl/VGhaYTJOWC9PV0ZQ/T0RaWVR6Wm9hak00/L1Rtc3djV3M5THpC/NE1Eb3kvTURBd2VE/SXdNREF2Wm1sMC9M/V2x1THpVd01IZzFN/REF2L09UbGtaWE5w/WjI1ekxXTnYvYm5S/bGMzUnpMV0YwZEdG/ai9hRzFsYm5Sekx6/RXhNUzh4L01URTRN/RGd2WVhSMFlXTm8v/YldWdWRGOHhNVEU0/TURneS9NVGc.jpeg" alt="" />
                  </div>
                  <div className="h-20 w-20 bg-center bg-cover">
                        <img src="https://imgs.search.brave.com/JgO7Qov49tgNmgwOmwEHhk8bqTs0nvQIP3umF2A77AU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vT2xWN1lG/N0d0cm56NE9LWTY4/T0pxazRmQUVaaUxK/Q1NqMGRCWlFJeWk0/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6THpWbUwy/RTQvTHpWa0x6Vm1Z/VGcxWkRjMS9ObU5p/TUdVMFlUbGlZbVUy/L1pURTVPV0ZrWmpK/bU5XRmsvTG1wd1p3.jpeg" alt="" />
                  </div>      
                  <div className="h-20 w-20 bg-center bg-cover">
                        <img src="https://imgs.search.brave.com/mfakpZ-IkqCGE-BNomoxsmFgWcT9bwKrcmM-4knMcT0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRHpFMDNZ/ZEpaYjgtNmVKR2sx/TVczNjhFSzIxVHhy/a3lfV3RQOXhkYU9p/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk1U/TTAvTlRReU5UQTBO/eTkyWldOMC9iM0l2/WTJGa2RXTmxkWE10/L2JXVmthV05wYm1V/dGFXTnYvYmkxelpY/UXVhbkJuUDNNOS9O/akV5ZURZeE1pWjNQ/VEFtL2F6MHlNQ1pq/UFVoSlRuTmkvYldO/b2RrNUlhRzVQVlRo/Mi9SV3RpVjJvMGJq/VlJNM1pYL1Z6VktS/emRJVUVad1REVnYv/ZDBFOQ.jpeg" alt="" />
                  </div>
            </div>
            </>
      )
}