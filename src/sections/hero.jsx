export default function Hero () {
  return (
    <section className="hero">
      <div className="wrapper-logo mx-auto my-0">
      </div>

      <div className="hero-image relative">

        <div className="text-wrapper mt-16 mb-10 w-full z-10 text-center flex flex-col items-center justify-center sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:m-0">
          <h2 className='py-2 px-4 text-lg sm:text-2xl md:text-4xl lg:text-6xl leading-snug bg-white inline-block lg:py-5 lg:px-20 '>
            Complimentary Transportation Will Be Provided
            <br />
            <span
              className={`
                text-sm sm:text-lg md:text-2xl lg:text-4xl
              `}
            >
              Please Book Your Airport Transportation at Your Earliest Convenience
            </span>
          </h2>
        </div>

        <img src="./imgs/hero-v2.webp" alt="Kanai resort pools at night, Riviera Maya, Cancún" className="w-full"/>

        <h1
          className={`
            text-center
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            text-gold
            my-20 sm:mb-28 lg:mb-32
          `}
        >
          Seyi&apos;s 4-0 Birthday Celebration
          <br />
          <span
            className={`
              text-sm sm:text-lg md:text-2xl lg:text-3xl
            `}
          >
            September 17-20th, 2026
          </span>
          <br />
          <span
            className={`
              text-sm sm:text-lg md:text-2xl lg:text-3xl
            `}
          >
            The Riviera Maya at Kanai Edition
          </span>
        </h1>
      </div>
    </section>
  )
}