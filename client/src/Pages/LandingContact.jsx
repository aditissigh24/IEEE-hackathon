

export default function Contact(){




      return(
            <div className="flex justify-center gap-x-38 mb-16">

                  <div className="w-[50%] bg-gray-50 px-20 py-5 rounded-2xl">
                        <p className="w-full text-center font-bold font-serif text-blue-500">Make a Contact</p>
                        <div className="mt-8">
                              <input className="bg-white h-12 w-[270px] text-center rounded" type="text" placeholder="Choose Department" />
                              <input className="bg-white h-12 w-[270px] text-center rounded ml-10" type="text" placeholder="Choose Doctor" />
                        </div>
                        <div className="mt-8">
                              <input className="bg-white h-12 w-[270px] text-center rounded" type="text" placeholder="Enter Your Name" />
                              <input className="bg-white h-12 w-[270px] text-center rounded ml-10" type="text" placeholder="Email Address" />
                        </div>
                        <div className="flex justify-center">
                              <button className="w-[80%] bg-sky-500 hover:bg-sky-600 mt-6 py-2 text-white">Submit</button>
                        </div>
                  </div>
                  <div className="w-[30%]">
                        <p className="text-sky-500 hover:text-sky-700 transition">Need in Emergency?</p>
                        <p className="font-bold font-serif text-4xl text-slate-700 mt-2">Don't Be Hesitate To Contact US</p>
                        <p className="mt-4">There are many variation of passages and the lorem ipsum available,
                               but the majority i have suffered.</p>

                        <div className="bg-sky-500 mt-8 py-6 px-6 w-[350px] rounded-2xl">
                              <p className="font-serif text-2xl text-white">For Any Emergency Cases</p>
                              <p className="text-white text-[15px]">Call Us: +91 xxxxxxxxxx</p>
                        </div>
                  </div>
            </div>
      )
}