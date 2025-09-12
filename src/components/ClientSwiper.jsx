import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

const ClientSwiper = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSpeed] = useState(20);
  const wrapperRef = useRef(null);

  const clientLogos = [
    {
      name: "Google",
      url: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
    },
    {
      name: "Microsoft",
      url: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png",
    },
    {
      name: "Amazon",
      url: "https://logos-world.net/wp-content/uploads/2020/08/Amazon-Logo.png",
    },
    {
      name: "Apple",
      url: "https://logos-world.net/wp-content/uploads/2020/11/Apple-Logo.png",
    },
    {
      name: "Netflix",
      url: "https://logos-world.net/wp-content/uploads/2020/09/Netflix-Logo.png",
    },
    {
      name: "Spotify",
      url: "https://logos-world.net/wp-content/uploads/2021/02/Spotify-Logo.png",
    },
    {
      name: "Tesla",
      url: "https://logos-world.net/wp-content/uploads/2020/11/Tesla-Logo.png",
    },
    {
      name: "Airbnb",
      url: "https://logos-world.net/wp-content/uploads/2020/12/Airbnb-Logo.png",
    },
    {
      name: "Uber",
      url: "https://logos-world.net/wp-content/uploads/2020/11/Uber-Logo.png",
    },
    {
      name: "Adobe",
      url: "https://logos-world.net/wp-content/uploads/2020/09/Adobe-Logo.png",
    },
  ];

  const duplicatedLogos = [...clientLogos, ...clientLogos];

  useEffect(() => {
    if (isPlaying && wrapperRef.current) {
      wrapperRef.current.style.animation = `slide ${currentSpeed}s linear infinite`;
    } else if (wrapperRef.current) {
      wrapperRef.current.style.animation = "none";
    }
  }, [isPlaying, currentSpeed]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case " ":
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);


  const handlePrev = () => {
    if (wrapperRef.current) {
      const currentTransform =
        wrapperRef.current.style.transform || "translateX(0px)";
      const currentX = parseInt(currentTransform.match(/-?\d+/) || [0]);
      const newX = Math.min(currentX + 200, 0);
      wrapperRef.current.style.transform = `translateX(${newX}px)`;

      setTimeout(() => {
        if (wrapperRef.current) {
          wrapperRef.current.style.transform = "";
          if (isPlaying) {
            wrapperRef.current.style.animation = `slide ${currentSpeed}s linear infinite`;
          }
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (wrapperRef.current) {
      const currentTransform =
        wrapperRef.current.style.transform || "translateX(0px)";
      const currentX = parseInt(currentTransform.match(/-?\d+/) || [0]);
      const newX = currentX - 200;
      wrapperRef.current.style.transform = `translateX(${newX}px)`;

      setTimeout(() => {
        if (wrapperRef.current) {
          wrapperRef.current.style.transform = "";
          if (isPlaying) {
            wrapperRef.current.style.animation = `slide ${currentSpeed}s linear infinite`;
          }
        }
      }, 300);
    }
  };
  return (
    <div className="lg:mx-[140px] p-8 md:p-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Trusted by 400+ Leading Brands
        </h2>
        <p className="text-gray-600 text-lg">
          Join the world's most innovative companies who trust our solutions
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-inner">
        <style jsx>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div
          ref={wrapperRef}
          className="flex hover:pause-animation"
          style={{
            width: "calc(200% + 2.5rem)",
            animation: isPlaying
              ? `slide ${currentSpeed}s linear infinite`
              : "none",
          }}
          onMouseEnter={() => {
            if (wrapperRef.current) {
              wrapperRef.current.style.animationPlayState = "paused";
            }
          }}
          onMouseLeave={() => {
            if (wrapperRef.current && isPlaying) {
              wrapperRef.current.style.animationPlayState = "running";
            }
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-none w-50 flex items-center justify-center p-5 transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-w-36 max-h-20 w-auto h-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSwiper;
