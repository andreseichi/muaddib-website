import Link from "next/link";

import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";
import { NavigationMenuHeader } from "./navigation-menu-header";
import { buttonVariants } from "./ui/button";

import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function Header() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50",
        scrollPosition > 0 ? "backdrop-blur-sm border-b" : "bg-transparent",
      )}
    >
      <div className="flex h-20 items-center px-32">
        <div className="flex items-center space-x-10">
          <h1>Muad&apos;dib</h1>

          <NavigationMenuHeader />
        </div>

        <div className="ml-auto flex items-center space-x-1">
          <Link target="_blank" rel="noreferrer" href="#">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0",
              )}
            >
              <Icons.gitHub className="h-4 w-4" />
            </div>
          </Link>

          <Link target="_blank" rel="noreferrer" href="#">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0",
              )}
            >
              <Icons.linkedin className="h-4 w-4" />
            </div>
          </Link>

          <Link target="_blank" rel="noreferrer" href="#">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0",
              )}
            >
              <Icons.twitter className="h-4 w-4" />
            </div>
          </Link>

          <div className="pl-6">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
