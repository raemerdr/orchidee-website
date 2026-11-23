"use client";

import Image from "next/image";
import { useState } from "react";
import { video } from "@/lib/site";
import { PlayIcon } from "./Icons";

// Large rounded video with a poster. `video.src` can be a file in /public (mp4/webm)
// or a YouTube / Vimeo link. Until the client's film exists, the poster says "Video folgt in Kürze".
function embedUrl(src: string) {
  const yt = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;
  const vimeo = src.match(/vimeo\.com\/(\d+)(?:\/(\w+))?/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1${vimeo[2] ? `&h=${vimeo[2]}` : ""}`;
  return null;
}

export default function VideoFrame() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = video.src !== "";
  const embed = hasVideo ? embedUrl(video.src) : null;

  if (playing && hasVideo) {
    return (
      <div className="video-frame is-playing">
        {embed ? (
          <iframe src={embed} title={video.caption} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        ) : (
          <video src={video.src} poster={video.poster} controls autoPlay playsInline />
        )}
      </div>
    );
  }

  return (
    <div className="video-frame">
      <Image src={video.poster} alt="" fill sizes="(max-width: 1440px) 100vw, 1376px" quality={75} />
      {hasVideo ? (
        <button type="button" className="video-play" onClick={() => setPlaying(true)} aria-label={`Video abspielen: ${video.caption}`}>
          <PlayIcon size={34} />
        </button>
      ) : (
        <span className="video-soon"><PlayIcon size={22} /> Video folgt in Kürze</span>
      )}
      <p className="video-caption">{video.caption}</p>
    </div>
  );
}
