import InstagramScroller from "./components/InstagramScroller";
import RoomScroller from "./components/RoomScroller";
import ColorSelector from "./components/ColorSelector";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import MeetBiom from "./components/MeetBiom";
import Subscribe from "./components/Subscribe";
import Video from "./components/Video";


function HomePage() {
  return (
    <>
      <Hero />
      <MeetBiom />
      <RoomScroller />
      <ColorSelector />
      <Testimonials />
      <Subscribe />
      <Video />
      <InstagramScroller />
    </>
  )
}

export default HomePage;
