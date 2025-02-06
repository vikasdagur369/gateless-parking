import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const Banners = () => {
  return (
    <div className="w-full mx-auto bg-blue-600 text-white">
      <div className="flex items-center justify-between px-8 py-8">
        <header>
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            <Link href="/">Gateless Parking</Link>
          </h1>
        </header>
        <div>
          <div className="sm:hidden flex space-x-2 items-baseline">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MenuIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Signout</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/mybookings">My bookings </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard">Admin</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden sm:flex gap-x-4 item-center">
            <Link href="/mybookings">My bookings </Link>
            <Link href="/dashboard">Admin</Link>
            Signout Signin
          </div>
        </div>
      </div>
      <div className="bg-blue-600 w full h-20">
        
      </div>
    </div>
  );
};
export default Banners;
