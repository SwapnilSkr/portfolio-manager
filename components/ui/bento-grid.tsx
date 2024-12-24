import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gradient-to-br from-emerald-500 to-emerald-700 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-[20px] md:text-[16px] lg:text-[20px] text-neutral-200 xs:mb-6 md:mb-2 lg:mb-4 mt-2">
          {title}
        </div>
        {description?.map((item: string, index: number) => (
          <div
            key={index}
            className="flex gap-2 font-sans font-normal mb-4 text-neutral-200 text-xs dark:text-neutral-300"
          >
            <div>➼</div> <div className="text-[16px]">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
