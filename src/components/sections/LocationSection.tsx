"use-clent";

export default function LocationSection() {
  return (
    <div
      id="location"
      className="flex flex-wrap items-center justify-center w-full gap-4 px-16 py-8 md:justify-between"
    >
      <div className="flex flex-col items-center justify-center text-white md:items-start">
        <h1 className="text-2xl md:text-6xl">Our Location</h1>
        <span className="text-center">
          Discover Your Perfect Getaway – Visit Us Today!
        </span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7032008423903!2d115.22999517507169!3d-8.52816859151455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d00772e6555%3A0x2eddf5e7960432d7!2sSemana%20Cliff!5e0!3m2!1sid!2sid!4v1750475355849!5m2!1sid!2sid"
        width="800"
        height="400"
        loading="lazy"
      ></iframe>
    </div>
  );
}
