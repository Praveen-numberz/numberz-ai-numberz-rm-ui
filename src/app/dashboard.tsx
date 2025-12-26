import { PlusIcon, CurrencyDollarIcon, CalendarIcon, EnvelopeIcon, ChartBarIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import MetricCard from "components/atoms/metric-card";
import ActionCard from "components/molecules/action-card";
import FollowUpList from "components/molecules/follow-up-list";
import AlertCard from "components/molecules/alert-card";
import CampaignCard from "components/molecules/campaign-card";
import AppointmentSection from "components/molecules/appointment-section";
import RepositorySection from "components/molecules/repository-section";
import ExploreProducts from "components/molecules/explore-products";
import { IMAGES } from "constants/images";

function Dashboard() {
  const handleCreateCampaign = () => {
    console.log("Create campaign clicked");
  };

  const followUpItems = [
    { name: "Leslie Alexander", date: "Sep 14, 2025" },
    { name: "Leslie Alexander", date: "Sep 14, 2025" },
    { name: "Leslie Alexander", date: "Sep 14, 2025" },
    { name: "Leslie Alexander", date: "Sep 14, 2025" },
    { name: "Leslie Alexander", date: "Sep 14, 2025" },
  ];

  const alertItems = [
    {
      title: "3 Underperforming investments",
      description: "03 clients may be effected",
      type: "warning" as const,
    },
    {
      title: "High Market Volatility",
      description: "03 clients may be effected",
      type: "warning" as const,
    },
    {
      title: "2 High performing investments",
      description: "08 clients can be suggested for the investment",
      type: "success" as const,
    },
  ];

  const campaigns = [
    {
      title: "Brief Fundamental of AAPL",
      reached: 140,
      viewed: 90,
      meetings: 32,
      date: "20 Sep, 2025",
      reachedColor: "#f59e0b",
    },
    {
      title: "Technical Analysis of MSFT",
      reached: 410,
      viewed: 250,
      meetings: 12,
      date: "20 Sep, 2025",
      reachedColor: "#059669",
    },
    {
      title: "Brief Fundamental of META",
      reached: 320,
      viewed: 210,
      meetings: 23,
      date: "19 Sep, 2025",
      reachedColor: "#f97316",
    },
  ];

  const appointments = [
    { name: "Rahul Gada", avatarUrl: IMAGES.FRAME_1984078457 },
    { name: "Maharaja Rahul", avatarUrl: IMAGES.FRAME_1984078458 },
  ];

  const repositoryItems = [
    { name: "Infosys India Pvt Limited", imageUrl: IMAGES.IMAGE_1851, isNew: true },
    { name: "IBM India", imageUrl: IMAGES.IMAGE_1852, isNew: true },
  ];

  return (
    <div className="flex flex-col gap-8 items-center pb-10 pt-5 px-7 relative size-full bg-gray-50">
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <h2 className="text-[#2f5491] text-[22px] font-semibold leading-[1.25] text-center text-nowrap">
            Welcome, Jose!
          </h2>
          <button
            onClick={handleCreateCampaign}
            className="flex gap-2 items-center justify-center pl-1.5 pr-3 py-1.5 relative rounded-lg shrink-0 bg-gradient-to-r from-[#f65e39] to-[#ff7553]"
          >
            <div className="overflow-clip relative shrink-0 size-5">
              <PlusIcon className="size-full text-white" />
            </div>
            <p className="text-white text-xs font-medium leading-[1.25] text-center text-nowrap">
              Create New Campaign
            </p>
          </button>
        </div>
        <div className="flex gap-3 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-3 grow items-start min-h-0 min-w-0 relative shrink-0">
            <div className="flex gap-0.5 items-start justify-center overflow-clip relative rounded-xl shrink-0 w-full">
              <MetricCard
                label="Total AUM"
                value="$125.7M"
                change="+2.3% last month"
                changeType="positive"
                icon={CurrencyDollarIcon}
                className="basis-0 grow min-h-0 min-w-0"
              />
              <MetricCard
                label="Upcoming Meetings"
                value="14"
                change="Next 5 Days"
                icon={CalendarIcon}
                className="basis-0 grow min-h-0 min-w-0"
              />
              <MetricCard
                label="Pending Follow-ups"
                value="38"
                change="Next 5 Days"
                icon={EnvelopeIcon}
                className="basis-0 grow min-h-0 min-w-0"
              />
              <MetricCard
                label="Avg. Engagement"
                value="68%"
                change="-1.5% last campaign"
                changeType="negative"
                icon={ChartBarIcon}
                className="basis-0 grow min-h-0 min-w-0"
              />
            </div>
            <div className="flex gap-0.5 items-start overflow-clip relative rounded-xl shrink-0 w-full">
              <FollowUpList
                title="Follow-Up Pending for Long"
                items={followUpItems}
                className="basis-0 grow min-h-0 min-w-0"
              />
              <AlertCard
                title="Portfolio - Critical Alerts"
                items={alertItems}
                className="basis-0 grow min-h-0 min-w-0"
              />
            </div>
          </div>
          <div className="bg-white flex flex-col items-start overflow-hidden relative rounded-xl self-stretch shrink-0 w-[370px]">
            <ActionCard
              title="Setup Campaigns"
              description="Create and launch targeted campaigns to engage your clients effectively."
              imageUrl={IMAGES.BEEP_BEEP_SMALL_VEHICLE}
              imageBgColor="#fffae6"
              actionLabel="Create"
              actionIcon={PlusIcon}
              onAction={handleCreateCampaign}
            />
            <ActionCard
              title="What-If?"
              description="Design a structured scenario simulator to maximise client benefits."
              imageUrl={IMAGES.BEEP_BEEP_TRAFFIC_LIGHT}
              imageBgColor="#e6fcff"
              actionLabel="Initiate"
              actionIcon={PlusIcon}
            />
            <ActionCard
              title="Setup Campaigns"
              description="Design a structured conversation flow to engage clients seamlessly."
              imageUrl={IMAGES.BEEP_BEEP_SIGHTSEEING}
              imageBgColor="#e3fcef"
              actionLabel="Prepare"
              actionIcon={BookOpenIcon}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-[1136px]">
        <h3 className="text-[#15253f] text-lg font-bold leading-[1.3] text-nowrap">
          Recent Campaign
        </h3>
        <div className="flex gap-0.5 items-start justify-center overflow-clip relative rounded-xl shrink-0 w-full">
          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              title={campaign.title}
              reached={campaign.reached}
              viewed={campaign.viewed}
              meetings={campaign.meetings}
              date={campaign.date}
              reachedColor={campaign.reachedColor}
              className="basis-0 grow min-h-0 min-w-0"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        <h3 className="text-[#15253f] text-lg font-bold leading-[1.3] text-nowrap">
          Appointments and Repository
        </h3>
        <div className="flex gap-0.5 items-start justify-center overflow-clip relative rounded-xl shrink-0 w-full">
          <AppointmentSection
            title="Today's Appointments"
            source="Google Calendar"
            appointments={appointments}
            date="02 Feb 2025, Monday"
            className="basis-0 grow min-h-0 min-w-0"
          />
          <RepositorySection
            title="Research Repository"
            subtitle="2 new reports available"
            items={repositoryItems}
            className="basis-0 grow min-h-0 min-w-0"
          />
          <ExploreProducts
            title="Explore New Products"
            description="Stay updated on the latest products to offer better solutions to clients."
            imageUrl={IMAGES.BEEP_BEEP_UFO}
            className="basis-0 grow min-h-0 min-w-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

