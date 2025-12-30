import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "components/ui/card";
import { Button } from "components/ui/button";
import { Badge } from "components/ui/badge";
import { IMAGES, DASHBOARD_ICONS, DASHBOARD_IMAGES } from "constants/images";
import { cn } from "lib/utils";

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
    <div className="flex flex-col gap-9 items-start pb-10 pt-7 px-7 relative size-full bg-gray-50 overflow-x-hidden">
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        <div className="flex items-center justify-between relative shrink-0 w-full">
          <h2 className="text-[#2f5491] text-[22px] font-semibold leading-[1.25]">
            Welcome, Jose!
          </h2>
          <Button
            onClick={handleCreateCampaign}
            className="bg-gradient-to-r from-[#f65e39] to-[#ff7553] hover:from-[#f65e39]/90 hover:to-[#ff7553]/90 text-xs pl-1.5 pr-3 py-1.5 gap-2 rounded-lg"
          >
            <div className="overflow-clip relative shrink-0 size-5">
              <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]">
                <div className="absolute inset-[-7.14%_-0.83px]">
                  <img alt="" className="block max-w-none size-full" src={DASHBOARD_ICONS.PLUS_VERTICAL} />
                </div>
              </div>
              <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
                <div className="absolute inset-[-0.83px_-7.14%]">
                  <img alt="" className="block max-w-none size-full" src={DASHBOARD_ICONS.PLUS_HORIZONTAL} />
                </div>
              </div>
            </div>
            <span className="text-sm font-medium leading-[1.25]">Create New Campaign</span>
          </Button>
        </div>
        <div className="flex gap-4 items-stretch relative shrink-0 w-full">
          <div className="flex flex-col gap-4 grow items-stretch min-h-0 min-w-0 relative shrink-0">
            <div className="border border-[#e8eef3] border-solid flex gap-[2px] items-start justify-center overflow-clip relative rounded-xl shrink-0 w-full">
              <Card className="basis-0 grow min-h-0 min-w-0 px-4 py-3 relative border-0">
                <CardHeader className="p-0 pb-0">
                  <CardDescription className="text-[#6b7280] text-xs leading-5">
                    Total AUM
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[#2e518a] text-xl font-semibold leading-none">
                      $125.7M
                    </p>
                    <p className="text-green-600 text-[10px] leading-normal">
                      +2.3% last month
                    </p>
                  </div>
                </CardContent>
                <img src={DASHBOARD_ICONS.CURRENCY_DOLLAR} alt="Currency Dollar" className="absolute right-[11.5px] size-5 top-3" />
              </Card>
              <Card className="basis-0 grow min-h-0 min-w-0 px-4 py-3 relative border-0">
                <CardHeader className="p-0 pb-0">
                  <CardDescription className="text-[#6b7280] text-xs leading-5">
                    Upcoming Meetings
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[#2e518a] text-xl font-semibold leading-none">
                      14
                    </p>
                    <p className="text-[#15253f] text-[10px] leading-normal text-center">
                      This week
                    </p>
                  </div>
                </CardContent>
                <img src={DASHBOARD_ICONS.CALENDAR} alt="Calendar" className="absolute right-[11.5px] size-5 top-3" />
              </Card>
              <Card className="basis-0 grow min-h-0 min-w-0 px-4 py-3 relative border-0">
                <CardHeader className="p-0 pb-0">
                  <CardDescription className="text-[#6b7280] text-xs leading-5">
                    Pending Follow-ups
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[#2e518a] text-xl font-semibold leading-none">
                      08
                    </p>
                    <p className="text-[#15253f] text-[10px] leading-normal text-center">
                      This week
                    </p>
                  </div>
                </CardContent>
                <img src={DASHBOARD_ICONS.ENVELOPE} alt="Envelope" className="absolute right-[11.5px] size-5 top-3" />
              </Card>
              <Card className="basis-0 grow min-h-0 min-w-0 px-4 py-3 relative border-0">
                <CardHeader className="p-0 pb-0">
                  <CardDescription className="text-[#6b7280] text-xs leading-5">
                    Avg. Engagement
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[#2e518a] text-xl font-semibold leading-none">
                      68%
                    </p>
                    <p className="text-red-600 text-[10px] leading-normal">
                      -1.5% last campaign
                    </p>
                  </div>
                </CardContent>
                <img src={DASHBOARD_ICONS.CHART_TARGET} alt="Chart Target" className="absolute right-[11.5px] size-5 top-3" />
              </Card>
            </div>
            <div className="border border-[#e8eef3] border-solid flex gap-[2px] items-stretch overflow-clip rounded-xl w-full flex-1">
              <Card className="basis-0 grow min-h-0 min-w-0 px-4 py-3 border-0 flex flex-col">
                <div className="flex flex-col gap-5 flex-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2 items-center">
                      <img src={DASHBOARD_ICONS.INFO} alt="Info" className="size-5" />
                      <CardTitle className="text-[#15253f] text-sm font-bold leading-[1.3]">
                        Follow-Up Pending for Long
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="text-[#2e518a] text-xs leading-[1.3]">View all</span>
                      <img src={DASHBOARD_ICONS.CHEVRON_RIGHT} alt="Chevron" className="size-4" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {followUpItems.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex gap-5 items-center",
                          index === 0 ? "pb-2.5 pt-0" : "py-2.5",
                          index !== followUpItems.length - 1 && "border-b border-[#ebebeb]"
                        )}
                      >
                        <div className="flex flex-col gap-1 grow">
                          <p className="text-[#15253f] text-sm font-semibold leading-[1.3]">
                            {item.name}
                          </p>
                          <p className="text-[#475569] text-xs leading-[1.35]">{item.date}</p>
                        </div>
                        <div className="flex gap-1.5 items-center justify-end w-[120px] shrink-0">
                          <span className="text-[#2e518a] text-xs leading-[1.35]">Schedule Call</span>
                          <img src={DASHBOARD_ICONS.CALENDAR_SCHEDULE} alt="Calendar" className="size-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              <Card className="basis-0 grow min-h-0 min-w-0 px-4 py-3 border-0 flex flex-col">
                <div className="flex flex-col gap-5 flex-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2 items-center">
                      <img src={DASHBOARD_ICONS.WARNING} alt="Warning" className="size-5" />
                      <CardTitle className="text-[#15253f] text-sm font-bold leading-[1.3]">
                        Portfolio - Critical Alerts
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="text-[#2e518a] text-xs leading-[1.3]">View all</span>
                      <img src={DASHBOARD_ICONS.CHEVRON_RIGHT} alt="Chevron" className="size-4" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    {alertItems.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex flex-col gap-4 pl-3 border-l-[3px]",
                          item.type === "warning"
                            ? "border-red-500"
                            : "border-green-500"
                        )}
                      >
                        <div className="flex flex-col gap-1">
                          <p className="text-[#15253f] text-sm font-semibold leading-[1.3]">
                            {item.title}
                          </p>
                          <p className="text-[#475569] text-xs leading-[1.35]">{item.description}</p>
                        </div>
                        <div className="flex gap-0.5 items-center">
                          <span className="text-[#2e518a] text-xs leading-[1.35]">
                            Reallocate Portfolios
                          </span>
                          <img src={DASHBOARD_ICONS.CHEVRON_RIGHT} alt="Chevron" className="size-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <Card className="w-[360px] shrink-0 flex-shrink-0 border border-[#e8eef3] border-solid rounded-xl flex flex-col h-full">
            <div className="flex gap-4 items-center p-4 border-b border-[#f1f5f9]">
              <div
                className="flex h-full items-center justify-center px-3 py-2 shrink-0 w-[110px] rounded"
                style={{ backgroundColor: "#eff3ff" }}
              >
                <img
                  alt=""
                  src={DASHBOARD_IMAGES.IMAGE_1859}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-6 grow min-w-0">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#091e42] text-[13.5px] font-bold leading-[1.2]">
                    Prepare for upcoming calls
                  </p>
                  <p className="text-[#344563] text-[10.5px] font-normal leading-[1.3]">
                    View all scheduled client calls with quick briefs and required prep.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-0.5">
                    <span className="text-[#2e518a] text-xs leading-[1.3]">View call brief</span>
                    <img src={DASHBOARD_ICONS.CHEVRON_RIGHT} alt="Chevron" className="size-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4 border-b border-[#f1f5f9]">
              <div
                className="flex h-full items-center justify-center px-3 py-2 shrink-0 w-[110px] rounded"
                style={{ backgroundColor: "#cef2fe" }}
              >
                <img
                  alt=""
                  src={DASHBOARD_IMAGES.IMAGE_1860}
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col gap-6 grow min-w-0">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#091e42] text-[13.5px] font-bold leading-[1.2]">
                    Check clients with low engagement
                  </p>
                  <p className="text-[#344563] text-[10.5px] font-normal leading-[1.3]">
                    Identify clients who have not interacted recently and prioritize outreach.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-0.5">
                    <span className="text-[#2e518a] text-xs leading-[1.3]">Show details</span>
                    <img src={DASHBOARD_ICONS.CHEVRON_RIGHT} alt="Chevron" className="size-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4">
              <div
                className="flex h-full items-center justify-center px-3 py-2 shrink-0 w-[110px] rounded"
                style={{ backgroundColor: "#edecfe" }}
              >
                <img
                  alt=""
                  src={DASHBOARD_IMAGES.IMAGE_1861}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-6 grow min-w-0">
                <div className="flex flex-col gap-1.5">
                  <p className="text-[#091e42] text-[13.5px] font-bold leading-[1.2]">
                    Review AI bucket recommendation
                  </p>
                  <p className="text-[#344563] text-[10.5px] font-normal leading-[1.3]">
                    See updated client segments generated by AI based on risk and portfolio patterns.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-0.5">
                    <span className="text-[#2e518a] text-xs leading-[1.3]">Review</span>
                    <img src={DASHBOARD_ICONS.CHEVRON_RIGHT} alt="Chevron" className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        <h3 className="text-[#15253f] text-lg font-bold leading-[1.3]">
          Recent Campaigns
        </h3>
        <div className="flex gap-4 items-start justify-center overflow-clip relative shrink-0 w-full">
          {campaigns.map((campaign, index) => (
            <Card key={index} className="basis-0 grow min-h-0 min-w-0 px-4 py-3 border border-[#e8eef3] border-solid rounded-xl">
              <CardHeader className="p-0 pb-0">
                <CardTitle className="text-[#15253f] text-sm font-bold pb-0.5 leading-[1.4]">
                  {campaign.title}
                </CardTitle>
                <div className="h-0 relative shrink-0 w-full my-2">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={index === 0 ? DASHBOARD_ICONS.DIVIDER_LINE_25_NEW : index === 1 ? DASHBOARD_ICONS.DIVIDER_LINE_25_NEW : DASHBOARD_ICONS.DIVIDER_LINE_26_NEW} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex gap-4 items-start mb-7">
                  <div className="flex flex-col gap-1.5 grow">
                    <p
                      className="text-lg font-semibold leading-none"
                      style={{ color: campaign.reachedColor }}
                    >
                      {campaign.reached}
                    </p>
                    <p className="text-[#6b7280] text-xs leading-none">Reached</p>
                  </div>
                  <div className="flex flex-col gap-1.5 grow">
                    <p className="text-[#334155] text-lg font-semibold leading-none">
                      {campaign.viewed}
                    </p>
                    <p className="text-[#6b7280] text-xs leading-none">Viewed</p>
                  </div>
                  <div className="flex flex-col gap-1.5 grow">
                    <p className="text-[#334155] text-lg font-semibold leading-none">
                      {campaign.meetings}
                    </p>
                    <p className="text-[#6b7280] text-xs leading-none">Meetings</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#334155] text-xs text-right">{campaign.date}</p>
                  <div className="bg-[#e8f1ff] flex items-center justify-center h-[26px] px-3 rounded-[50px]">
                    <p className="text-[#2e518a] text-[10px] font-semibold leading-[22px]">View</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start relative shrink-0 w-full">
        <h3 className="text-[#15253f] text-lg font-bold leading-[1.3]">
          Appointments and Repository
        </h3>
        <div className="flex gap-4 items-start justify-center overflow-clip relative shrink-0 w-full">
          <Card className="basis-0 grow min-h-0 min-w-0 h-[216px] p-4 border border-[#e8eef3] border-solid rounded-xl">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-[4px] items-start relative shrink-0">
                <CardTitle className="text-[#091e42] text-sm font-bold leading-normal">
                  Today's Appointments
                </CardTitle>
                <CardDescription className="text-[#64748b] text-xs font-normal leading-[11.25px]">
                  Google Calendar
                </CardDescription>
              </div>
              <div className="flex items-center relative shrink-0">
                <span className="text-[#2e518a] text-xs font-normal leading-[1.3]">View all</span>
                <div className="relative shrink-0 size-4">
                  <img alt="Arrow" className="block max-w-none size-full" src={DASHBOARD_ICONS.ARROW_SMALL_LEFT} />
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full mt-[17px]">
              <div className="absolute inset-[-0.23px_0]">
                <img alt="" className="block max-w-none size-full" src={DASHBOARD_ICONS.DIVIDER_LINE} />
              </div>
            </div>
            <div className="p-0 flex flex-col justify-between h-full">
              <div className="flex gap-[9px] items-center relative shrink-0">
                {appointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="bg-[#fff7ed] border border-[#ffedd5] border-solid flex gap-[6px] items-center overflow-clip pl-1 pr-4 py-1 rounded-[4px] relative shrink-0"
                  >
                    <div className="relative rounded-[2px] shrink-0 size-6">
                      {appointment.avatarUrl && (
                        <img alt={appointment.name} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={appointment.avatarUrl} />
                      )}
                    </div>
                    <p className="text-[#1e293b] text-sm font-normal leading-[11.25px] text-nowrap">{appointment.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between relative shrink-0 w-[153px]">
                <div className="flex gap-[5px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-4">
                    <img alt="Calendar" className="block max-w-none size-full" src={DASHBOARD_ICONS.CALENDAR_SMALL_HEADER} />
                  </div>
                  <p className="text-[#091e42] text-xs font-normal leading-normal text-nowrap">02 Feb 2025, Monday</p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="basis-0 grow min-h-0 min-w-0 h-[216px] p-4 border border-[#e8eef3] border-solid rounded-xl">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-[146px]">
                <CardTitle className="text-[#172b4d] text-sm font-bold leading-normal">
                  Research Repository
                </CardTitle>
                <CardDescription className="text-[#64748b] text-xs font-normal leading-[11.25px]">
                  2 new reports available
                </CardDescription>
              </div>
              <div className="flex items-center relative shrink-0">
                <span className="text-[#2e518a] text-xs font-normal leading-[1.3]">View all</span>
                <div className="relative shrink-0 size-4">
                  <img alt="Arrow" className="block max-w-none size-full" src={DASHBOARD_ICONS.ARROW_SMALL_LEFT} />
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full mt-[16px]">
              <div className="absolute inset-[-0.23px_0]">
                <img alt="" className="block max-w-none size-full" src={DASHBOARD_ICONS.DIVIDER_LINE} />
              </div>
            </div>
            <div className="flex flex-col gap-[17px] items-start relative shrink-0 w-full">
                {repositoryItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between relative shrink-0 w-full">
                    <div className="flex gap-[9px] items-center relative shrink-0">
                      <div className="relative size-8 shrink-0">
                        <div className="absolute bg-white border border-[#dfe1e6] border-solid rounded-[4px] size-8" />
                        <div className="absolute inset-[2.4px] size-[27.2px]">
                          {item.imageUrl && (
                            <img alt={item.name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={item.imageUrl} />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-start relative shrink-0">
                        <div className="flex gap-[9px] items-center relative shrink-0">
                          <p className="text-[#344563] text-sm font-semibold capitalize text-nowrap">
                            {item.name}
                          </p>
                          {item.isNew && (
                            <Badge variant="default" className="bg-[#0052cc] text-white text-[8.25px] px-[3px] py-0 uppercase rounded-[3px] shrink-0">
                              NEW
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[18px]">
                      <div className="absolute inset-[33.33%_37.5%_33.33%_41.67%]">
                        <img alt="Chevron" className="block max-w-none size-full" src={DASHBOARD_ICONS.CHEVRON_RIGHT_REPOSITORY} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
          <Card className="basis-0 grow min-h-0 min-w-0 h-[216px] p-4 border border-[#e8eef3] border-solid rounded-xl">
            <CardContent className="p-0 flex flex-col justify-between h-full">
              <div className="flex gap-5 items-start">
                <div className="flex flex-col gap-1 grow min-w-0">
                  <CardTitle className="text-[#091e42] text-sm font-bold leading-[21px]">
                    Explore New Products
                  </CardTitle>
                  <CardDescription className="text-[#344563] text-xs leading-[1.3]">
                    Stay updated on the latest products to offer better solutions to clients.
                  </CardDescription>
                </div>
                <div className="h-20 overflow-clip rounded-lg w-[135px] relative shrink-0">
                  <div className="absolute bg-[#eeebff] h-[159.75px] left-0 top-[-24px] w-[135px]" />
                  <img
                    alt=""
                    src={IMAGES.BEEP_BEEP_UFO}
                    className="absolute h-[99.75px] left-[20.8px] top-[-9.88px] w-[93.396px] object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="bg-[#e8f1ff] flex gap-0.75 items-center pl-1.5 pr-3 py-0.5 rounded-[64px]">
                  <div className="overflow-clip relative shrink-0 size-5">
                    <div className="absolute inset-[14.8%_23.04%_17.21%_23.01%]">
                      <img alt="Book" className="block max-w-none size-full" src={DASHBOARD_ICONS.BOOK_CLOSED} />
                    </div>
                  </div>
                  <p className="text-[#2e518a] text-xs leading-[1.3]">Read</p>
                </div>
                <div className="flex items-center gap-0.5">
                  <p className="text-[#2e518a] text-xs leading-[1.3]">View all</p>
                  <img src={DASHBOARD_ICONS.CHEVRON_RIGHT_LARGE} alt="Chevron" className="size-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
