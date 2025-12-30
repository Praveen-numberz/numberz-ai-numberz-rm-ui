import { useState } from "react";
import { Card, CardContent } from "components/ui/card";
import { Avatar, AvatarFallback } from "components/ui/avatar";
import { REPORTS_ICONS } from "constants/images";
import { cn } from "lib/utils";
import PublishModal from "components/organisms/publish-modal";

interface Report {
  id: string;
  type: string;
  date: string;
  companyName: string;
  nse: string;
  bse: string;
  author: {
    name: string;
    initials: string;
    avatarColor: string;
  };
  isPublished?: boolean;
}

const reports: Report[] = [
  {
    id: "1",
    type: "Initiating Coverage",
    date: "01 Dec, 2025",
    companyName: "Aditya Birla Capital Ltd",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Cameron Williamson",
      initials: "CW",
      avatarColor: "#1d79e2",
    },
  },
  {
    id: "2",
    type: "Technical",
    date: "01 Dec, 2025",
    companyName: "Adani Green",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Darlene Robertson",
      initials: "DR",
      avatarColor: "#f0b006",
    },
  },
  {
    id: "3",
    type: "Techno-Funda",
    date: "01 Dec, 2025",
    companyName: "SBI Bank",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Ronald Richards",
      initials: "RR",
      avatarColor: "#b860b5",
    },
  },
  {
    id: "4",
    type: "technical",
    date: "01 Dec, 2025",
    companyName: "Bajaj Finance Ltd",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Kathryn Murphy",
      initials: "KM",
      avatarColor: "#2e9563",
    },
  },
  {
    id: "5",
    type: "technical",
    date: "01 Dec, 2025",
    companyName: "Happiest Minds Technolo...",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Darlene Robertson",
      initials: "DR",
      avatarColor: "#ec5446",
    },
  },
  {
    id: "6",
    type: "technical",
    date: "01 Dec, 2025",
    companyName: "Indian Railway Ctrng nd...",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Esther Howard",
      initials: "EH",
      avatarColor: "#1d79e2",
    },
  },
  {
    id: "7",
    type: "Brief Fundamental",
    date: "01 Dec, 2025",
    companyName: "NTPC Ltd",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Ralph Edwards",
      initials: "RR",
      avatarColor: "#28a0c8",
    },
  },
  {
    id: "8",
    type: "technical",
    date: "01 Dec, 2025",
    companyName: "Vodafone Idea Limited",
    nse: "NSE:IDEA",
    bse: "BSE: 532822",
    author: {
      name: "Kathryn Murphy",
      initials: "KM",
      avatarColor: "#2e9563",
    },
    isPublished: true,
  },
];

const filterOptions = ["All", "Initiating Coverage", "Technical", "Techno-Funda", "Brief Fundamental"];

interface AnalystHubProps {
  onTabChange?: (tab: "analyst-hub" | "published-reports") => void;
}

function AnalystHub({ onTabChange }: AnalystHubProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const filteredReports = activeFilter === "All" 
    ? reports 
    : reports.filter((report) => report.type.toLowerCase() === activeFilter.toLowerCase());

  const handlePublishClick = (report: Report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

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
              className="border-[#ff7553] border-b-2 flex gap-2 h-8 items-center justify-center px-0 py-2"
            >
              <span className="text-[#ff7553] text-[13px] font-bold leading-none uppercase">
                Analyst hub
              </span>
              <div className="flex items-center justify-center px-2 py-1.5 rounded-[40px]" style={{ backgroundImage: "linear-gradient(65.6717deg, rgb(34, 84, 165) 0%, rgb(61, 110, 190) 100%)" }}>
                <span className="text-white text-[10px] font-medium leading-none uppercase">New</span>
              </div>
            </button>
            <button
              onClick={() => onTabChange?.("published-reports")}
              className="flex h-8 items-center justify-center px-0 py-2"
            >
              <span className="text-black text-[13px] font-medium leading-none uppercase">
                published reports
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-[#2f5491] text-xl font-semibold leading-[1.25]">
              Latest Reports ({filteredReports.length})
            </h3>
            <div className="flex gap-2 items-center">
              {filterOptions.map((filter) => (
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
              {filteredReports.slice(0, 4).map((report) => (
                <Card key={report.id} className="basis-0 grow min-h-0 min-w-0 max-w-[336px] bg-white border border-[rgba(47,84,145,0.15)] border-solid rounded-xl">
                  <CardContent className="p-4 flex flex-col gap-4">
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
                  <div className="border-t border-[#e8eef3] flex flex-col items-center px-3.5 py-2">
                    <div className="flex items-center justify-between w-full">
                      <button className="flex gap-1 items-center">
                        <span className="text-[#2f5491] text-[10px] font-semibold leading-normal">
                          View Report
                        </span>
                        <div className="flex flex-col items-center justify-center size-3">
                          <div className="h-[5.334px] w-[8.668px]">
                            <img alt="Chevron" className="block max-w-none size-full" src={REPORTS_ICONS.CHEVRON_RIGHT_SMALL} />
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={() => handlePublishClick(report)}
                        className={cn(
                          "border border-[#ff7553] border-solid flex gap-1 items-center pl-2.5 pr-2 py-1.5 rounded",
                          report.isPublished ? "bg-[#ff7553]" : ""
                        )}
                      >
                        <span
                          className={cn(
                            "text-[10px] font-semibold leading-normal",
                            report.isPublished ? "text-white" : "text-[#ff7553]"
                          )}
                        >
                          {report.isPublished ? "Publish Report" : "Publish"}
                        </span>
                        <div className="relative shrink-0 size-3">
                          <img
                            alt="Publish"
                            className="block max-w-none size-full"
                            src={report.isPublished ? REPORTS_ICONS.PUBLISH_FILLED : REPORTS_ICONS.PUBLISH}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {filteredReports.length > 4 && (
              <div className="flex gap-4 items-start w-full">
                {filteredReports.slice(4).map((report) => (
                  <Card key={report.id} className={cn(
                    "basis-0 grow min-h-0 min-w-0 max-w-[336px] bg-white border border-[rgba(47,84,145,0.15)] border-solid rounded-xl",
                    report.isPublished && "opacity-0"
                  )}>
                    <CardContent className="p-4 flex flex-col gap-4">
                      <div className="bg-[#f4f8fb] border-[0.4px] border-[rgba(47,84,145,0.2)] border-solid flex items-center justify-between px-2 py-1 rounded">
                        <p className="text-[#2e518a] text-[10px] font-semibold leading-normal uppercase">
                          {report.type}
                        </p>
                        <p className="text-[#2e518a] text-[10px] font-light leading-normal uppercase">
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
                      <div className="flex items-center">
                        <div className="flex gap-1.5 items-center">
                          <Avatar className="size-6">
                            <AvatarFallback 
                              className="text-white text-[9px] font-bold leading-3" 
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
                    <div className={cn(
                      "border-t border-[#e8eef3] flex flex-col items-center px-3.5 py-2",
                      report.isPublished && "bg-[#f7faff]"
                    )}>
                      <div className="flex items-center justify-between w-full">
                        <button className="flex gap-1 items-center">
                          <span className="text-[#2f5491] text-[10px] font-semibold leading-normal">
                            View Report
                          </span>
                          <div className="flex flex-col items-center justify-center size-3">
                            <div className="h-[5.334px] w-[8.668px]">
                              <img alt="Chevron" className="block max-w-none size-full" src={REPORTS_ICONS.CHEVRON_RIGHT_SMALL} />
                            </div>
                          </div>
                        </button>
                        <button
                          onClick={() => handlePublishClick(report)}
                          className={cn(
                            "flex gap-1 items-center px-2 py-1.5 rounded",
                            report.isPublished
                              ? "bg-[#ff7553]"
                              : "border border-[#ff7553] border-solid pl-2.5 pr-2"
                          )}
                        >
                          <span
                            className={cn(
                              "text-[10px] font-semibold leading-normal",
                              report.isPublished ? "text-white" : "text-[#ff7553]"
                            )}
                          >
                            {report.isPublished ? "Publish Report" : "Publish"}
                          </span>
                          <div className="relative shrink-0 size-3">
                            <img
                              alt="Publish"
                              className="block max-w-none size-full"
                              src={report.isPublished ? REPORTS_ICONS.PUBLISH_FILLED : REPORTS_ICONS.PUBLISH}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <PublishModal
        open={isModalOpen}
        onOpenChange={(open) => {
          setIsModalOpen(open);
          if (!open) {
            setSelectedReport(null);
          }
        }}
        report={
          selectedReport
            ? {
                companyName: selectedReport.companyName,
                type: selectedReport.type,
              }
            : {
                companyName: "",
                type: "",
              }
        }
      />
    </div>
  );
}

export default AnalystHub;

