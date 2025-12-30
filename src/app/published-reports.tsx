import { useState } from "react";
import { Card, CardContent } from "components/ui/card";
import { Avatar, AvatarFallback } from "components/ui/avatar";
import { REPORTS_ICONS } from "constants/images";
import { cn } from "lib/utils";

interface PublishedReport {
  id: string;
  type: string;
  date: string;
  companyName: string;
  nse: string;
  bse: string;
  metrics: {
    reached: number;
    viewed: number;
    engaged: number;
    reachedColor: string;
  };
  author: {
    name: string;
    initials: string;
    avatarColor: string;
  };
  publishedDate: string;
}

const publishedReports: PublishedReport[] = [
  {
    id: "1",
    type: "Initiating Coverage",
    date: "01 Dec, 2025",
    companyName: "Reliance Industries",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    metrics: {
      reached: 410,
      viewed: 312,
      engaged: 4,
      reachedColor: "#059669",
    },
    author: {
      name: "Darlene Robertson",
      initials: "DR",
      avatarColor: "#ec5446",
    },
    publishedDate: "11 Dec, 2025",
  },
  {
    id: "2",
    type: "Technical",
    date: "01 Dec, 2025",
    companyName: "Tata Consultancy",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    metrics: {
      reached: 203,
      viewed: 96,
      engaged: 12,
      reachedColor: "#f59e0b",
    },
    author: {
      name: "Darlene Robertson",
      initials: "DR",
      avatarColor: "#f0b006",
    },
    publishedDate: "11 Dec, 2025",
  },
  {
    id: "3",
    type: "Techno-Funda",
    date: "01 Dec, 2025",
    companyName: "HDFC Bank",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    metrics: {
      reached: 410,
      viewed: 169,
      engaged: 24,
      reachedColor: "#059669",
    },
    author: {
      name: "Ronald Richards",
      initials: "RR",
      avatarColor: "#b860b5",
    },
    publishedDate: "11 Dec, 2025",
  },
  {
    id: "4",
    type: "Techno-Funda",
    date: "01 Dec, 2025",
    companyName: "Infosys",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    metrics: {
      reached: 90,
      viewed: 44,
      engaged: 3,
      reachedColor: "#059669",
    },
    author: {
      name: "Ronald Richards",
      initials: "RR",
      avatarColor: "#b860b5",
    },
    publishedDate: "11 Dec, 2025",
  },
  {
    id: "5",
    type: "Initiating Coverage",
    date: "01 Dec, 2025",
    companyName: "ICICI Bank",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    metrics: {
      reached: 522,
      viewed: 350,
      engaged: 3,
      reachedColor: "#059669",
    },
    author: {
      name: "Darlene Robertson",
      initials: "DR",
      avatarColor: "#ec5446",
    },
    publishedDate: "11 Dec, 2025",
  },
  {
    id: "6",
    type: "Technical",
    date: "01 Dec, 2025",
    companyName: "Bharti Airtel",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    metrics: {
      reached: 90,
      viewed: 203,
      engaged: 12,
      reachedColor: "#dc2626",
    },
    author: {
      name: "Darlene Robertson",
      initials: "DR",
      avatarColor: "#f0b006",
    },
    publishedDate: "11 Dec, 2025",
  },
];

const timeFilterOptions = ["All", "Last 7 days", "Last 30 days", "Last 6 months", "This year"];

interface PublishedReportsProps {
  onTabChange?: (tab: "analyst-hub" | "published-reports") => void;
}

function PublishedReports({ onTabChange }: PublishedReportsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex flex-col items-start relative size-full bg-[#f4f8fb]">
      <div className="bg-white border-b border-[#f1f4f9] flex items-center justify-between pl-7 pr-5 py-3 relative shrink-0 w-full">
        <h2 className="text-[#2f5491] text-lg font-semibold leading-[1.3]">
          Research & Insights
        </h2>
        <div className="flex gap-3.5 items-center">
          <div className="border border-[#cbd5e1] border-solid flex gap-2 h-9 items-center px-3 py-0 rounded-[10px] w-[420px]">
            <div className="relative shrink-0 size-5">
              <img alt="Search" className="block max-w-none size-full" src={REPORTS_ICONS.SEARCH} />
            </div>
            <input
              type="text"
              placeholder="Search HNIs, Reports"
              className="flex-1 text-[#878d99] text-sm leading-6 bg-transparent border-0 outline-none"
            />
          </div>
          <div className="border border-[#cbd5e1] border-solid flex items-center justify-center rounded-[10px] shrink-0 size-9">
            <div className="relative shrink-0 size-5">
              <img alt="Filter" className="block max-w-none size-full" src={REPORTS_ICONS.FILTER} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start pb-10 pt-5 px-7 w-full h-full overflow-x-hidden">
        <div className="flex gap-5 items-center w-full">
          <div className="border-b border-[rgba(66,82,110,0.3)] flex gap-5 items-start overflow-clip">
            <button
              onClick={() => onTabChange?.("analyst-hub")}
              className="flex gap-2 h-8 items-center justify-center px-0 py-2"
            >
              <span className="text-black text-[13px] font-medium leading-none uppercase">
                Analyst hub
              </span>
              <div className="flex items-center justify-center px-2 py-1.5 rounded-[40px]" style={{ backgroundImage: "linear-gradient(65.6717deg, rgb(34, 84, 165) 0%, rgb(61, 110, 190) 100%)" }}>
                <span className="text-white text-[10px] font-medium leading-none uppercase">New</span>
              </div>
            </button>
            <button
              onClick={() => onTabChange?.("published-reports")}
              className="border-[#ff7553] border-b-2 flex h-8 items-center justify-center px-0 py-2"
            >
              <span className="text-[#ff7553] text-[13px] font-bold leading-none uppercase">
                published reports
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-[#2f5491] text-xl font-semibold leading-[1.25]">
              Published Reports ({publishedReports.length})
            </h3>
            <div className="flex gap-2 items-center">
              {timeFilterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "bg-white border border-solid flex items-center justify-center px-3 py-1 rounded-md text-xs leading-[1.3]",
                    activeFilter === filter
                      ? "border-[#2f5491] text-[#2f5491] font-semibold"
                      : "border-[#e2e8f0] text-[#15253f] font-normal"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="flex gap-4 items-start w-full">
              {publishedReports.slice(0, 3).map((report) => (
                <Card key={report.id} className="basis-0 grow min-h-0 min-w-0 bg-white border border-[rgba(47,84,145,0.15)] border-solid rounded-xl">
                  <CardContent className="p-3.5 flex flex-col gap-[14px]">
                    <div className="bg-[#f4f8fb] border-[0.4px] border-[rgba(47,84,145,0.2)] border-solid flex items-center justify-between px-2 py-1.5 rounded">
                      <p className="text-[#2e518a] text-[10px] font-medium leading-normal uppercase">
                        {report.type}
                      </p>
                      <p className="text-[#2e518a] text-[10px] font-medium leading-normal uppercase">
                        {report.date}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#15253f] text-base font-semibold leading-normal">
                        {report.companyName}
                      </p>
                      <div className="flex gap-1.25 items-center">
                        <p className="text-[#878d99] text-xs leading-normal">{report.nse}</p>
                        <div className="relative shrink-0 size-[3px]">
                          <img alt="" className="block max-w-none size-full" src={REPORTS_ICONS.ELLIPSE_464} />
                        </div>
                        <p className="text-[#878d99] text-xs leading-normal">{report.bse}</p>
                      </div>
                    </div>
                    <div className="bg-[#fbfdff] border-[0.6px] border-[rgba(205,215,230,0.5)] border-solid flex flex-col items-start px-3 py-2 rounded-lg">
                      <div className="flex gap-4 items-center w-full">
                        <div className="flex flex-col gap-1 grow">
                          <p
                            className="text-sm font-semibold leading-none"
                            style={{ color: report.metrics.reachedColor }}
                          >
                            {report.metrics.reached}
                          </p>
                          <p className="text-[#334155] text-xs leading-none">Reached</p>
                        </div>
                        <div className="flex flex-col gap-1 grow">
                          <p className="text-[#334155] text-sm font-semibold leading-none">
                            {report.metrics.viewed}
                          </p>
                          <p className="text-[#334155] text-xs leading-none">Viewed</p>
                        </div>
                        <div className="flex flex-col gap-1 grow">
                          <p className="text-[#334155] text-sm font-semibold leading-none">
                            {report.metrics.engaged}
                          </p>
                          <p className="text-[#334155] text-xs leading-none">Engaged</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1.5 items-center">
                        <Avatar className="size-6">
                          <AvatarFallback
                            className="text-white text-[9px] font-bold leading-3 bg-transparent"
                            style={{ backgroundColor: report.author.avatarColor }}
                          >
                            {report.author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-[#1f2937] text-xs font-medium leading-5">
                          {report.author.name}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="border-t border-[#e8eef3] flex flex-col items-center px-3.5 py-2.5">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-[#2f5491] text-[10px] font-normal leading-normal">
                        Published on {report.publishedDate}
                      </p>
                      <button className="flex gap-1 items-center">
                        <span className="text-[#ff7553] text-[10px] font-semibold leading-normal">
                          View Details
                        </span>
                        <div className="flex flex-col items-center justify-center size-3">
                          <div className="h-[5.334px] w-[8.668px]">
                            <img alt="Chevron" className="block max-w-none size-full" src={REPORTS_ICONS.CHEVRON_RIGHT_PUBLISHED} />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex gap-4 items-start w-full">
              {publishedReports.slice(3).map((report) => (
                <Card key={report.id} className="basis-0 grow min-h-0 min-w-0 bg-white border border-[rgba(47,84,145,0.15)] border-solid rounded-xl">
                  <CardContent className="p-3.5 flex flex-col gap-[14px]">
                    <div className="bg-[#f4f8fb] border-[0.4px] border-[rgba(47,84,145,0.2)] border-solid flex items-center justify-between px-2 py-1.5 rounded">
                      <p className="text-[#2e518a] text-[10px] font-medium leading-normal uppercase">
                        {report.type}
                      </p>
                      <p className="text-[#2e518a] text-[10px] font-medium leading-normal uppercase">
                        {report.date}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#15253f] text-base font-semibold leading-normal">
                        {report.companyName}
                      </p>
                      <div className="flex gap-1.25 items-center">
                        <p className="text-[#878d99] text-xs leading-normal">{report.nse}</p>
                        <div className="relative shrink-0 size-[3px]">
                          <img alt="" className="block max-w-none size-full" src={REPORTS_ICONS.ELLIPSE_464} />
                        </div>
                        <p className="text-[#878d99] text-xs leading-normal">{report.bse}</p>
                      </div>
                    </div>
                    <div className="bg-[#fbfdff] border-[0.6px] border-[rgba(205,215,230,0.5)] border-solid flex flex-col items-start px-3 py-2 rounded-lg">
                      <div className="flex gap-4 items-center w-full">
                        <div className="flex flex-col gap-1 grow">
                          <p
                            className="text-sm font-semibold leading-none"
                            style={{ color: report.metrics.reachedColor }}
                          >
                            {report.metrics.reached}
                          </p>
                          <p className="text-[#334155] text-xs leading-none">Reached</p>
                        </div>
                        <div className="flex flex-col gap-1 grow">
                          <p className="text-[#334155] text-sm font-semibold leading-none">
                            {report.metrics.viewed}
                          </p>
                          <p className="text-[#334155] text-xs leading-none">Viewed</p>
                        </div>
                        <div className="flex flex-col gap-1 grow">
                          <p className="text-[#334155] text-sm font-semibold leading-none">
                            {report.metrics.engaged}
                          </p>
                          <p className="text-[#334155] text-xs leading-none">Engaged</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1.5 items-center">
                        <Avatar className="size-6">
                          <AvatarFallback
                            className="text-white text-[9px] font-bold leading-3 bg-transparent"
                            style={{ backgroundColor: report.author.avatarColor }}
                          >
                            {report.author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-[#1f2937] text-xs font-medium leading-5">
                          {report.author.name}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="border-t border-[#e8eef3] flex flex-col items-center px-3.5 py-2.5">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-[#2f5491] text-[10px] font-normal leading-normal">
                        Published on {report.publishedDate}
                      </p>
                      <button className="flex gap-1 items-center">
                        <span className="text-[#ff7553] text-[10px] font-semibold leading-normal">
                          View Details
                        </span>
                        <div className="flex flex-col items-center justify-center size-3">
                          <div className="h-[5.334px] w-[8.668px]">
                            <img alt="Chevron" className="block max-w-none size-full" src={REPORTS_ICONS.CHEVRON_RIGHT_PUBLISHED} />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishedReports;

