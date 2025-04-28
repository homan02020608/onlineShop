import CategoryNavbar from "@/components/CategoryNavbar";
import MultiCarousel from "@/components/MultiCarousel";
import NewItemList from "@/components/NewItemList";
import News from "@/components/News";
import RecentViewedItemList from "@/components/RecentViewedItemList";

export default function Home() {
  return (
    <div className="my-10 ">
      <div className="flexCenter ">
        <CategoryNavbar />
      </div>
      <MultiCarousel />
      <News/>
      <NewItemList />
      <RecentViewedItemList />
    </div>
  );
}
