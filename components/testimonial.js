
export const Testimonial = () => {



  return (
    <>
   <section className="py-6 text-blue-900 sm:py-16 lg:py-20 mx-[1rem]  ">
  <div className="mx-auto max-w-2xl px-4  lg:max-w-screen-lg lg:px-8  ">
    <div className="flex flex-col lg:flex-row">
      <div className="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl bg-blue-600 shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
        <img className="absolute top-0 h-full w-full object-cover opacity-10" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
        <div className="relative mt-auto w-full">
          <div className="flex flex-col p-6 lg:px-7 lg:py-8">
            <div className="">
              <blockquote className="">
                <p className="text-3xl font-bold text-white sm:text-5xl">"I cannot overstate how much this has helped our startup"</p>
              </blockquote>
            </div>

            <div className="mt-10 flex items-center">
              <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src="/images/Shreyansh_elekrity.jpg" alt="" />
              <div className="ml-4 text-white">
                <p className="text-base font-bold">Shreyansh Chanani</p>
                <p className="text-blue-90 mt-0.5 text-sm">Founder, Elekrity</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
        <div className="flex flex-col text-white">
          <div className="">
            <blockquote className="">
              <p className="text-lg leading-relaxed">"I recently hired a uInvented to build a new website for my business, and I couldn't be happier with the results. The team at the company was professional, efficient, and highly skilled at creating exactly what I was looking for."</p>
            </blockquote>
          </div>

          <div className="mt-4 flex items-center">
            <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src="/images/nitish_satpura.jpg" alt="" />
            <div className="ml-4">
              <p className="text-base font-bold">Nitish Kumar</p>
              <p className="mt-0.5 text-sm">Satpura House, IITD</p>
            </div>
          </div>
         </div>


        <div className="flex flex-col text-white">
          <div className="">
            <blockquote className="">
              <p className="text-lg leading-relaxed">"The final product exceeded my expectations, and I have already received numerous compliments on the sleek and modern design of my site."</p>
            </blockquote>
          </div>

          <div className="mt-4 flex items-center ">
            <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src="/images/manan_enzoprep.jpg" alt="" />
            <div className="ml-4">
              <p className="text-base  font-bold">Manan Kumar</p>
              <p className="mt-0.5 text-sm">Founder, EnzoPrep</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-white ">
          <div className="">
            <blockquote className="">
              <p className="text-lg leading-relaxed">"I highly recommend uInvented to anyone in need of top-quality website design and development services. They truly know their stuff, and they deliver results that speak for themselves."</p>
            </blockquote>
          </div>

          <div className="mt-4 flex items-center">
            <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src="/images/ashish_samsung.jpg" alt="" />
            <div className="ml-4">
              <p className="text-base font-bold">Ashish Bhaskar</p>
              <p className="text-blue-90 mt-0.5 text-sm">SDE, Samsung </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

    </>
  );
};
