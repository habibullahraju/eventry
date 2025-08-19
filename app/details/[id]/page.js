import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/quereis";

export default async function DetailsPage({params: {id}}) {
  const eventInfo = await getEventById(id);
  console.log(eventInfo)
  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails description={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVenue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
}
