import { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "components/ui/dialog";
import { PUBLISH_MODAL_ICONS } from "constants/images";
import { cn } from "lib/utils";

interface AudienceBucket {
  id: string;
  name: string;
  description: string;
  hniCount: number;
  relevance: "High Relevance" | "Medium Relevance" | "Low Relevance";
  icon: string;
  iconBg: string;
  isSelected: boolean;
}

interface Recipient {
  id: string;
  name: string;
  email?: string;
  initials: string;
  avatarColor: string;
  portfolio: string;
  riskProfile: "Conservative" | "Moderate" | "Aggressive";
  isSelected: boolean;
}

interface Channel {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconBg: string;
  isSelected: boolean;
}

interface EmailTemplate {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  tagBorder: string;
  isSelected: boolean;
}

interface PublishModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  report: {
    companyName: string;
    type: string;
  };
}

const audienceBuckets: AudienceBucket[] = [
  {
    id: "1",
    name: "Tech Growth Aggressive",
    description: "Clients with more than fifteen percent technology allocation and an aggressive risk profile.",
    hniCount: 86,
    relevance: "High Relevance",
    icon: PUBLISH_MODAL_ICONS.BUCKET_1,
    iconBg: "#e0e7ff",
    isSelected: false,
  },
  {
    id: "2",
    name: "Income Seekers (NY)",
    description: "Clients with large portfolios and a preference for stable, low volatility assets.",
    hniCount: 32,
    relevance: "High Relevance",
    icon: PUBLISH_MODAL_ICONS.BUCKET_INCOME_SEEKERS,
    iconBg: "#d1fae5",
    isSelected: true,
  },
  {
    id: "3",
    name: "Balanced Diversifiers",
    description: "Clients with moderate multi sector exposure and a balanced risk appetite.",
    hniCount: 248,
    relevance: "High Relevance",
    icon: PUBLISH_MODAL_ICONS.BUCKET_BALANCED,
    iconBg: "#daebff",
    isSelected: false,
  },
  {
    id: "4",
    name: "Opportunity Seekers",
    description: "Clients with flexible portfolios who respond well to thematic or event driven ideas.",
    hniCount: 120,
    relevance: "High Relevance",
    icon: PUBLISH_MODAL_ICONS.BUCKET_OPPORTUNITY,
    iconBg: "#ffe5fc",
    isSelected: false,
  },
];

const recipients: Recipient[] = [
  {
    id: "1",
    name: "Brooklyn Simmons",
    email: "michael.mitc@example.com",
    initials: "BS",
    avatarColor: "#26b7c4",
    portfolio: "$100,000",
    riskProfile: "Moderate",
    isSelected: false,
  },
  {
    id: "2",
    name: "Floyd Miles",
    email: "tim.jennings@example.com",
    initials: "FM",
    avatarColor: "#f35050",
    portfolio: "$12,478,000",
    riskProfile: "Conservative",
    isSelected: true,
  },
  {
    id: "3",
    name: "Cameron Williamson",
    email: "curtis.weaver@example.com",
    initials: "CW",
    avatarColor: "#e19f26",
    portfolio: "$1,834,000",
    riskProfile: "Conservative",
    isSelected: true,
  },
  {
    id: "4",
    name: "Devon Lane",
    email: "michelle.rivera@example.com",
    initials: "DL",
    avatarColor: "#55a446",
    portfolio: "$860,000",
    riskProfile: "Conservative",
    isSelected: true,
  },
  {
    id: "5",
    name: "Leslie Alexander",
    email: "jessica.hanson@example.com",
    initials: "LA",
    avatarColor: "#3b67b0",
    portfolio: "$4,507,000",
    riskProfile: "Aggressive",
    isSelected: false,
  },
  {
    id: "6",
    name: "Eleanor Pena",
    email: "debra.holt@example.com",
    initials: "EP",
    avatarColor: "#d9667d",
    portfolio: "$1,506,000",
    riskProfile: "Moderate",
    isSelected: false,
  },
  {
    id: "8",
    name: "Alice Smith",
    email: "",
    initials: "AS",
    avatarColor: "#3b67b0",
    portfolio: "$4,507,000",
    riskProfile: "Aggressive",
    isSelected: true,
  },
  {
    id: "7",
    name: "Devon Lane",
    email: "michelle.rivera@example.com",
    initials: "DL",
    avatarColor: "#55a446",
    portfolio: "$860,000",
    riskProfile: "Conservative",
    isSelected: true,
  },
  {
    id: "9",
    name: "Sarah Jenkins",
    email: "",
    initials: "SJ",
    avatarColor: "#55a446",
    portfolio: "$860,000",
    riskProfile: "Conservative",
    isSelected: true,
  },
];

const channels: Channel[] = [
  {
    id: "1",
    name: "Email Campaign",
    description: "Personalized email with PDF attachment and trackable link.",
    icon: PUBLISH_MODAL_ICONS.CHANNEL_EMAIL,
    iconBg: "#e0e7ff",
    isSelected: true,
  },
  {
    id: "2",
    name: "Mobile App Push",
    description: "Notification sent directly to the client's DIY wealth app.",
    icon: PUBLISH_MODAL_ICONS.CHANNEL_MOBILE,
    iconBg: "#fff1f0",
    isSelected: false,
  },
  {
    id: "3",
    name: "WhatsApp Business",
    description: "Secure whatsapp message via\napproved compliant gateway.",
    icon: PUBLISH_MODAL_ICONS.CHANNEL_WHATSAPP,
    iconBg: "#d1fae5",
    isSelected: false,
  },
];

const emailTemplates: EmailTemplate[] = [
  {
    id: "1",
    name: "Formal Brief Update",
    tag: "Standard",
    tagColor: "#15803d",
    tagBg: "#f0fdf4",
    tagBorder: "rgba(21,128,61,0.1)",
    isSelected: true,
  },
  {
    id: "2",
    name: "Technical Analysic",
    tag: "Formal",
    tagColor: "#c5930f",
    tagBg: "#fff9eb",
    tagBorder: "rgba(197,147,15,0.2)",
    isSelected: false,
  },
  {
    id: "3",
    name: "Market Alert",
    tag: "Urgent",
    tagColor: "#b91c1c",
    tagBg: "#fff2f2",
    tagBorder: "rgba(255,86,86,0.1)",
    isSelected: false,
  },
  {
    id: "4",
    name: "Quick Overview",
    tag: "Casual",
    tagColor: "#4338ca",
    tagBg: "#eef2ff",
    tagBorder: "rgba(67,56,202,0.1)",
    isSelected: false,
  },
];

const defaultSubject = "Investment Strategy Update: Technology";
const defaultBody = `Dear Client,

Our research team has just published a significant update regarding the Technology sector, specifically addressing NVDA.

Key Highlights:
- Supply chain constraints continue to drive pricing power for top-tier chip manufacturers. We raise our price targets for NVDA and AMD.

Given your current portfolio allocation, we believe this analysis is pertinent to your long-term strategy.

Please find the full report attached.

Sincerely,
Alex Thompson`;

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

function PublishModal({ open, onOpenChange, report }: PublishModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [buckets, setBuckets] = useState(audienceBuckets);
  const [recipientList, setRecipientList] = useState(recipients);
  const [searchQuery, setSearchQuery] = useState("");
  const [channelList, setChannelList] = useState(channels);
  const [templateList, setTemplateList] = useState(emailTemplates);
  const [subject, setSubject] = useState(defaultSubject);
  const [body, setBody] = useState(defaultBody);
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset modal state when it opens
  useEffect(() => {
    if (open) {
      setCurrentStep(1);
      setBuckets(audienceBuckets);
      setRecipientList(recipients);
      setSearchQuery("");
      setChannelList(channels);
      setTemplateList(emailTemplates);
      setSubject(defaultSubject);
      setBody(defaultBody);
      setShowSuccess(false);
    }
  }, [open]);

  const handleBucketToggle = (id: string) => {
    setBuckets((prev) =>
      prev.map((bucket) =>
        bucket.id === id ? { ...bucket, isSelected: !bucket.isSelected } : bucket
      )
    );
  };

  const handleRecipientToggle = (id: string) => {
    setRecipientList((prev) =>
      prev.map((recipient) =>
        recipient.id === id
          ? { ...recipient, isSelected: !recipient.isSelected }
          : recipient
      )
    );
  };

  const handleSelectAll = () => {
    const allSelected = recipientList.every((r) => r.isSelected);
    setRecipientList((prev) =>
      prev.map((recipient) => ({ ...recipient, isSelected: !allSelected }))
    );
  };

  const handleClearAll = () => {
    setRecipientList((prev) =>
      prev.map((recipient) => ({ ...recipient, isSelected: false }))
    );
  };

  const handleChannelToggle = (id: string) => {
    setChannelList((prev) =>
      prev.map((channel) =>
        channel.id === id ? { ...channel, isSelected: !channel.isSelected } : channel
      )
    );
  };

  const handleTemplateToggle = (id: string) => {
    setTemplateList((prev) =>
      prev.map((template) =>
        template.id === id ? { ...template, isSelected: true } : { ...template, isSelected: false }
      )
    );
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      // Send report and show success
      console.log("Send report");
      setShowSuccess(true);
    }
  };

  const handleGoBackToReports = () => {
    setShowSuccess(false);
    onOpenChange(false);
  };

  const handleCancel = () => {
    if (currentStep === 1) {
      onOpenChange(false);
    } else if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 4) {
      setCurrentStep(3);
    }
  };

  const selectedCount = buckets.find((b) => b.isSelected)?.hniCount || 32;
  const filteredRecipients = searchQuery
    ? recipientList.filter(
        (r) =>
          r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (r.email && r.email.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : recipientList;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "p-0 max-h-[90vh] rounded-2xl overflow-hidden border-0 shadow-none flex flex-col",
          showSuccess
            ? "bg-white border border-[#cfdbe4] border-solid !w-[450px] !max-w-[450px]"
            : "bg-[#f4f8fb] !w-[900px] !max-w-[900px]"
        )}
      >
        {showSuccess ? (
          <div className="bg-white flex flex-col gap-8 items-center justify-center p-6 relative shrink-0 w-full">
            <div className="flex flex-col gap-5 items-center relative shrink-0 w-full">
              <div className="h-[122px] relative shrink-0 w-[154px]">
                <img
                  alt="Success"
                  className="block max-w-none size-full"
                  src={PUBLISH_MODAL_ICONS.REPORT_SENT_SUCCESS}
                />
              </div>
              <div className="flex flex-col gap-4 items-center leading-[0] relative shrink-0 text-center w-full">
                <h3 className="text-[#15253f] text-xl font-semibold leading-[1.25]">
                  Report sent successfully.
                </h3>
                <p className="text-[#6f7a8b] text-sm font-normal leading-[1.4]">
                  Your selected clients have received the report. You can track engagement and analytics from the report details page
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleGoBackToReports}
              className="border border-[rgba(47,84,145,0.2)] border-solid flex items-center justify-center px-3 py-3.5 relative rounded-lg shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-[#3b67b0] text-xs font-semibold leading-[1.4] text-center w-full">
                Go back to Reports
              </span>
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white border-b border-[rgba(47,84,145,0.15)] flex flex-col gap-6 items-start p-6 relative shrink-0 w-full">
          <DialogHeader className="p-0 w-full">
            <div className="flex items-start justify-between w-full">
              <div className="flex gap-3 items-start grow min-w-0">
                <div className="bg-[#f7633e] flex items-center justify-center px-3 py-0.5 rounded-lg shrink-0 size-11">
                  <div className="relative shrink-0 size-[22px]">
                    <img
                      alt="Publish"
                      className="block max-w-none size-full"
                      src={PUBLISH_MODAL_ICONS.PUBLISH_MODAL}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-center grow min-w-0">
                  <DialogTitle className="text-[#2f5491] text-lg font-semibold leading-none tracking-[-0.342px]">
                    Share Report
                  </DialogTitle>
                  <div className="flex gap-1.5 items-center w-full">
                    <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                      {report.companyName}
                    </p>
                    <div className="relative shrink-0 size-[3px]">
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={PUBLISH_MODAL_ICONS.ELLIPSE_465}
                      />
                    </div>
                    <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                      {report.type}
                    </p>
                  </div>
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
            <div className="flex items-start justify-between relative shrink-0 w-full mt-6 overflow-visible">
              <div className="absolute bg-[#e2e8f0] h-0.5 top-4 z-0" style={{ left: 'calc(12.5% + 16px)', width: 'calc(75% - 32px)' }} />
              <div className="flex flex-col items-center pb-[0.01px] pt-0 px-0 grow min-w-0 relative z-10">
                <div
                  className={cn(
                    "flex items-center justify-center mb-[-0.01px] pb-[6.005px] pt-[4.995px] px-0 rounded-2xl shrink-0 size-8",
                    currentStep === 1
                      ? "bg-[#2563eb]"
                      : currentStep > 1
                      ? "bg-[#e9f1ff] border border-[#2563eb]"
                      : "bg-[#e2e8f0]"
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-semibold leading-[21px]",
                      currentStep === 1 ? "text-white" : currentStep > 1 ? "text-[#2563eb]" : "text-[#64748b]"
                    )}
                  >
                    1
                  </p>
                </div>
                <div className="flex flex-col items-start mb-[-0.01px] pb-0 pt-1.5 px-0 shrink-0">
                  <p
                    className={cn(
                      "text-xs font-medium leading-4 text-center",
                      currentStep === 1
                        ? "text-[#1d4ed8]"
                        : currentStep > 1
                        ? "text-[#94a3b8]"
                        : "text-[#94a3b8]"
                    )}
                  >
                    Select Audience
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center pb-[0.01px] pt-0 px-0 grow min-w-0 relative z-10">
                <div
                  className={cn(
                    "flex items-center justify-center mb-[-0.01px] pb-[6.005px] pt-[4.995px] px-0 rounded-2xl shrink-0 size-8",
                    currentStep === 2
                      ? "bg-[#2563eb]"
                      : currentStep > 2
                      ? "bg-[#e9f1ff] border border-[#2563eb]"
                      : "bg-[#e2e8f0]"
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-semibold leading-[21px]",
                      currentStep === 2 ? "text-white" : currentStep > 2 ? "text-[#2563eb]" : "text-[#64748b]"
                    )}
                  >
                    2
                  </p>
                </div>
                <div className="flex flex-col items-start mb-[-0.01px] pb-0 pt-1.5 px-0 shrink-0">
                  <p
                    className={cn(
                      "text-xs font-medium leading-4 text-center",
                      currentStep === 2
                        ? "text-[#1d4ed8]"
                        : currentStep > 2
                        ? "text-[#94a3b8]"
                        : "text-[#94a3b8]"
                    )}
                  >
                    Refine List
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center pb-[0.01px] pt-0 px-0 grow min-w-0 relative z-10">
                <div
                  className={cn(
                    "flex items-center justify-center mb-[-0.01px] pb-[6.005px] pt-[4.995px] px-0 rounded-2xl shrink-0 size-8",
                    currentStep === 3
                      ? "bg-[#2563eb]"
                      : currentStep > 3
                      ? "bg-[#e9f1ff] border border-[#2563eb]"
                      : "bg-[#e2e8f0]"
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-semibold leading-[21px]",
                      currentStep === 3 ? "text-white" : currentStep > 3 ? "text-[#2563eb]" : "text-[#64748b]"
                    )}
                  >
                    3
                  </p>
                </div>
                <div className="flex flex-col items-start mb-[-0.01px] pb-0 pt-1.5 px-0 shrink-0">
                  <p
                    className={cn(
                      "text-xs font-medium leading-4 text-center",
                      currentStep === 3
                        ? "text-[#1d4ed8]"
                        : currentStep > 3
                        ? "text-[#94a3b8]"
                        : "text-[#94a3b8]"
                    )}
                  >
                    Channel
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center pb-[0.01px] pt-0 px-0 grow min-w-0 relative z-10">
                <div
                  className={cn(
                    "flex items-center justify-center mb-[-0.01px] pb-[6.005px] pt-[4.995px] px-0 rounded-2xl shrink-0 size-8",
                    currentStep === 4
                      ? "bg-[#2563eb]"
                      : currentStep > 4
                      ? "bg-[#e9f1ff] border border-[#2563eb]"
                      : "bg-[#e2e8f0]"
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-semibold leading-[21px]",
                      currentStep === 4 ? "text-white" : currentStep > 4 ? "text-[#2563eb]" : "text-[#64748b]"
                    )}
                  >
                    4
                  </p>
                </div>
                <div className="flex flex-col items-start mb-[-0.01px] pb-0 pt-1.5 px-0 shrink-0">
                  <p
                    className={cn(
                      "text-xs font-medium leading-4 text-center",
                      currentStep === 4
                        ? "text-[#1d4ed8]"
                        : currentStep > 4
                        ? "text-[#94a3b8]"
                        : "text-[#94a3b8]"
                    )}
                  >
                    Compose
                  </p>
                </div>
              </div>
            </div>
          </DialogHeader>
        </div>
        <div className="bg-white flex flex-col gap-6 items-start px-6 py-7 relative w-full overflow-y-auto flex-1 min-h-0">
          {currentStep === 1 ? (
            <>
              <div className="flex gap-1.5 items-start justify-between relative shrink-0 w-full">
                <div className="flex flex-col gap-1.5 items-start grow min-w-0">
                  <h3 className="text-[#2f5491] text-xl font-semibold leading-none tracking-[-0.38px]">
                    Who should receive this insight?
                  </h3>
                  <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                    Select pre-defined smart groups or search for individuals.
                  </p>
                </div>
                <div className="flex gap-2.5 items-center relative shrink-0">
                  <button className="border border-[#f7633e] border-solid flex gap-1 items-center justify-center pl-1.5 pr-3 py-1.5 rounded-md shrink-0">
                    <div className="relative shrink-0 size-4">
                      <img
                        alt="Refresh"
                        className="block max-w-none size-full"
                        src={PUBLISH_MODAL_ICONS.REFRESH}
                      />
                    </div>
                    <span className="text-[#f7633e] text-xs font-medium leading-[1.25]">
                      Refresh Suggestion
                    </span>
                  </button>
                  <button
                    className="flex gap-1 items-center justify-center pl-1.5 pr-3 py-1.5 rounded-md shrink-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(87.105deg, rgb(246, 94, 57) 0%, rgb(255, 117, 83) 99.226%)",
                    }}
                  >
                    <div className="overflow-clip relative shrink-0 size-4">
                      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]">
                        <div className="absolute inset-[-7.14%_-0.67px]">
                          <img
                            alt="Plus"
                            className="block max-w-none size-full"
                            src={PUBLISH_MODAL_ICONS.PLUS}
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
                        <div className="absolute inset-[-0.67px_-7.14%]">
                          <img
                            alt="Plus Vertical"
                            className="block max-w-none size-full"
                            src={PUBLISH_MODAL_ICONS.PLUS_VERTICAL}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-white text-xs font-medium leading-[1.25]">
                      New Bucket
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
                <div className="flex gap-4 items-start justify-start w-full">
                  {buckets.slice(0, 2).map((bucket) => (
                    <div
                      key={bucket.id}
                      onClick={() => handleBucketToggle(bucket.id)}
                      className={cn(
                        "border border-solid flex flex-col gap-3 items-start p-4 relative rounded-xl bg-white flex-shrink-0 flex-grow-0 w-[418px] cursor-pointer",
                        bucket.isSelected
                          ? "border-[#f7633e]"
                          : "border-[rgba(47,84,145,0.15)]"
                      )}
                    >
                      <div className="flex items-start justify-between relative shrink-0 w-full">
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
                        <div
                          className={cn(
                            "flex items-center justify-center p-[1.667px] relative rounded-full shrink-0 size-6",
                            bucket.isSelected
                              ? "bg-[#f7633e]"
                              : "bg-white border border-[#cbd5e1] border-solid"
                          )}
                        >
                          {bucket.isSelected && (
                            <div className="relative shrink-0 flex items-center justify-center">
                              <svg
                                className="size-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center relative shrink-0 w-full">
                        <h4 className="text-[#15253f] text-base font-semibold leading-6">
                          {bucket.name}
                        </h4>
                        <p className="text-[#64748b] text-xs font-normal leading-4 w-full">
                          {bucket.description}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center relative shrink-0 w-full">
                        <div className="bg-[#eef2ff] border-[0.8px] border-[rgba(67,56,202,0.1)] border-solid flex flex-col items-start px-2.5 py-1 relative rounded shrink-0">
                          <p className="text-[#4338ca] text-[10px] font-medium leading-4">
                            {bucket.hniCount} HNIs
                          </p>
                        </div>
                        {bucket.relevance === "High Relevance" && (
                          <div className="bg-[#f0fdf4] border-[0.8px] border-[rgba(21,128,61,0.1)] border-solid flex flex-col items-start px-2.5 py-1 relative rounded shrink-0">
                            <p className="text-[#15803d] text-[10px] font-medium leading-4">
                              {bucket.relevance}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 items-start justify-start w-full">
                  {buckets.slice(2).map((bucket) => (
                    <div
                      key={bucket.id}
                      onClick={() => handleBucketToggle(bucket.id)}
                      className={cn(
                        "border border-solid flex flex-col gap-3 items-start p-4 relative rounded-xl bg-white flex-shrink-0 flex-grow-0 w-[418px] cursor-pointer",
                        bucket.isSelected
                          ? "border-[#f7633e]"
                          : "border-[rgba(47,84,145,0.15)]"
                      )}
                    >
                      <div className="flex items-start justify-between relative shrink-0 w-full">
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
                        <div
                          className={cn(
                            "flex items-center justify-center p-[1.667px] relative rounded-full shrink-0 size-6",
                            bucket.isSelected
                              ? "bg-[#f7633e]"
                              : "bg-white border border-[#cbd5e1] border-solid"
                          )}
                        >
                          {bucket.isSelected && (
                            <div className="relative shrink-0 flex items-center justify-center">
                              <svg
                                className="size-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-center relative shrink-0 w-full">
                        <h4 className="text-[#15253f] text-base font-semibold leading-6">
                          {bucket.name}
                        </h4>
                        <p className="text-[#64748b] text-xs font-normal leading-4 w-full">
                          {bucket.description}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center relative shrink-0 w-full">
                        <div className="bg-[#eef2ff] border-[0.8px] border-[rgba(67,56,202,0.1)] border-solid flex flex-col items-start px-2.5 py-1 relative rounded shrink-0">
                          <p className="text-[#4338ca] text-[10px] font-medium leading-4">
                            {bucket.hniCount} HNIs
                          </p>
                        </div>
                        {bucket.relevance === "High Relevance" && (
                          <div className="bg-[#f0fdf4] border-[0.8px] border-[rgba(21,128,61,0.1)] border-solid flex flex-col items-start px-2.5 py-1 relative rounded shrink-0">
                            <p className="text-[#15803d] text-[10px] font-medium leading-4">
                              {bucket.relevance}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : currentStep === 2 ? (
            <>
              <div className="flex items-start justify-between relative shrink-0 w-full">
                <div className="flex flex-col gap-1.5 items-start grow min-w-0">
                  <h3 className="text-[#2f5491] text-xl font-semibold leading-none tracking-[-0.38px]">
                    Refine Recipient List
                  </h3>
                  <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                    Review the <span className="font-semibold">{selectedCount} HNIs</span> selected from your groups.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 items-start relative shrink-0 w-full">
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <div className="bg-white border-[#cfdbe4] border-[0.6px] border-solid flex gap-2 h-[30px] items-center px-2 py-0 rounded-md shrink-0 w-[360px]">
                    <div className="relative shrink-0 size-4">
                      <img
                        alt="Search"
                        className="block max-w-none size-full"
                        src={PUBLISH_MODAL_ICONS.SEARCH_REFINE}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Search by Name or Email"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 text-[#878d99] text-sm leading-none bg-transparent border-0 outline-none"
                    />
                  </div>
                  <button
                    onClick={handleClearAll}
                    className="border border-[#ef4e4e] border-solid flex items-center justify-center px-3 py-1.5 relative rounded-md shrink-0"
                  >
                    <span className="text-[#ef4e4e] text-xs font-medium leading-[1.25]">
                      Clear All
                    </span>
                  </button>
                </div>
                <div className="flex flex-col items-start relative shrink-0 w-full">
                  <div className="bg-white border-[#cfdbe4] border-[0.8px] border-solid flex flex-col items-center overflow-clip relative rounded-xl shrink-0 w-full">
                    <div className="bg-[#f0f4fa] border-[#d3e1f5] border-b flex flex-col items-start px-4 py-2 relative shrink-0 w-full">
                      <div className="flex gap-6 items-center relative shrink-0 w-full">
                        <div className="overflow-clip relative shrink-0 size-[22px] cursor-pointer" onClick={handleSelectAll}>
                          <div className="absolute inset-[12.5%]">
                            <div className="absolute inset-[-4.85%]">
                              <img
                                alt="Checkbox"
                                className="block max-w-none size-full"
                                src={
                                  recipientList.every((r) => r.isSelected)
                                    ? PUBLISH_MODAL_ICONS.CHECKBOX_CHECKED
                                    : PUBLISH_MODAL_ICONS.CHECKBOX_UNCHECKED
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="basis-0 flex flex-col font-semibold grow justify-center leading-[0] min-w-0 relative shrink-0 text-[#2e518a] text-xs uppercase">
                          <p className="leading-[1.3]">Name/Email</p>
                        </div>
                        <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs uppercase w-[140px]">
                          <p className="leading-[1.3]">Portfolio (AUM)</p>
                        </div>
                        <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#2e518a] text-xs text-center uppercase w-[160px]">
                          <p className="leading-[1.35]">RISK profile</p>
                        </div>
                      </div>
                    </div>
                    {filteredRecipients.map((recipient) => {
                      const riskStyles = getRiskProfileStyles(recipient.riskProfile);
                      return (
                        <div
                          key={recipient.id}
                          className={cn(
                            "border-[#edefef] border-b flex flex-col items-start px-4 py-2.5 relative shrink-0 w-full",
                            !recipient.email && "bg-[#f8fbff]"
                          )}
                        >
                          <div className="flex gap-6 items-center relative shrink-0 w-full">
                            <div
                              className="overflow-clip relative shrink-0 size-[22px] cursor-pointer"
                              onClick={() => handleRecipientToggle(recipient.id)}
                            >
                              <div className="absolute inset-[12.5%]">
                                <div className="absolute inset-[-4.85%]">
                                  <img
                                    alt="Checkbox"
                                    className="block max-w-none size-full"
                                    src={
                                      recipient.isSelected
                                        ? PUBLISH_MODAL_ICONS.CHECKBOX_CHECKED
                                        : PUBLISH_MODAL_ICONS.CHECKBOX_UNCHECKED
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="basis-0 flex gap-2.5 grow items-center min-w-0 relative shrink-0">
                              <div
                                className="flex items-center justify-center relative rounded-full shrink-0 size-10"
                                style={{ backgroundColor: recipient.avatarColor }}
                              >
                                <p className="text-white text-[15px] font-bold leading-5 text-center">
                                  {recipient.initials}
                                </p>
                              </div>
                              <div className="flex flex-col gap-0.5 items-start leading-[0] relative shrink-0">
                                <p className="text-[#15253f] text-sm font-medium leading-5">
                                  {recipient.name}
                                </p>
                                {recipient.email && (
                                  <p className="text-[#6b7280] text-xs font-normal leading-[15px]">
                                    {recipient.email}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#15253f] text-sm w-[140px]">
                              <p className="leading-[1.3]">{recipient.portfolio}</p>
                            </div>
                            <div className="flex items-center justify-center relative shrink-0 w-[160px]">
                              <div
                                className={cn(
                                  "flex h-7 items-center justify-center px-3 py-1.5 relative rounded-full shrink-0 w-[90px]",
                                  riskStyles.bg,
                                  riskStyles.border,
                                  "border"
                                )}
                              >
                                <p className={cn("text-[10px] font-medium leading-[1.3]", riskStyles.text)}>
                                  {recipient.riskProfile}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : currentStep === 3 ? (
            <>
              <div className="flex items-start justify-between relative shrink-0 w-full">
                <div className="flex flex-col gap-1.5 items-start grow min-w-0">
                  <h3 className="text-[#2f5491] text-xl font-semibold leading-none tracking-[-0.38px]">
                    Choose Distribution Channel
                  </h3>
                  <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                    How would you like to deliver this report?
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start justify-center relative shrink-0 w-full">
                {channelList.map((channel) => (
                  <div
                    key={channel.id}
                    onClick={() => handleChannelToggle(channel.id)}
                    className={cn(
                      "border border-solid flex flex-col gap-3 items-start p-4 relative rounded-xl bg-white basis-0 grow cursor-pointer self-stretch",
                      channel.isSelected
                        ? "border-[#f7633e]"
                        : "border-[rgba(47,84,145,0.15)]"
                    )}
                  >
                    <div className="flex items-start justify-between relative shrink-0 w-full">
                      {channel.id === "1" ? (
                        <div
                          className="flex items-center justify-center relative rounded-lg shrink-0 size-10"
                          style={{ backgroundColor: channel.iconBg }}
                        >
                          <div className="relative shrink-0 size-5">
                            <img
                              alt={channel.name}
                              className="block max-w-none size-full"
                              src={channel.icon}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative shrink-0 size-10">
                          <img
                            alt={channel.name}
                            className="block max-w-none size-full rounded-lg"
                            src={channel.icon}
                          />
                        </div>
                      )}
                      <div
                        className={cn(
                          "flex items-center justify-center p-[1.667px] relative rounded-full shrink-0",
                          channel.isSelected
                            ? "bg-[#f7633e] size-6"
                            : "bg-white border border-[#cbd5e1] border-solid size-6"
                        )}
                      >
                        {channel.isSelected && (
                          <div className="relative shrink-0 flex items-center justify-center">
                            <svg
                              className="size-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center relative shrink-0 w-full">
                      <h4 className="text-[#15253f] text-base font-semibold leading-6">
                        {channel.name}
                      </h4>
                      {channel.id === "3" ? (
                        <div className="text-[#64748b] text-xs font-normal leading-4 w-full">
                          <p className="mb-0">Secure whatsapp message via</p>
                          <p>approved compliant gateway.</p>
                        </div>
                      ) : (
                        <p className="text-[#64748b] text-xs font-normal leading-4 w-full">
                          {channel.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : currentStep === 4 ? (
            <>
              <div className="flex items-start justify-between relative shrink-0 w-full">
                <div className="flex flex-col gap-1.5 items-start grow min-w-0">
                  <h3 className="text-[#2f5491] text-xl font-semibold leading-none tracking-[-0.38px]">
                    Compose Email
                  </h3>
                  <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                    Use auto-generated templates or create your own
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[26px] items-start relative shrink-0 w-full">
                <div className="flex gap-3 items-center relative shrink-0 w-full">
                  {templateList.map((template) => (
                    <div
                      key={template.id}
                      onClick={() => handleTemplateToggle(template.id)}
                      className={cn(
                        "border border-solid flex flex-col gap-1.5 items-start p-3 relative rounded-[10px] bg-white basis-0 grow cursor-pointer self-stretch",
                        template.isSelected
                          ? "border-[#f7633e]"
                          : "border-[rgba(47,84,145,0.15)]"
                      )}
                    >
                      <div
                        className="border-[0.8px] border-solid flex flex-col items-start px-2.5 py-1 relative rounded shrink-0"
                        style={{
                          backgroundColor: template.tagBg,
                          borderColor: template.tagBorder,
                        }}
                      >
                        <p
                          className="text-[10px] font-medium leading-4"
                          style={{ color: template.tagColor }}
                        >
                          {template.tag}
                        </p>
                      </div>
                      <h4 className="text-[#15253f] text-sm font-semibold leading-6">
                        {template.name}
                      </h4>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                  <label className="text-[#15253f] text-sm font-medium leading-normal">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-white border border-[#e2e8f0] border-solid flex h-11 items-center justify-between px-4 py-2.5 relative rounded-lg shrink-0 w-full text-[#15253f] text-sm leading-[18px] outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                  <div className="flex items-center justify-between relative shrink-0 w-full">
                    <label className="text-[#15253f] text-sm font-medium leading-normal">
                      Body
                    </label>
                    <button
                      type="button"
                      className="flex gap-1 items-center relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      <div className="relative shrink-0 size-4">
                        <img
                          alt="AI Rephrase"
                          className="block max-w-none size-full"
                          src={PUBLISH_MODAL_ICONS.AI_REPHRASE}
                        />
                      </div>
                      <span className="text-[#3b67b0] text-xs leading-normal">AI Rephrase</span>
                    </button>
                  </div>
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows={10}
                    className="bg-white border border-[#e2e8f0] border-solid flex items-start justify-between px-4 py-3.5 relative rounded-lg shrink-0 w-full text-[#15253f] text-sm leading-[18px] outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </>
          ) : null}
            </div>
            <div className="bg-white border-t border-[#d3e1f5] border-solid flex items-center justify-between p-6 relative shrink-0 w-full z-10">
              <p className="text-[#4a5565] text-sm font-normal leading-[1.4]">
                Auto-saved 1m ago
              </p>
              <div className="flex gap-3 items-center relative shrink-0">
                {currentStep === 1 ? (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="border border-[#213a63] border-solid bg-white flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 w-[140px] hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-[#213a63] text-sm font-medium leading-[1.25]">
                      Cancel
                    </span>
                  </button>
                ) : currentStep === 2 ? (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="border border-[#213a63] border-solid bg-white flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 w-[140px] hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-[#213a63] text-sm font-medium leading-[1.25]">
                      Cancel
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="border border-[#213a63] border-solid bg-white flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 w-[140px] hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-[#213a63] text-sm font-medium leading-[1.25]">
                      Back
                    </span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleContinue}
                  className="bg-[#213a63] flex h-9 items-center justify-center px-4 py-2.5 rounded-lg shrink-0 w-[140px] hover:bg-[#1e2f52] transition-colors cursor-pointer"
                >
                  <span className="text-white text-sm font-medium leading-[1.25]">
                    {currentStep === 4 ? "Send Report" : "Continue"}
                  </span>
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PublishModal;
