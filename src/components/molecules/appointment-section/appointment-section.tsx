import { forwardRef, ComponentProps } from "react";
import { ChevronRightIcon, CalendarIcon } from "@heroicons/react/24/outline";

export interface Appointment {
  name: string;
  avatarUrl?: string;
}

export interface AppointmentSectionProps extends ComponentProps<"div"> {
  title: string;
  source: string;
  appointments: Appointment[];
  date: string;
  onViewAll?: () => void;
}

const AppointmentSection = forwardRef<HTMLDivElement, AppointmentSectionProps>(
  (
    { title, source, appointments, date, onViewAll, className = "", ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`bg-white flex flex-col gap-[17px] grow h-[180px] items-start min-h-0 min-w-0 overflow-hidden p-4 relative rounded-xl ${className}`}
        {...rest}
      >
        <div className="flex items-start justify-between relative shrink-0 w-full">
          <div className="flex flex-col gap-1 items-start relative shrink-0">
            <p className="text-[#091e42] text-sm font-bold leading-normal relative shrink-0 w-full">
              {title}
            </p>
            <p className="text-gray-500 text-xs font-normal leading-[11.25px] relative shrink-0 w-full">
              {source}
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="bg-transparent h-[18px] overflow-clip relative shrink-0 w-[17.131px]"
          >
            <ChevronRightIcon className="size-full text-[#091e42]" />
          </button>
        </div>
        <div className="h-0 relative shrink-0 w-[350.25px]">
          <div className="absolute inset-[-0.23px_0]">
            <svg
              className="block max-w-none size-full"
              fill="none"
              viewBox="0 0 100 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="0.5"
                x2="100"
                y2="0.5"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col grow items-start justify-between min-h-0 min-w-0 relative shrink-0 w-full">
          <div className="flex gap-2.25 items-center relative shrink-0">
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="bg-orange-50 border border-orange-100 flex gap-1.5 items-center overflow-clip pl-1 pr-4 py-1 relative rounded shrink-0"
              >
                {appointment.avatarUrl ? (
                  <div className="relative rounded-[2px] shrink-0 size-6">
                    <img
                      alt={appointment.name}
                      className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[2px] size-full"
                      src={appointment.avatarUrl}
                    />
                  </div>
                ) : (
                  <div className="relative rounded-[2px] shrink-0 size-6 bg-gray-200" />
                )}
                <p className="text-gray-800 text-sm font-normal leading-[11.25px] relative shrink-0 text-nowrap">
                  {appointment.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between relative shrink-0 w-[153px]">
            <div className="flex gap-1.25 items-center relative shrink-0">
              <CalendarIcon className="size-4 text-[#091e42]" />
              <p className="text-[#091e42] text-xs font-normal leading-normal relative shrink-0 text-nowrap">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

AppointmentSection.displayName = "AppointmentSection";

export default AppointmentSection;

