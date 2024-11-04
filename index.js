import { VidstackPlayer, VidstackPlayerLayout } from "vidstack/global/player";

const player = await VidstackPlayer.create({
  target: "#target",
  title: "Sổ Gà Trực Tiếp",
  src: "https://customer-6lidy1ydi3t5txqf.cloudflarestream.com/aa70a8af0f5484ffe42734d7f821c093/manifest/video.m3u8",
  poster: "./assets/thumbnail.webp",
  layout: new VidstackPlayerLayout({
    thumbnails: "./assets/thumbnail.webp",
  }),
});

player.onplaying = () => {
  setInterval(() => {
    countViewer();
  }, 60000);
};

const viewerEndpoint =
  "https://customer-6lidy1ydi3t5txqf.cloudflarestream.com/aa70a8af0f5484ffe42734d7f821c093/views";
const viewerContainer = document.getElementById("viewer_count");

const countViewer = async () => {
  const response = await fetch(viewerEndpoint, {
    method: "GET",
  });
  const data = await response.json();
  viewerContainer.innerHTML = data.liveViewers;
};
