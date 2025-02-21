import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <section className="section4 flex flex-col w-full min-h-screen bg-[rgba(250,249,249,255)]">
      <h1
        className="font-bold text-[40px] roboto-mono leading-[57.65px] py-8 pl-[350px] pt-[150px] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400"
      >
        My Work Experience
      </h1>
      <div className="timeline2 py-12 flex flex-col gap-8 relative">
        <div className="absolute left-1/4 w-1 bg-[#61088A] h-full"></div>
        
        <div className="flex items-start gap-8 relative">
          <div className="w-1/4 text-right pr-6">
            <h3 className="text-[#61088A] roboto-mono font-medium">350.org</h3>
            <small className="roboto-mono">May, 2022 - Present</small>
          </div>
          <div className="w-3/4 pl-6 relative">
            <div className="absolute left-[-34px] w-6 h-6 bg-white border-4 border-[#9333ea] rounded-full"></div>
            <h3 className="roboto-mono text-[#61088A] font-medium">Product Support</h3>
            <p className="leading-[2.25]">
              This includes training internal teams and external clients, offering technical support,
              contributing to product<br /> development and testing, responding to inquiries and complaints,
              and monitoring interactions for product improvement.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-8 relative">
          <div className="w-1/4 text-right pr-6">
            <h3 className="text-[#61088A] roboto-mono font-medium">Pearl Impact Network</h3>
            <small className="roboto-mono">Jan 2021 - Present</small>
          </div>
          <div className="w-3/4 pl-6 relative">
            <div className="absolute left-[-34px] w-6 h-6 bg-white border-4 border-[#9333ea] rounded-full"></div>
            <h3 className="roboto-mono text-[#61088A] font-medium">Volunteer</h3>
            <p className="leading-[2.25]">
              I handle UI/UX tasks, write social media content, offer design suggestions,
              provide insights for progress, <br /> and design various interfaces and wireframes,
              including login pages and a blood checker app.
            </p>
          </div>
        </div>

        <div className="entry flex items-start gap-8 relative">
          <div className="w-1/4 text-right pr-6">
            <h3 className="text-[#61088A] roboto-mono font-medium">Ighub</h3>
            <small className="roboto-mono">Aug, 2018 - Jan, 2020</small>
          </div>
          <div className="w-3/4 pl-6 relative">
            <div className="absolute left-[-34px] w-6 h-6 bg-white border-4 border-[#9333ea] rounded-full"></div>
            <h3 className="roboto-mono text-[#61088A] font-medium">Web Dev & Content</h3>
            <p className="leading-[2.25]">
              This involves teaching/onboarding interns, supervising their progress, coordinating WordPress events,
              building client websites, <br /> generating social media content ideas,researching event speakers,
              managing Google My Business listings, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
