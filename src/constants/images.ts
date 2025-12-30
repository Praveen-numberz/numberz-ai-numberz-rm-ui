// Image URLs from Figma MCP server
// In production, these should be replaced with actual image assets
export const IMAGES = {
  BEEP_BEEP_SMALL_VEHICLE:
    "http://localhost:3845/assets/98e8c260ce805610ed90aac25f92fc8c0832fe84.png",
  BEEP_BEEP_TRAFFIC_LIGHT:
    "http://localhost:3845/assets/61134771be052a0ec0ccc7111e3caab4d6ce7baf.png",
  BEEP_BEEP_SIGHTSEEING:
    "http://localhost:3845/assets/ec7f8ae1bc8ce77c1f1a75dd210593d6caac5784.png",
  BEEP_BEEP_UFO:
    "http://localhost:3845/assets/14893e9b52421af40cae3e062b09ee061b5ffbdc.png",
  FRAME_1984078457:
    "http://localhost:3845/assets/b10423d9b69e8f4e5bfdccbcd2c9a32251a6dcb6.png",
  FRAME_1984078458:
    "http://localhost:3845/assets/47787b4eb87537a040d752596d81493083661d26.png",
  IMAGE_1851:
    "http://localhost:3845/assets/fdc99f83426920b38b2eb22cc2f29b9723edfe9e.png",
  IMAGE_1852:
    "http://localhost:3845/assets/b670441f66636d368a7a34db62ba5353c04e0f74.png",
  IMAGE_1859: "http://localhost:3845/assets/acd525bccb8a5914028ddda05e053352c03755e9.png",
  IMAGE_1860: "http://localhost:3845/assets/4d5f6fe33a12c6f3c1290a164f70fdabb3b1da2c.png",
  IMAGE_1861: "http://localhost:3845/assets/2f41035ecffc24c63ba13595e743b40ac10007c0.png",
} as const;

// Sidebar SVG icons - imported from local assets
import collapseChevronIcon from "assets/icons/collapse-chevron.svg";
import chevronDownIcon from "assets/icons/chevron-down.svg";
import overviewIcon from "assets/icons/overview.svg";
import clientsIcon from "assets/icons/clients.svg";
import publishedReportsIcon from "assets/icons/published-reports.svg";
import incentivesIcon from "assets/icons/incentives.svg";
import researchDeskIcon from "assets/icons/research-desk.svg";
import reportsIcon from "assets/icons/reports.svg";
import organization1Icon from "assets/icons/organization-1.svg";
import organization2Icon from "assets/icons/organization-2.svg";
import organization3Icon from "assets/icons/organization-3.svg";
import settingsIcon from "assets/icons/settings.svg";
import hnisIcon from "assets/icons/hnis.svg";
import engagementIcon from "assets/icons/engagement.svg";
import integrationsMaskIcon from "assets/icons/integrations-mask.svg";
import integrationsIcon from "assets/icons/integrations-icon.svg";

export const SIDEBAR_ICONS = {
  COLLAPSE_CHEVRON: collapseChevronIcon,
  CHEVRON_DOWN: chevronDownIcon,
  OVERVIEW: overviewIcon,
  CLIENTS: clientsIcon,
  PUBLISHED_REPORTS: publishedReportsIcon,
  INCENTIVES: incentivesIcon,
  RESEARCH_DESK: researchDeskIcon,
  REPORTS: reportsIcon,
  ORGANIZATION_1: organization1Icon,
  ORGANIZATION_2: organization2Icon,
  ORGANIZATION_3: organization3Icon,
  SETTINGS: settingsIcon,
  HNIS: hnisIcon,
  ENGAGEMENT: engagementIcon,
  INTEGRATIONS_MASK: integrationsMaskIcon,
  INTEGRATIONS: integrationsIcon,
} as const;

// Dashboard SVG icons - imported from local assets
import plusVerticalIcon from "assets/icons/plus-vertical.svg";
import plusHorizontalIcon from "assets/icons/plus-horizontal.svg";
import currencyDollarIcon from "assets/icons/currency-dollar.svg";
import calendarIcon from "assets/icons/calendar.svg";
import envelopeIcon from "assets/icons/envelope.svg";
import chartTargetIcon from "assets/icons/chart-target.svg";
import infoIcon from "assets/icons/info.svg";
import warningIcon from "assets/icons/warning.svg";
import plusIcon from "assets/icons/plus.svg";
import bookClosedIcon from "assets/icons/book-closed.svg";
import chevronRightIcon from "assets/icons/chevron-right.svg";
import chevronRightAltIcon from "assets/icons/chevron-right-alt.svg";
import chevronRightLargeIcon from "assets/icons/chevron-right-large.svg";
import calendarSmallIcon from "assets/icons/calendar-small.svg";
import chevronRightAppointmentsIcon from "assets/icons/chevron-right-appointments.svg";
import dividerLineIcon from "assets/icons/divider-line.svg";
import calendarDateIcon from "assets/icons/calendar-date.svg";
import chevronRightRepositoryIcon from "assets/icons/chevron-right-repository.svg";
import dividerLine25Icon from "assets/icons/divider-line-25.svg";
import dividerLine26Icon from "assets/icons/divider-line-26.svg";
import dividerLine27Icon from "assets/icons/divider-line-27.svg";
import calendarScheduleIcon from "assets/icons/calendar-schedule.svg";
import dividerLine25NewIcon from "assets/icons/divider-line-25-new.svg";
import dividerLine26NewIcon from "assets/icons/divider-line-26-new.svg";
import arrowSmallLeftIcon from "assets/icons/arrow-small-left.svg";
import calendarSmallHeaderIcon from "assets/icons/calendar-small-header.svg";
import image1859Icon from "assets/images/image-1859.png";
import image1860Icon from "assets/images/image-1860.png";
import image1861Icon from "assets/images/image-1861.png";

export const DASHBOARD_ICONS = {
  PLUS_VERTICAL: plusVerticalIcon,
  PLUS_HORIZONTAL: plusHorizontalIcon,
  CURRENCY_DOLLAR: currencyDollarIcon,
  CALENDAR: calendarIcon,
  ENVELOPE: envelopeIcon,
  CHART_TARGET: chartTargetIcon,
  INFO: infoIcon,
  WARNING: warningIcon,
  PLUS: plusIcon,
  BOOK_CLOSED: bookClosedIcon,
  CHEVRON_RIGHT: chevronRightIcon,
  CHEVRON_RIGHT_ALT: chevronRightAltIcon,
  CHEVRON_RIGHT_LARGE: chevronRightLargeIcon,
  CALENDAR_SMALL: calendarSmallIcon,
  CHEVRON_RIGHT_APPOINTMENTS: chevronRightAppointmentsIcon,
  DIVIDER_LINE: dividerLineIcon,
  CALENDAR_DATE: calendarDateIcon,
  CHEVRON_RIGHT_REPOSITORY: chevronRightRepositoryIcon,
  DIVIDER_LINE_25: dividerLine25Icon,
  DIVIDER_LINE_26: dividerLine26Icon,
  DIVIDER_LINE_27: dividerLine27Icon,
  CALENDAR_SCHEDULE: calendarScheduleIcon,
  DIVIDER_LINE_25_NEW: dividerLine25NewIcon,
  DIVIDER_LINE_26_NEW: dividerLine26NewIcon,
  ARROW_SMALL_LEFT: arrowSmallLeftIcon,
  CALENDAR_SMALL_HEADER: calendarSmallHeaderIcon,
} as const;

// Dashboard images - imported from local assets
export const DASHBOARD_IMAGES = {
  IMAGE_1859: image1859Icon,
  IMAGE_1860: image1860Icon,
  IMAGE_1861: image1861Icon,
} as const;

// Reports SVG icons - imported from local assets
import reportsEmptyStateIcon from "assets/icons/reports-empty-state.svg";
import searchIcon from "assets/icons/search.svg";
import filterIcon from "assets/icons/filter.svg";
import ellipse464Icon from "assets/icons/ellipse-464.svg";
import chevronRightSmallIcon from "assets/icons/chevron-right-small.svg";
import chevronRightPublishedIcon from "assets/icons/chevron-right-published.svg";
import publishIcon from "assets/icons/publish-icon.svg";
import publishIconFilledIcon from "assets/icons/publish-icon-filled.svg";

export const REPORTS_ICONS = {
  EMPTY_STATE: reportsEmptyStateIcon,
  SEARCH: searchIcon,
  FILTER: filterIcon,
  ELLIPSE_464: ellipse464Icon,
  CHEVRON_RIGHT_SMALL: chevronRightSmallIcon,
  CHEVRON_RIGHT_PUBLISHED: chevronRightPublishedIcon,
  PUBLISH: publishIcon,
  PUBLISH_FILLED: publishIconFilledIcon,
} as const;

// Header SVG icons - imported from local assets
import bellIcon from "assets/icons/bell.svg";
import searchHeaderIcon from "assets/icons/search.svg";

export const HEADER_ICONS = {
  BELL: bellIcon,
  SEARCH: searchHeaderIcon,
} as const;

// Publish Modal SVG icons - imported from local assets
import publishModalIcon from "assets/icons/publish-modal-icon.svg";
import ellipse465Icon from "assets/icons/ellipse-465.svg";
import closeIcon from "assets/icons/close-icon.svg";
import refreshIcon from "assets/icons/refresh-icon.svg";
import plusIconModal from "assets/icons/plus-icon-modal.svg";
import plusIconModalVertical from "assets/icons/plus-icon-modal-vertical.svg";
import bucketIcon1 from "assets/icons/bucket-icon-1.svg";
import bucketIcon2 from "assets/icons/bucket-icon-2.svg";
import bucketIcon3 from "assets/icons/bucket-icon-3.svg";
import bucketIconIncomeSeekers from "assets/icons/income-seekers.svg";
import bucketIconBalanced from "assets/icons/bucket-icon-balanced.svg";
import bucketIconOpportunity from "assets/icons/bucket-icon-opportunity-binoculars.svg";
import searchRefineIcon from "assets/icons/search-refine.svg";
import checkboxCheckedIcon from "assets/icons/checkbox-checked.svg";
import checkboxUncheckedIcon from "assets/icons/checkbox-unchecked.svg";
import chevronDownRefineIcon from "assets/icons/chevron-down-refine.svg";
import userAvatarIcon from "assets/icons/user-avatar-icon.svg";
import channelEmailIcon from "assets/icons/channel-email-icon.svg";
import channelMobileIcon from "assets/icons/mobile.svg";
import channelWhatsappIcon from "assets/icons/whats-app.svg";
import aiRephraseIcon from "assets/icons/ai-rephrase-icon.svg";
import reportSentSuccessImage from "assets/images/report-sent-success.svg";
import viewProfileIcon from "assets/icons/view-profile-icon.svg";
import scheduleCallIcon from "assets/icons/schedule-call-icon.svg";
import sparkleIcon from "assets/icons/sparkle-icon.svg";
import bucketTechGrowthIcon from "assets/icons/bucket-tech-growth.svg";
import bucketBalancedIcon from "assets/icons/bucket-balanced.svg";
import bucketPreIpoIcon from "assets/icons/bucket-pre-ipo.svg";
import bucketOpportunityIcon from "assets/icons/bucket-opportunity.svg";
import dividerLine33Icon from "assets/icons/divider-line-33.svg";
import editGroupIcon from "assets/icons/edit-group-icon.svg";
import searchSidebarIcon from "assets/icons/search-sidebar-icon.svg";
import editGroupHeaderIcon from "assets/icons/edit-group-header-icon.svg";
import removeClientIcon from "assets/icons/remove-client-icon.svg";
import searchEditGroupIcon from "assets/icons/search-edit-group-icon.svg";

export const PUBLISH_MODAL_ICONS = {
  PUBLISH_MODAL: publishModalIcon,
  ELLIPSE_465: ellipse465Icon,
  CLOSE: closeIcon,
  REFRESH: refreshIcon,
  PLUS: plusIconModal,
  PLUS_VERTICAL: plusIconModalVertical,
  BUCKET_1: bucketIcon1,
  BUCKET_2: bucketIcon2,
  BUCKET_3: bucketIcon3,
  BUCKET_INCOME_SEEKERS: bucketIconIncomeSeekers,
  BUCKET_BALANCED: bucketIconBalanced,
  BUCKET_OPPORTUNITY: bucketIconOpportunity,
  SEARCH_REFINE: searchRefineIcon,
  CHECKBOX_CHECKED: checkboxCheckedIcon,
  CHECKBOX_UNCHECKED: checkboxUncheckedIcon,
  CHEVRON_DOWN_REFINE: chevronDownRefineIcon,
  USER_AVATAR: userAvatarIcon,
  CHANNEL_EMAIL: channelEmailIcon,
  CHANNEL_MOBILE: channelMobileIcon,
  CHANNEL_WHATSAPP: channelWhatsappIcon,
  AI_REPHRASE: aiRephraseIcon,
  REPORT_SENT_SUCCESS: reportSentSuccessImage,
} as const;

// Client Book SVG icons - imported from local assets
export const CLIENT_BOOK_ICONS = {
  VIEW_PROFILE: viewProfileIcon,
  SCHEDULE_CALL: scheduleCallIcon,
  SPARKLE: sparkleIcon,
  BUCKET_TECH_GROWTH: bucketTechGrowthIcon,
  BUCKET_BALANCED: bucketBalancedIcon,
  BUCKET_PRE_IPO: bucketPreIpoIcon,
  BUCKET_OPPORTUNITY: bucketOpportunityIcon,
  DIVIDER_LINE_33: dividerLine33Icon,
  EDIT_GROUP: editGroupIcon,
  SEARCH_SIDEBAR: searchSidebarIcon,
  EDIT_GROUP_HEADER: editGroupHeaderIcon,
  REMOVE_CLIENT: removeClientIcon,
  SEARCH_EDIT_GROUP: searchEditGroupIcon,
} as const;

