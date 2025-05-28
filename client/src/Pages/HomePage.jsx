// import React, { useState, useEffect } from "react";




export default function HomePage(){




      return(
            <div className="w-full h-[100%] flex justify-center gap-10 pt-25">

                  <div className="h-[550px] w-[50%] rounded-xl px-[18px] pt-12 pl-20">

                        <p className="text-6xl font-bold text-slate-700 animotion" >Your Health Is our Top Priority</p>
                        <p className="mt-8 text-slate-500">There are many variation of passages of ipsum available ,
                              but the majority have suffered.
                        </p>

                        <button className="h-10 w-44 bg-blue-400 hover:bg-blue-600 text-white rounded mt-6">Meet Our Specialist</button>

                        <div className="flex gap-4 mt-12">

                              <div>
                                    <p className="font-bold text-slate-700 text-2xl">262k+</p>
                                    <p>Recovered Patients</p>
                              </div>
                              <div>
                                    <p className="font-bold text-slate-700 text-2xl">94%</p>
                                    <p>Satisfaction Rate</p>
                              </div>
                              <div>
                                    <p className="font-bold text-slate-700 text-2xl">1000+</p>
                                    <p>Collabed Hospital</p>
                              </div>
                        </div>
                  </div>

                  <div className="h-[100] w-[50%] rounded-xl px-[18px] pt-12 bg-[url(C:\Users\ersam\OneDrive\Desktop\IEEE-hackathon\IEEE-hackathon\client\public\ChatGPT-Doctor-Image.png)] bg-center bg-cover relative ">

                        <p className="absolute flex items-center top-30 left-20 rounded bg-white text-slate h-[34px] w-36 text-center font-xl py-atuo text-slate-700">✅Regular Checkup</p>
                        <p className="absolute flex items-center justify-center h-14 w-14 bg-white rounded-[50%] left-[380px] bottom-[520px]">🩺</p>                              
                        <div className="absolute right-20 bottom-10 bg-gray-100 h-32 w-60 text-center text-xl">
                              
                              <p className="font-bold text-blue-500">Meet our Partners</p>
                              <div className="relative flex ">

                                    <div className="absolute top-4 left-[14px]">
                                          <div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-gray-200">
                                                <img className="bg-center bg-cover rounded-[50%] h-10 w-10" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                          </div>
                                    </div>
                                    <div className="absolute top-4 left-[38px]">
                                          <div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-gray-200">
                                                <img className="bg-center bg-cover rounded-[50%] h-10 w-10" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww" alt="" />
                                          </div>
                                    </div>
                                    <div className="absolute top-4 left-[64px]">
                                          <div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-gray-200">
                                                <img className="bg-center bg-cover rounded-[50%] h-10 w-10" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                          </div>
                                    </div>
                                    <div className="absolute top-4 left-[84px]">
                                          <div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-gray-200">
                                                <img className="bg-center bg-cover rounded-[50%] h-10 w-10" src="https://media.istockphoto.com/id/919539228/photo/shes-a-gifted-medical-professional.jpg?s=612x612&w=0&k=20&c=_tNuiFtYd6DuxZT_TjTLNbEdmvrx7G620FHNXQw_9n0=" alt="" />
                                          </div>
                                    </div>
                                    <div className="absolute top-4 left-[108px]">
                                          <div className="flex items-center justify-center rounded-[50%] h-10 w-10 bg-gray-200">
                                                <p className="font-bold text-xl">+</p>
                                          </div>
                                    </div>

                              </div>
                              
                        </div>

                  </div>
            </div>
      )
}