import GoogleReviews from "./GoogleReviews";
import { googleReviews } from "@/lib/site";

// Phone-only rating card (a <div>, so it does not shift the desktop section order).
export default function MobileRating() {
  const rating = googleReviews.rating.toFixed(1).replace(".", ",");
  return (
    <div className="mrating" id="bewertung">
      <div className="wrap">
        <div className="mrating-card">
          <h2>{rating} von 5 Sternen bei Google</h2>
          <GoogleReviews />
        </div>
      </div>
    </div>
  );
}
