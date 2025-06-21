import MenuButton from "./MenuButton";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 flex flex-row flex-wrap items-center justify-between w-full px-8 py-4 text-white sm:px-16 bg-background/50">
      <MenuButton />
      <h1 className="text-4xl font-sacramento">Semana Cliff</h1>
      <div className="hidden sm:block">
        <Button size={"lg"} variant={"outline"}>
          Book Now
        </Button>
      </div>
    </div>
  );
}
