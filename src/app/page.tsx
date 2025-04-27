import CategoryNavbar from "@/components/CategoryNavbar";
import MultiCarousel from "@/components/MultiCarousel";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="">
      <div className="flexCenter">
        <CategoryNavbar />
      </div>
      <MultiCarousel />
      <News/>
    </div>
  );
}
