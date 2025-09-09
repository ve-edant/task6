const PageTitle = ({ title, imageUrl }) => {
  return (
    <section className="w-full bg-[#01143e] text-white flex flex-col md:flex-row items-center md:items-stretch overflow-hidden">
      {/* Title Section */}
      <div className="flex-1 flex items-center justify-center md:justify-start px-6 py-12 md:px-0 md:pl-[140px] md:py-16">
        <div className="text-center md:text-left flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-left leading-snug max-w-2xl">
            {title}
          </h1>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>

      {/* Image Section (hidden on < md) */}
      <div className="hidden md:block w-3/8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-l-full overflow-hidden"
        />
      </div>
    </section>
  );
};

export default PageTitle;
