import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CommonSidebar from "./commonSidebar";

export function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="grid gap-4 py-4">
          <CommonSidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
