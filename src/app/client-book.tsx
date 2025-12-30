import { useState } from "react";
import { Card, CardContent } from "components/ui/card";
import { Avatar, AvatarFallback } from "components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "components/ui/dialog";
import { HEADER_ICONS, CLIENT_BOOK_ICONS, PUBLISH_MODAL_ICONS } from "constants/images";
import { cn } from "lib/utils";

interface Client {
  id: string;
  name: string;
  email: string;
  initials: string;
  avatarColor: string;
  portfolio: string;
  riskProfile: "Conservative" | "Moderate" | "Aggressive";
  lastContacted: string;
}

const clients: Client[] = [
  {
    id: "1",
    name: "Brooklyn Simmons",
    email: "michael.mitc@example.com",
    initials: "BS",
    avatarColor: "#26b7c4",
    portfolio: "$100,000",
    riskProfile: "Moderate",
    lastContacted: "Sep 14, 2025",
  },
  {
    id: "2",
    name: "Floyd Miles",
    email: "tim.jennings@example.com",
    initials: "FM",
    avatarColor: "#f35050",
    portfolio: "$12,478,000",
    riskProfile: "Conservative",
    lastContacted: "Sep 14, 2025",
  },
  {
    id: "3",
    name: "Cameron Williamson",
    email: "curtis.weaver@example.com",
    initials: "CW",
    avatarColor: "#e19f26",
    portfolio: "$1,834,000",
    riskProfile: "Conservative",
    lastContacted: "Sep 14, 2025",
  },
  {
    id: "4",
    name: "Devon Lane",
    email: "michelle.rivera@example.com",
    initials: "DL",
    avatarColor: "#55a446",
    portfolio: "$860,000",
    riskProfile: "Conservative",
    lastContacted: "Sep 14, 2025",
  },
  {
    id: "5",
    name: "Leslie Alexander",
    email: "jessica.hanson@example.com",
    initials: "LA",
    avatarColor: "#3b67b0",
    portfolio: "$4,507,000",
    riskProfile: "Aggressive",
    lastContacted: "Sep 14, 2025",
  },
  {
    id: "6",
    name: "Eleanor Pena",
    email: "debra.holt@example.com",
    initials: "EP",
    avatarColor: "#d9667d",
    portfolio: "$1,506,000",
    riskProfile: "Moderate",
    lastContacted: "Sep 14, 2025",
  },
];

interface ClientBucket {
  id: string;
  name: string;
  description: string;
  hniCount: number;
  totalAUM: string;
  averageRisk: "Balanced" | "Aggressive" | "Very Aggressive";
  icon: string;
  iconBg: string;
}

const buckets: ClientBucket[] = [
  {
    id: "1",
    name: "Tech Growth Aggressive",
    description: "Clients with large portfolios and a preference for stable, low volatility assets.",
    hniCount: 43,
    totalAUM: "$52.4M",
    averageRisk: "Aggressive",
    icon: CLIENT_BOOK_ICONS.BUCKET_TECH_GROWTH,
    iconBg: "#e0e7ff",
  },
  {
    id: "2",
    name: "Income Seekers (NY)",
    description: "Clients with large portfolios and a preference for stable, low volatility assets.",
    hniCount: 8,
    totalAUM: "$130M",
    averageRisk: "Balanced",
    icon: PUBLISH_MODAL_ICONS.BUCKET_INCOME_SEEKERS,
    iconBg: "#d1fae5",
  },
  {
    id: "3",
    name: "Balanced Diversifiers",
    description: "Clients with moderate multi sector exposure and a balanced risk appetite.",
    hniCount: 79,
    totalAUM: "$23.8M",
    averageRisk: "Balanced",
    icon: CLIENT_BOOK_ICONS.BUCKET_BALANCED,
    iconBg: "#daebff",
  },
  {
    id: "4",
    name: "Pre-IPO Liquidity",
    description: "Clients with flexible portfolios who respond well to thematic or event driven ideas.",
    hniCount: 28,
    totalAUM: "$246M",
    averageRisk: "Aggressive",
    icon: CLIENT_BOOK_ICONS.BUCKET_PRE_IPO,
    iconBg: "#faf1d9",
  },
  {
    id: "5",
    name: "Opportunity Seekers",
    description: "Clients with flexible portfolios who respond well to thematic or event driven ideas.",
    hniCount: 204,
    totalAUM: "$66.8M",
    averageRisk: "Very Aggressive",
    icon: CLIENT_BOOK_ICONS.BUCKET_OPPORTUNITY,
    iconBg: "#ffe5fc",
  },
];

const getRiskProfileStyles = (riskProfile: string) => {
  switch (riskProfile) {
    case "Conservative":
      return {
        bg: "bg-[#f2f8ff]",
        border: "border-[#bbdafb]",
        text: "text-[#1d79e2]",
      };
    case "Moderate":
      return {
        bg: "bg-[#fef9c3]",
        border: "border-[#efe99f]",
        text: "text-[#854d0f]",
      };
    case "Aggressive":
      return {
        bg: "bg-[#ffe5e4]",
        border: "border-[#ffd0ce]",
        text: "text-[#b91c1c]",
      };
    default:
      return {
        bg: "bg-[#f2f8ff]",
        border: "border-[#bbdafb]",
        text: "text-[#1d79e2]",
      };
  }
};

const getBucketRiskStyles = (risk: string) => {
  switch (risk) {
    case "Balanced":
      return "text-[#059669]";
    case "Aggressive":
      return "text-[#ee9d12]";
    case "Very Aggressive":
      return "text-[#b91c1c]";
    default:
      return "text-[#059669]";
  }
};

function ClientBook() {
  const [activeTab, setActiveTab] = useState<"all" | "buckets">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedBucket, setSelectedBucket] = useState<ClientBucket | null>(null);
  const [sidebarSearchQuery, setSidebarSearchQuery] = useState("");
  const [isEditGroupOpen, setIsEditGroupOpen] = useState(false);
  const [editGroupStep, setEditGroupStep] = useState<1 | 2>(1);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [selectedClients, setSelectedClients] = useState<Client[]>([]);
  const [editGroupSearchQuery, setEditGroupSearchQuery] = useState("");

  const filteredClients = searchQuery
    ? clients.filter(
        (client) =>
          client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          client.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : clients;

  const handleCreateBucket = () => {
    // For now, open with the first bucket as example
    setSelectedBucket(buckets[1]); // Income Seekers (NY) as per Figma
    setIsSidebarOpen(true);
  };

  const handleBucketClick = (bucket: ClientBucket) => {
    setSelectedBucket(bucket);
    setIsSidebarOpen(true);
  };

  const handleEditGroup = () => {
    if (selectedBucket) {
      setGroupName(selectedBucket.name);
      setGroupDescription(selectedBucket.description);
      // Initialize with all clients for now (in real app, this would come from the bucket)
      setSelectedClients(clients);
      setEditGroupStep(1);
      setEditGroupSearchQuery("");
      setIsSidebarOpen(false); // Close sidebar when opening edit modal
      setIsEditGroupOpen(true);
    }
  };

  const handleSaveGroup = () => {
    // Move to step 2 (client list)
    setEditGroupStep(2);
  };

  const handleSaveChanges = () => {
    // Handle final save logic here
    if (selectedBucket) {
      console.log("Saving group with clients:", { groupName, groupDescription, selectedClients });
    }
    setIsEditGroupOpen(false);
    setEditGroupStep(1);
    setSelectedClients([]);
    setEditGroupSearchQuery("");
  };

  const handleRemoveClient = (clientId: string) => {
    setSelectedClients(selectedClients.filter((client) => client.id !== clientId));
  };

  const handleRemoveAll = () => {
    setSelectedClients([]);
  };

  const filteredEditGroupClients = editGroupSearchQuery
    ? selectedClients.filter(
        (client) =>
          client.name.toLowerCase().includes(editGroupSearchQuery.toLowerCase()) ||
          client.email.toLowerCase().includes(editGroupSearchQuery.toLowerCase())
      )
    : selectedClients;

  const sidebarFilteredClients = sidebarSearchQuery
    ? clients.filter(
        (client) =>
          client.name.toLowerCase().includes(sidebarSearchQuery.toLowerCase()) ||
          client.email.toLowerCase().includes(sidebarSearchQuery.toLowerCase())
      )
    : clients;

  return (
    <div className="flex flex-col items-start relative size-full bg-[#f4f8fb] overflow-x-hidden max-w-full">
      {/* Header */}
      <div className="bg-white border-b border-[#f1f4f9] flex items-center justify-between pl-7 pr-5 py-3 relative shrink-0 w-full min-w-0 max-w-full">
        <h2 className="text-[#2f5491] text-lg font-semibold leading-[1.3]">
          Client Book
        </h2>
        <div className="flex gap-3.5 items-center">
          <div className="border border-[#cbd5e1] border-solid flex gap-2 h-9 items-center px-3 py-0 rounded-[10px] w-[420px]">
            <div className="relative shrink-0 size-5">
              <img alt="Search" className="block max-w-none size-full" src={HEADER_ICONS.SEARCH} />
            </div>
            <input
              type="text"
              placeholder="Search HNIs, Reports"
              className="flex-1 text-[#878d99] text-sm leading-6 bg-transparent border-0 outline-none"
            />
          </div>
          <div className="border border-[#cbd5e1] border-solid flex items-center justify-center rounded-[10px] shrink-0 size-9">
            <div className="relative shrink-0 size-5">
              <img alt="Bell" className="block max-w-none size-full" src={HEADER_ICONS.BELL} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 items-start pb-10 pt-5 px-7 w-full h-full overflow-x-hidden min-w-0 max-w-full">
        {/* Summary Cards */}
        <div className="flex gap-4 items-stretch w-full min-w-0 max-w-full">
          <Card className="flex-1 bg-white border border-[#cfdbe4] border-solid rounded-[12px]">
            <CardContent className="px-6 py-3 flex flex-col gap-2 items-center justify-center text-center h-full">
              <p className="text-[24px] font-semibold leading-none" style={{ backgroundImage: "linear-gradient(205.423deg, rgb(48, 112, 215) 0%, rgb(46, 81, 138) 99.758%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                1020
              </p>
              <p className="text-[#15253f] text-[12px] font-normal leading-[1.35]">Total Clients</p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-white border border-[#cfdbe4] border-solid rounded-[12px]">
            <CardContent className="px-6 py-3 flex flex-col gap-2 items-center justify-center text-center h-full">
              <p className="text-[24px] font-semibold leading-none" style={{ backgroundImage: "linear-gradient(195.016deg, rgb(48, 112, 215) 0%, rgb(46, 81, 138) 99.758%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                $840.7M
              </p>
              <p className="text-[#15253f] text-[12px] font-normal leading-[1.35]">Total AUM</p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-white border border-[#cfdbe4] border-solid rounded-[12px]">
            <CardContent className="px-6 py-3 flex flex-col gap-2 items-center justify-center text-center h-full">
              <p className="text-[24px] font-semibold leading-none" style={{ backgroundImage: "linear-gradient(191.861deg, rgb(48, 112, 215) 0%, rgb(46, 81, 138) 99.758%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                $1,630,500
              </p>
              <p className="text-[#15253f] text-[12px] font-normal leading-[1.35]">Avg. Portfolio Size</p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-white border border-[#ffd0ce] border-solid rounded-[12px]">
            <CardContent className="px-6 py-3 flex flex-col gap-2 items-center justify-center text-center h-full">
              <p className="text-[#b91c1c] text-[24px] font-semibold leading-none">02</p>
              <p className="text-[#b91c1c] text-[12px] font-normal leading-[1.35]">Portfolio at Risk</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs and Actions Section */}
        <div className="flex flex-col gap-8 items-start w-full min-w-0">
          <div className="flex items-center justify-between w-full min-w-0 relative">
            <div className="border-b border-[rgba(66,82,110,0.3)] flex gap-5 items-start overflow-clip">
              <button
                onClick={() => setActiveTab("all")}
                className={cn(
                  "flex h-8 items-center justify-center px-0 py-2",
                  activeTab === "all" && "border-[#ff7553] border-b-2"
                )}
              >
                <span
                  className={cn(
                    "text-[13px] font-medium leading-none uppercase",
                    activeTab === "all" ? "text-[#ff7553] font-bold" : "text-black"
                  )}
                >
                  All Clients
                </span>
              </button>
              <button
                onClick={() => setActiveTab("buckets")}
                className={cn(
                  "flex h-8 items-center justify-center px-0 py-2",
                  activeTab === "buckets" && "border-[#ff7553] border-b-2"
                )}
              >
                <span
                  className={cn(
                    "text-[13px] font-medium leading-none uppercase",
                    activeTab === "buckets" ? "text-[#ff7553] font-bold" : "text-black"
                  )}
                >
                  Client Buckets
                </span>
              </button>
            </div>
            <div className="flex-shrink-0 w-[154px]">
              {activeTab === "buckets" ? (
                <button
                  onClick={handleCreateBucket}
                  className="flex gap-2 items-center justify-center h-[30px] pl-2 pr-3 py-1.5 rounded-[8px] hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{
                    backgroundImage: "linear-gradient(86.0887deg, rgb(246, 94, 57) 0%, rgb(255, 117, 83) 99.226%)",
                  }}
                >
                  <div className="relative shrink-0 size-4">
                    <svg
                      className="size-full"
                      fill="none"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H15"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 1V15"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium leading-[1.25]">Create New Bucket</span>
                </button>
              ) : (
                <div className="h-[30px] w-full" />
              )}
            </div>
          </div>

          {activeTab === "all" ? (
            <>
              <div className="flex items-center justify-between w-full">
                <div className="border border-[#cbd5e1] border-solid flex gap-2 h-9 items-center px-3 py-0 rounded-md w-[360px]">
                  <div className="relative shrink-0 size-4">
                    <img alt="Search" className="block max-w-none size-full" src={HEADER_ICONS.SEARCH} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by Name or Email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-[#878d99] text-sm leading-none bg-transparent border-0 outline-none"
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <p className="text-[#2f5491] text-sm font-normal leading-[1.4]">
                    Total HNIs: 1020
                  </p>
                  <button
                    className="flex gap-2 items-center justify-center h-[30px] pl-2 pr-3 py-1.5 rounded-[8px] hover:opacity-90 transition-opacity"
                    style={{
                      backgroundImage: "linear-gradient(86.6173deg, rgb(246, 94, 57) 0%, rgb(255, 117, 83) 99.226%)",
                    }}
                  >
                    <div className="relative shrink-0 size-4">
                      <svg
                        className="size-full"
                        fill="none"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 8H15"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 1V15"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-medium leading-[1.25]">Add New Client</span>
                  </button>
                </div>
              </div>

              {/* Client Table */}
          <Card className="bg-white border border-[#cfdbe4] border-solid rounded-[12px] w-full">
            <CardContent className="p-0">
              <div className="flex flex-col items-start w-full">
                {/* Table Header */}
                <div className="bg-[#f0f4fa] border-b border-[#d3e1f5] flex items-center px-4 py-3.5 w-full">
                  <div className="flex gap-8 items-center w-full">
                    <div className="basis-0 flex flex-col font-semibold grow justify-center leading-[0] min-w-0 relative shrink-0 text-[#2e518a] text-xs uppercase">
                      <p className="leading-[1.3]">Name/Email</p>
                    </div>
                    <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs uppercase w-[140px]">
                      <p className="leading-[1.3]">Portfolio (AUM)</p>
                    </div>
                    <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs text-center uppercase w-[160px]">
                      <p className="leading-[1.35]">Risk Profile</p>
                    </div>
                    <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs uppercase w-[160px]">
                      <p className="leading-[1.3]">Last Contacted</p>
                    </div>
                    <div className="flex items-center justify-end relative shrink-0 w-[228px]">
                      <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs text-right uppercase w-[156px]">
                        <p className="leading-[1.35]">Actions</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table Rows */}
                {filteredClients.map((client) => {
                  const riskStyles = getRiskProfileStyles(client.riskProfile);
                  return (
                    <div
                      key={client.id}
                      className="border-b border-[#edefef] flex items-center px-4 py-5 w-full hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex gap-8 items-center w-full">
                        <div className="basis-0 flex gap-2.5 grow items-center min-w-0 relative shrink-0">
                          <Avatar className="size-10">
                            <AvatarFallback
                              className="text-white text-[15px] font-bold leading-5 bg-transparent"
                              style={{ backgroundColor: client.avatarColor }}
                            >
                              {client.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col gap-0.5 items-start leading-[0] relative shrink-0">
                            <p className="text-[#15253f] text-sm font-medium leading-5">
                              {client.name}
                            </p>
                            <p className="text-[#6b7280] text-xs font-normal leading-[15px]">
                              {client.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#15253f] text-sm w-[140px]">
                          <p className="leading-[1.3]">{client.portfolio}</p>
                        </div>
                        <div className="flex items-center justify-center relative shrink-0 w-[160px]">
                          <div
                            className={cn(
                              "flex h-7 items-center justify-center px-3 py-1.5 relative rounded-full shrink-0 w-[90px] border",
                              riskStyles.bg,
                              riskStyles.border,
                              riskStyles.text
                            )}
                          >
                            <p className={cn("text-[10px] font-medium leading-[1.3]", riskStyles.text)}>
                              {client.riskProfile}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-sm w-[160px]">
                          <p className="leading-[1.35]">{client.lastContacted}</p>
                        </div>
                        <div className="flex gap-[14px] items-center justify-end relative shrink-0 w-[228px]">
                          <button className="flex gap-1.5 items-center justify-end hover:opacity-70 transition-opacity">
                            <div className="relative shrink-0 size-4">
                              <img
                                alt="Schedule Call"
                                className="block max-w-none size-full"
                                src={CLIENT_BOOK_ICONS.SCHEDULE_CALL}
                              />
                            </div>
                            <span className="text-[#2e518a] text-sm font-normal leading-[1.35]">
                              Schedule Call
                            </span>
                          </button>
                          <button className="flex gap-1.5 items-center justify-end hover:opacity-70 transition-opacity">
                            <div className="relative shrink-0 size-4">
                              <img
                                alt="View Profile"
                                className="block max-w-none size-full"
                                src={CLIENT_BOOK_ICONS.VIEW_PROFILE}
                              />
                            </div>
                            <span className="text-[#2e518a] text-sm font-normal leading-[1.35]">
                              View Profile
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
            </>
          ) : (
            <>
              {/* Smart Segments Header */}
              <div className="flex flex-col gap-[18px] items-start w-full min-w-0 max-w-full">
                <div className="flex gap-2.5 items-center w-full min-w-0">
                  <h3 className="text-[#2f5491] text-xl font-semibold leading-[1.25]">
                    Smart Segments
                  </h3>
                  <div
                    className="border border-[#3b67b0] border-[0.6px] border-solid flex gap-1 items-center justify-center pl-2.5 pr-3.5 py-1.5 rounded-[25px] shrink-0"
                    style={{
                      backgroundImage: "linear-gradient(to right, rgb(42, 80, 143) 0%, rgb(59, 103, 176) 100%)",
                    }}
                  >
                    <div className="relative shrink-0 size-4">
                      <img alt="Sparkle" className="block max-w-none size-full" src={CLIENT_BOOK_ICONS.SPARKLE} />
                    </div>
                    <span className="text-white text-xs font-medium leading-[1.25]">Auto-Generated by Numberz</span>
                  </div>
                </div>

                {/* Buckets Grid */}
                <div className="grid gap-4 w-full min-w-0 max-w-full overflow-hidden" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(364px, 1fr))" }}>
                  {buckets.map((bucket) => {
                    const riskColor = getBucketRiskStyles(bucket.averageRisk);
                    return (
                      <Card
                        key={bucket.id}
                        onClick={() => handleBucketClick(bucket)}
                        className="bg-white border border-[rgba(47,84,145,0.15)] border-solid rounded-[12px] min-w-0 max-w-full overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4 flex flex-col gap-3 min-w-0 max-w-full">
                          <div className="flex items-start justify-between w-full">
                            <div
                              className="flex items-center justify-center relative rounded-lg shrink-0 size-10"
                              style={{ backgroundColor: bucket.iconBg }}
                            >
                              <div className="relative shrink-0 size-5">
                                <img
                                  alt={bucket.name}
                                  className="block max-w-none size-full"
                                  src={bucket.icon}
                                />
                              </div>
                            </div>
                            <div className="bg-[#f2f8ff] border border-[#bbdafb] border-[0.8px] border-solid flex flex-col items-start px-2.5 py-1 relative rounded shrink-0">
                              <p className="text-[#1d79e2] text-[10px] font-medium leading-4">
                                {bucket.hniCount} HNIs
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1 items-start w-full min-w-0">
                            <h4 className="text-[#15253f] text-base font-semibold leading-6 break-words">
                              {bucket.name}
                            </h4>
                            <p className="text-[#64748b] text-xs font-normal leading-4 w-full">
                              {bucket.description}
                            </p>
                          </div>
                          <div className="bg-[#f4f8fb] border border-[rgba(47,84,145,0.05)] border-solid flex flex-col gap-2 items-start px-2.5 py-1.5 rounded-lg w-full">
                            <div className="flex items-center justify-between text-xs w-full">
                              <p className="text-[#64748b] text-xs font-normal leading-4">Total AUM</p>
                              <p className="text-[#15253f] text-xs font-semibold leading-4 text-right">
                                {bucket.totalAUM}
                              </p>
                            </div>
                            <div className="h-0 relative shrink-0 w-full">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <img
                                  alt=""
                                  className="block max-w-none size-full"
                                  src={CLIENT_BOOK_ICONS.DIVIDER_LINE_33}
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs w-full">
                              <p className="text-[#64748b] text-xs font-normal leading-4">Average Risk</p>
                              <p className={cn("text-xs font-semibold leading-4 text-right", riskColor)}>
                                {bucket.averageRisk}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bucket Details Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent
          side="right"
          className="w-[423px] sm:max-w-[423px] p-0 overflow-hidden"
          showCloseButton={false}
        >
          {selectedBucket && (
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="bg-white border-b border-[#f1f4f9] flex items-center justify-between px-6 py-4 shrink-0">
                <div className="flex gap-3 items-center grow min-w-0">
                  <div
                    className="flex items-center justify-center relative rounded-lg shrink-0 size-10"
                    style={{ backgroundColor: selectedBucket.iconBg }}
                  >
                    <div className="relative shrink-0 size-5">
                      <img
                        alt={selectedBucket.name}
                        className="block max-w-none size-full"
                        src={selectedBucket.icon}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start grow min-w-0">
                    <SheetTitle className="text-[#15253f] text-base font-semibold leading-6 text-left">
                      {selectedBucket.name}
                    </SheetTitle>
                    <SheetDescription className="text-[#64748b] text-xs font-normal leading-4 text-left">
                      {selectedBucket.description}
                    </SheetDescription>
                  </div>
                </div>
                <SheetClose asChild>
                  <button
                    className="overflow-clip relative shrink-0 size-6 hover:opacity-70 transition-opacity"
                    aria-label="Close"
                  >
                    <div className="absolute flex inset-[2.86%] items-center justify-center">
                      <div className="flex-none rotate-[315deg] size-4">
                        <div className="relative size-full">
                          <div className="absolute inset-[-6.25%]">
                            <img
                              alt="Close"
                              className="block max-w-none size-full"
                              src={PUBLISH_MODAL_ICONS.CLOSE}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </SheetClose>
              </div>

              {/* Search and Edit Group */}
              <div className="bg-white flex gap-6 items-center px-6 py-5 shrink-0">
                <div className="bg-white border border-[#e2e8f0] border-solid flex gap-3 grow h-[34px] items-center px-2.5 py-0 rounded-[8px] min-w-0">
                  <div className="relative shrink-0 size-5">
                    <img
                      alt="Search"
                      className="block max-w-none size-full"
                      src={CLIENT_BOOK_ICONS.SEARCH_SIDEBAR}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by Name or Email"
                    value={sidebarSearchQuery}
                    onChange={(e) => setSidebarSearchQuery(e.target.value)}
                    className="flex-1 text-[#9ca3af] text-sm leading-[18px] bg-transparent border-0 outline-none"
                  />
                </div>
                <button
                  onClick={handleEditGroup}
                  className="border border-[#f7633e] border-solid flex gap-1 h-[34px] items-center justify-center pl-2.5 pr-3 py-1.5 rounded-[6px] shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="relative shrink-0 size-4">
                    <img
                      alt="Edit Group"
                      className="block max-w-none size-full"
                      src={CLIENT_BOOK_ICONS.EDIT_GROUP}
                    />
                  </div>
                  <span className="text-[#f7633e] text-xs font-medium leading-[1.25]">Edit Group</span>
                </button>
              </div>

              {/* Client List */}
              <div className="bg-white border border-[#cfdbe4] border-solid flex flex-col items-center overflow-y-auto flex-1 min-h-0 rounded-[10px] mx-6 mb-6">
                {/* Table Header */}
                <div className="bg-[#f0f4fa] border-b border-[#d3e1f5] flex items-center px-4 py-2.5 w-full shrink-0">
                  <div className="flex gap-3 items-center w-full">
                    <div className="basis-0 flex flex-col font-bold grow justify-center leading-[0] min-w-0 relative shrink-0 text-[#2e518a] text-sm uppercase">
                      <p className="leading-[1.3]">Name/Email</p>
                    </div>
                    <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-sm text-right uppercase w-[140px]">
                      <p className="leading-[1.3]">Portfolio (AUM)</p>
                    </div>
                  </div>
                </div>

                {/* Client Rows */}
                {sidebarFilteredClients.map((client, index) => (
                  <div
                    key={client.id}
                    className={cn(
                      "border-b border-[#edefef] flex items-center px-4 py-2.5 w-full shrink-0",
                      index % 2 === 1 && "bg-[#f8fbff]"
                    )}
                  >
                    <div className="flex gap-3 items-center w-full">
                      <div className="basis-0 flex gap-2.5 grow items-center min-w-0 relative shrink-0">
                        <Avatar className="size-10">
                          <AvatarFallback
                            className="text-white text-[15px] font-bold leading-5 bg-transparent"
                            style={{ backgroundColor: client.avatarColor }}
                          >
                            {client.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-0.5 items-start leading-[0] relative shrink-0">
                          <p className="text-[#15253f] text-sm font-medium leading-5">
                            {client.name}
                          </p>
                          <p className="text-[#6b7280] text-xs font-normal leading-[15px]">
                            {client.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#15253f] text-sm text-right w-[140px]">
                        <p className="leading-[1.3]">{client.portfolio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Edit Group Dialog */}
      <Dialog 
        open={isEditGroupOpen} 
        onOpenChange={(open) => {
          setIsEditGroupOpen(open);
          if (!open) {
            setEditGroupStep(1);
            setSelectedClients([]);
            setEditGroupSearchQuery("");
          }
        }}
      >
        <DialogContent
          className="p-0 max-w-[1800px] min-w-[900px] w-full rounded-2xl overflow-hidden border-0 shadow-none bg-[#f4f8fb]"
          showCloseButton={false}
        >
          {editGroupStep === 1 ? (
            <>
              {/* Header */}
              <div className="bg-white border-b border-[rgba(47,84,145,0.15)] flex flex-col items-start p-6 relative shrink-0 w-full">
                <div className="flex items-start justify-between relative shrink-0 w-full">
                  <div className="basis-0 flex gap-3 grow items-start min-w-0 relative shrink-0">
                    <div className="bg-[#f7633e] flex items-center justify-center overflow-clip px-3 py-0.5 relative rounded-lg shrink-0 size-11">
                      <div className="relative shrink-0 size-[22px]">
                        <img
                          alt="Edit Group"
                          className="block max-w-none size-full"
                          src={CLIENT_BOOK_ICONS.EDIT_GROUP_HEADER}
                        />
                      </div>
                    </div>
                    <div className="basis-0 flex flex-col gap-1.5 grow items-start justify-center min-w-0 relative shrink-0">
                      <DialogTitle className="text-[#2f5491] text-[18px] font-semibold leading-none tracking-[-0.342px]">
                        Edit Group
                      </DialogTitle>
                      <DialogDescription className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                        Modify group information or add/remove clients
                      </DialogDescription>
                    </div>
                  </div>
                  <DialogClose asChild>
                    <button
                      className="overflow-clip relative shrink-0 size-6 hover:opacity-70 transition-opacity"
                      aria-label="Close"
                    >
                      <div className="absolute flex inset-[2.86%] items-center justify-center">
                        <div className="flex-none rotate-[315deg] size-4">
                          <div className="relative size-full">
                            <div className="absolute inset-[-6.25%]">
                              <img
                                alt="Close"
                                className="block max-w-none size-full"
                                src={PUBLISH_MODAL_ICONS.CLOSE}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </DialogClose>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white flex items-start px-6 py-7 relative shrink-0 w-full">
                <div className="basis-0 bg-white flex flex-col gap-5 grow items-start justify-center min-w-0 relative shrink-0">
                  {/* Group Icon */}
                  {selectedBucket && (
                    <div
                      className="flex items-center justify-center relative rounded-2xl shrink-0 size-20"
                      style={{
                        backgroundColor: selectedBucket.iconBg,
                        border: `1.818px solid ${selectedBucket.iconBg}40`,
                      }}
                    >
                      <div className="relative shrink-0 size-8">
                        <img
                          alt={selectedBucket.name}
                          className="block max-w-none size-full"
                          src={selectedBucket.icon}
                        />
                      </div>
                    </div>
                  )}

                  {/* Form Fields */}
                  <div className="flex flex-col gap-5 items-start relative shrink-0 w-full">
                    {/* Group Name */}
                    <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                      <label htmlFor="groupName" className="text-[#15253f] text-sm font-medium leading-normal">
                        Group Name
                      </label>
                      <input
                        id="groupName"
                        type="text"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        className="bg-white border border-[#e2e8f0] border-solid flex h-11 items-center px-4 py-2.5 rounded-lg shrink-0 w-full text-[#15253f] text-sm leading-[18px] outline-none focus:border-[#2563eb]"
                      />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                      <label htmlFor="groupDescription" className="text-[#15253f] text-sm font-medium leading-normal">
                        Description
                      </label>
                      <div className="relative w-full">
                        <textarea
                          id="groupDescription"
                          value={groupDescription}
                          onChange={(e) => setGroupDescription(e.target.value)}
                          className="bg-white border border-[#e2e8f0] border-solid flex items-start px-4 py-2.5 relative rounded-lg shrink-0 w-full h-[72px] text-[#15253f] text-sm leading-[18px] outline-none focus:border-[#2563eb] resize-none"
                        />
                        {/* Resize handle icon */}
                        <div className="absolute bottom-2 right-2 size-4 pointer-events-none">
                          <div className="absolute left-1 top-1 size-[10px]">
                            <div className="absolute flex items-center justify-center left-0 top-0 size-[10px]">
                              <div className="flex-none rotate-45">
                                <div className="bg-[#e2e8f0] h-3 rounded-full w-[1.5px]" />
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center left-[3px] top-[3px] size-[7px]">
                              <div className="flex-none rotate-45">
                                <div className="bg-[#e2e8f0] h-2 rounded-full w-[1.5px]" />
                              </div>
                            </div>
                            <div className="absolute flex items-center justify-center left-[7px] top-[7px] size-[4px]">
                              <div className="flex-none rotate-45">
                                <div className="bg-[#e2e8f0] h-1 rounded-full w-[1.5px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-white border-t border-[#d3e1f5] flex items-center justify-end p-6 relative shrink-0 w-full">
                <div className="flex gap-3 items-center relative shrink-0">
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="border border-[#213a63] border-solid bg-white flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 w-[140px] hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="text-[#213a63] text-sm font-medium leading-[1.25]">Cancel</span>
                    </button>
                  </DialogClose>
                  <button
                    type="button"
                    onClick={handleSaveGroup}
                    className="bg-[#213a63] flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 hover:bg-[#1e2f52] transition-colors cursor-pointer"
                  >
                    <span className="text-white text-sm font-medium leading-[1.25] whitespace-nowrap">Save & Continue</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Step 2: Client List */}
              {/* Header */}
              <div className="bg-white border-b border-[rgba(47,84,145,0.15)] flex flex-col items-start p-6 relative shrink-0 w-full">
                <div className="flex items-start justify-between relative shrink-0 w-full">
                  <div className="basis-0 flex gap-3 grow items-start min-w-0 relative shrink-0">
                    <div className="bg-[#f7633e] flex items-center justify-center overflow-clip px-3 py-0.5 relative rounded-lg shrink-0 size-11">
                      <div className="relative shrink-0 size-[22px]">
                        <img
                          alt="Edit Group"
                          className="block max-w-none size-full"
                          src={CLIENT_BOOK_ICONS.EDIT_GROUP_HEADER}
                        />
                      </div>
                    </div>
                    <div className="basis-0 flex flex-col gap-1.5 grow items-start justify-center min-w-0 relative shrink-0">
                      <DialogTitle className="text-[#2f5491] text-[18px] font-semibold leading-none tracking-[-0.342px]">
                        Edit Group
                      </DialogTitle>
                      <DialogDescription className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                        Modify group information or add/remove clients
                      </DialogDescription>
                    </div>
                  </div>
                  <DialogClose asChild>
                    <button
                      className="overflow-clip relative shrink-0 size-6 hover:opacity-70 transition-opacity"
                      aria-label="Close"
                      onClick={() => {
                        setIsEditGroupOpen(false);
                        setEditGroupStep(1);
                      }}
                    >
                      <div className="absolute flex inset-[2.86%] items-center justify-center">
                        <div className="flex-none rotate-[315deg] size-4">
                          <div className="relative size-full">
                            <div className="absolute inset-[-6.25%]">
                              <img
                                alt="Close"
                                className="block max-w-none size-full"
                                src={PUBLISH_MODAL_ICONS.CLOSE}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </DialogClose>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white flex flex-col items-start px-6 py-6 relative shrink-0 w-full">
                {/* Section Title */}
                <div className="flex flex-col gap-1.5 items-start relative shrink-0 w-full mb-4">
                  <h3 className="text-[#2f5491] text-[18px] font-semibold leading-none tracking-[-0.342px]">
                    Add or remove HNIs
                  </h3>
                  <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                    Review the <span className="font-semibold">{selectedClients.length}</span> HNIs selected from your groups.
                  </p>
                </div>

                {/* Search and Remove All */}
                <div className="flex flex-col gap-3.5 items-start relative shrink-0 w-full mb-4">
                  <div className="flex items-center justify-between relative shrink-0 w-full">
                  <div className="bg-white border border-[#cfdbe4] border-[0.6px] border-solid flex gap-2 h-[30px] items-center px-2 py-0 rounded-[6px] shrink-0 w-[360px]">
                    <div className="relative shrink-0 size-4">
                      <img
                        alt="Search"
                        className="block max-w-none size-full"
                        src={CLIENT_BOOK_ICONS.SEARCH_EDIT_GROUP}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Search by Name or Email"
                      value={editGroupSearchQuery}
                      onChange={(e) => setEditGroupSearchQuery(e.target.value)}
                      className="flex-1 text-[#878d99] text-sm leading-none bg-transparent border-0 outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveAll}
                    className="border border-[#ef4e4e] border-solid flex h-[30px] items-center justify-center px-3 py-1.5 rounded-[6px] shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <span className="text-[#ef4e4e] text-xs font-medium leading-[1.25]">Remove All</span>
                  </button>
                  </div>
                </div>

                {/* Client List Table */}
                <div className="bg-white border border-[#cfdbe4] border-solid flex flex-col items-start rounded-lg w-full overflow-hidden">
                  {/* Table Header */}
                  <div className="bg-[#f0f4fa] border-b border-[#d3e1f5] flex items-center px-4 py-3 w-full shrink-0">
                    <div className="flex gap-8 items-center w-full">
                      <div className="basis-0 flex flex-col font-semibold grow justify-center leading-[0] min-w-0 relative shrink-0 text-[#2e518a] text-xs uppercase">
                        <p className="leading-[1.3]">Name/Email</p>
                      </div>
                      <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs uppercase w-[200px]">
                        <p className="leading-[1.3]">Portfolio (AUM)</p>
                      </div>
                      <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs uppercase w-[160px]">
                        <p className="leading-[1.35]">Risk Profile</p>
                      </div>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="flex flex-col items-start w-full max-h-[400px] overflow-y-auto">
                    {filteredEditGroupClients.length > 0 ? (
                      filteredEditGroupClients.map((client) => {
                        const riskStyles = getRiskProfileStyles(client.riskProfile);
                        return (
                          <div
                            key={client.id}
                            className="border-b border-[#edefef] flex items-center px-4 py-4 w-full hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex gap-8 items-center w-full">
                              <div className="basis-0 flex gap-3 grow items-center min-w-0 relative shrink-0">
                                <button
                                  onClick={() => handleRemoveClient(client.id)}
                                  className="overflow-clip relative shrink-0 size-[22px] hover:opacity-80 transition-opacity cursor-pointer"
                                  aria-label={`Remove ${client.name}`}
                                >
                                  <div className="absolute inset-[12.5%]">
                                    <img
                                      alt="Remove"
                                      className="block max-w-none size-full"
                                      src={CLIENT_BOOK_ICONS.REMOVE_CLIENT}
                                    />
                                  </div>
                                </button>
                                <Avatar className="size-10">
                                  <AvatarFallback
                                    className="text-white text-[15px] font-bold leading-5 bg-transparent"
                                    style={{ backgroundColor: client.avatarColor }}
                                  >
                                    {client.initials}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-0.5 items-start leading-[0] relative shrink-0">
                                  <p className="text-[#15253f] text-sm font-medium leading-5">
                                    {client.name}
                                  </p>
                                  <p className="text-[#6b7280] text-xs font-normal leading-[15px]">
                                    {client.email}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#15253f] text-sm w-[200px]">
                                <p className="leading-[1.3]">{client.portfolio}</p>
                              </div>
                              <div className="flex items-center justify-center relative shrink-0 w-[160px]">
                                <div
                                  className={cn(
                                    "flex h-7 items-center justify-center px-3 py-1.5 relative rounded-full shrink-0 w-[90px] border",
                                    riskStyles.bg,
                                    riskStyles.border,
                                    riskStyles.text
                                  )}
                                >
                                  <p className={cn("text-[10px] font-medium leading-[1.3]", riskStyles.text)}>
                                    {client.riskProfile}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="flex items-center justify-center px-4 py-8 w-full">
                        <p className="text-[#64748b] text-sm font-normal">No clients found</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-white border-t border-[#d3e1f5] flex items-center justify-between p-6 relative shrink-0 w-full">
                <div className="text-[#64748b] text-sm font-normal leading-[1.4]">
                  Auto-saved 1m ago
                </div>
                <div className="flex gap-3 items-center relative shrink-0">
                  <button
                    type="button"
                    onClick={() => setEditGroupStep(1)}
                    className="border border-[#213a63] border-solid bg-white flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 w-[140px] hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-[#213a63] text-sm font-medium leading-[1.25]">Cancel</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveChanges}
                    className="bg-[#213a63] flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 hover:bg-[#1e2f52] transition-colors cursor-pointer"
                  >
                    <span className="text-white text-sm font-medium leading-[1.25] whitespace-nowrap">Save Changes</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ClientBook;

