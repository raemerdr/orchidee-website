import { googleReviews } from "@/lib/site";

const GoogleG = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
);

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden>
    <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
  </svg>
);

export default function GoogleReviews() {
  const { rating, count, url } = googleReviews;
  const ratingText = rating.toFixed(1).replace(".", ",");
  return (
    <a className="g-reviews" href={url} target="_blank" rel="noopener noreferrer"
       aria-label={`${ratingText} von 5 Sternen bei Google, ${count} Bewertungen`}>
      <span className="g-logo"><GoogleG /></span>
      <span className="g-body">
        <span className="g-top">
          <strong>{ratingText}</strong>
          <span className="g-stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} />)}</span>
        </span>
        <small>{count} Google-Bewertungen</small>
      </span>
    </a>
  );
}
