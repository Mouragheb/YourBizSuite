import { useState, useEffect } from "react";

export default function VisionSection() {
  const [mobileBannerOpen, setMobileBannerOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden group border rounded-sm">
      {/* Background Image */}
      <img
        src="/vision.png"
        alt="YourBizSuite Vision"
        className="w-full h-[300px] sm:h-[700px] object-cover cursor-pointer"
        onClick={() => {
          if (window.innerWidth < 640) {
            setMobileBannerOpen(true);
          }
        }}
      />

      {/* Sliding Banner */}
      <div
        className={`
          absolute top-0 right-0 h-[300px] sm:h-full w-full sm:w-1/2 bg-[#162b3ee6] text-white px-3 sm:px-10 py-6 sm:py-12
          flex items-center justify-center sm:items-start sm:justify-start z-10 overflow-y-auto
          transition-transform duration-700 ease-in-out
          ${mobileBannerOpen ? "translate-x-0" : "translate-x-full"} sm:translate-x-full sm:group-hover:translate-x-0
        `}
        onClick={() => {
          if (window.innerWidth < 640) {
            setMobileBannerOpen(false);
          }
        }}
      >
        <div className="space-y-4 max-w-md text-left text-sm sm:text-base">
        <h2 className="text-xl sm:text-4xl font-bold text-yellow-400 mt-3 sm:mt-0">Our Vision</h2>
          <p className="text-[#dbeafe] leading-relaxed">
            At YourBizSuite, we envision a world where small business owners have the same level of clarity,
            control, and peace of mind that large enterprises enjoy &mdash; without the cost or complexity.
          </p>
          <p className="text-[#dbeafe] leading-relaxed">
            We&apos;re building tools that are simple enough to use without training, yet powerful enough to
            transform the way entrepreneurs work. Every product we build reflects our deep empathy for the
            real-life challenges of running a small business.
          </p>
          <p className="italic text-blue-200 mt-2">
            &ldquo;Empowering success &mdash; one tool, one business, one story at a time.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}