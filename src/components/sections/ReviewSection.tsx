import reviews from "@/lib/Reviews";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card";

export default function ReviewSection() {
  return (
    <div
      id="reviews"
      className="w-full h-[600px] bg-white flex flex-col justify-center items-center"
    >
      <DraggableCardContainer className="relative flex items-center justify-center w-full h-full gap-4 p-8 overflow-clip">
        <h1 className="absolute top-0 z-20 p-8 text-2xl text-gray-600 md:text-4xl font-cormorant-semibold">
          Guest Reviews
        </h1>
        <h1 className="text-4xl text-center text-gray-400 md:text-6xl font-cormorant-semibold">
          See what our guests are saying about their unforgettable stay with us!
        </h1>
        {reviews.map((review, idx) => (
          <DraggableCardBody key={idx} className={review.className}>
            <h3 className="text-xl font-cormorant-semibold text-foreground">
              {review.title}{" "}
              <span className="text-gray-400 font-cormorant">
                {review.date}
              </span>
            </h3>
            <p className="my-4 text-gray-600">{review.desc}</p>
            <div className="flex items-center justify-end gap-4">
              <span className="text-sm">{review.author}</span>|
              <span className="font-cormorant-semibold">{review.nation}</span>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
}
