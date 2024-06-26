import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect , useState } from "react";

export const Portfolio = () => {
  const Projects = [
    {
      id: "0",
      title: "Personal Portfolio",
      description:
        "Personal Portfolio showcasing the work of Founders and Designers built with NextJS",
      link: "/",
      image: "/images/meet.png",
      bgColor: "#F0E4FC",
      controlColor: "#8960b5",
    },
    {
      id: "2",
      title: "GMAT Portal",
      description:
        "This is a full stack portal designed to attempt GMAT mocks, and enhance GMAT scores",
      link: "https://gmatplatform.vercel.app/",
      image: "/images/gmatprep.png",
      bgColor: "#f0f0f2",
      controlColor: "#00252F",
    },
    {
      id: "1",
      title: "Elekrity",
      description:
        "Beat procrastination and get your personal goals completed as planned!",
      link: "https://www.elekrity.com/",
      image: "/images/elekrity2.svg",
      bgColor: "#9df5fd",
      controlColor: "#0129FF",
    },
    {
      id: "3",
      title: "Satpura",
      description: "Pushing Boundaries On multiple Ideas And Craft",
      link: "https://satpura-house.vercel.app/",
      image: "/images/satpura.png",
      bgColor: "#f0aab1",
      controlColor: "#cc646e",
    }
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = null;
  useEffect(() => {
    intervalId = setInterval(() => {
        setCurrentIndex(index => (index + 1) % Projects.length === 0 ? 0 : index + 1);
    }, 2000);
    return () => clearInterval(intervalId);
}, [currentIndex]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="min-h-[1rem] mt-[12rem] mb-[25rem] xl:mt-[15rem] xl:mb-[32rem] bg-black relative ">
      <div className="bg-black" style={{ scrollSnapType: "x mandatory" }}>
        {Projects.map((project, id) => (
          <div key={id}>
            <input
              className="sr-only peer"
              type="radio"
              name="carousel"
              checked={currentIndex === id}

            />

            {/* content #id+1 */}
            <div
              className={
                "2xl:container min-w-[80%]  md:mx-auto absolute top-1/3 left-1/2  transform -translate-x-1/2 -translate-y-1/3  rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0 "
              }
            >
              <div
                className={
                  "py-2 flex rounded-[2rem] flex-wrap-reverse md:flex-nowrap lg:flex-row mx-auto transition ease-in-out duration-700 scale-[1]  hover:scale-[0.99]  max-w-screen-xl xl:max-w-screen-2xl  text-black row align-baseline "
                }
                style={{
                  backgroundColor: `${project.bgColor}`,
                  position: "static",
                }}
              >
                <div className="  p-10  md:mt-[15rem] xl:mt-[27rem]">
                  <p className="max-w-md text-3xl md:text-5xl font-semibold ">
                    {project.title}
                  </p>
                  <p className=" text-secondary text-xl md:text-2xl  mt-3">
                    {project.description}
                  </p>
                  <button
                    onClick={() => openInNewTab(project.link)}
                    className={
                      " button1 mt-10 px-8 py-2 rounded k text-md xl:text-xl bg-black  font-bold  "
                    }
                    style={{ backgroundColor: `${project.bgColor}` }}
                  >
                    View Project
                  </button>
                </div>
                <div className=" container  rounded-[2rem]  ">
                  <div
                    style={{
                      minHeight: "15rem",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      className=" container h-full rounded-tl-[2rem] sm:rounded-br-[2rem] sm:rounded-tl-[0rem] rounded-tr-[2rem]"
                      src={project.image} // Route of the image file
                      layout="fill"
                      alt="Photo of Project"
                      objectFit="contain"
                    />
                  </div>
                </div>
                {/* controls */}
                <div className="absolute top-1/2 w-full flex justify-between z-20">
                  <label
                    // onClick={(e)=>e.preventDefault()}
                    htmlFor={`carousel-${id % Projects.length}`}
                    className={`inline-block cursor-pointer -translate-x-5   bg-white rounded-full shadow-md active:translate-y-0.5`}
                    style={{ color: `${project.controlColor}` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <label
                    // onClick={(e)=>e.preventDefault()}
                    htmlFor={`carousel-${(id + 2) % Projects.length}`}
                    className={`inline-block cursor-pointer   translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5`}
                    style={{ color: `${project.controlColor}` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
