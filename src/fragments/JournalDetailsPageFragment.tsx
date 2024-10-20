import JournalSwiper from "@/components/Journals/JournalDetails/JournalSwiper/JournalSwiper"
import JournalHero from "@/components/Journals/JournalDetails/JournalHero/JournalHero"
import JournalParagraph from "@/components/Journals/JournalDetails/JournalLandingPage/JournalParagraph"
import FloatingButton from "@/components/Journals/JournalDetails/FloatingButton/FloatingButton"
import ImageGrid from "@/components/Journals/JournalDetails/ImageGrid/ImageGrid"
import SwiperComp from '@/components/shared/Swiper/SwiperComp'


const JournalDetailsPageFragment = () => {
  return (
    <>
      <JournalHero/>
      <JournalParagraph/>
      <JournalSwiper/>
      <FloatingButton/>
      <ImageGrid/>
      <SwiperComp/>
    </>
  )
}

export default JournalDetailsPageFragment