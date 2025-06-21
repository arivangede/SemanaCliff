"use client";

import Carousel from "../ui/carousel";
import pics from "@/lib/Image";

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col-reverse items-center lg:flex-row">
      <div className="flex flex-col w-full max-w-2xl gap-2 p-8 text-white md:px-16">
        <h1 className="text-4xl font-bold md:text-6xl">
          About <span className="font-sacramento">Semana Cliff</span>
        </h1>
        <p>
          Nestled in the serene Dusun Semana, Ubud, Bali, Semana Cliff Homestay
          offers a tranquil escape amidst the island&apos;s lush landscapes and
          vibrant culture. Perched on a scenic cliff overlooking verdant rice
          fields and tropical forests, our homestay is a haven for travelers
          seeking peace, authenticity, and a deep connection with Bali&apos;s
          natural beauty.
        </p>
        <p>
          Inspired by the charm of Ubud, Semana Cliff was created to provide an
          intimate and authentic Balinese experience. Our vision is to blend
          modern comfort with traditional hospitality, ensuring every guest
          feels at home while immersed in the island&apos;s rich heritage. From
          the warm smiles of our local staff to the thoughtfully designed spaces
          reflecting Bali&apos;s artistry, every detail is crafted to make your
          stay unforgettable.
        </p>
        <p>
          Located just a short distance from Ubud&apos;s vibrant center, Semana
          Cliff offers the perfect balance of seclusion and accessibility.
          Explore nearby attractions like the iconic Monkey Forest, Tegalalang
          Rice Terraces, or Ubud&apos;s bustling art markets, then return to the
          calm of our homestay to unwind.
        </p>
        <p>
          At Semana Cliff, we are committed to sustainability and supporting the
          local community. We use eco-friendly practices and source local
          products to preserve Bali&apos;s natural beauty for generations to
          come. Whether you&apos;re here for a romantic getaway, a wellness
          retreat, or a cultural adventure, Semana Cliff is your gateway to the
          heart of Ubud.
        </p>
        <span>
          Come, discover the magic of Bali with us. Let Semana Cliff be your
          home away from home.
        </span>
      </div>
      <div className="relative w-full py-16 overflow-hidden">
        <Carousel slides={pics} />
      </div>
    </div>
  );
}
