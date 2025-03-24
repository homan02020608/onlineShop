import CategoryNavbar from "@/components/CategoryNavbar";
import MultiCarousel from "@/components/MultiCarousel";

export default function Home() {

  return (
    <div className="p-6 ">
      <div className="flexCenter">
        <CategoryNavbar />
      </div>
      <MultiCarousel />

    </div>
  );
}
