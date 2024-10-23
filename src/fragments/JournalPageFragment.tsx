import JournalGrid from "@/components/Journals/JournalGrid/JournalGrid";
import Journal from "@/components/Journals/MainComponent/Journal";
import FloatingHelpButton from "@/components/shared/FloatingHelpButton/FloatingHelpButton";
import SwiperComp from "@/components/shared/Swiper/SwiperComp";

const JournalPageFragment = () => {
  return (
    <>
      <Journal />
      <JournalGrid />
      <SwiperComp />
      <FloatingHelpButton />
    </>
  );
};

export default JournalPageFragment;
