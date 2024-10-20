import JournalGrid from '@/components/Journals/JournalGrid/JournalGrid'
import Journal from '@/components/Journals/MainComponent/Journal'
import SwiperComp from '@/components/shared/Swiper/SwiperComp'

const JournalPageFragment = () => {
  return (
    <>
      <Journal/>
      <JournalGrid/>
      <SwiperComp/>
    </>
  )
}

export default JournalPageFragment