import { Avatar, Input } from "@nextui-org/react";
// import { SearchIcon } from "./SearchIcon";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="flex gap-4 w-full bg-stone-300 ">
        <div>ICON</div>
        <div>BLOG</div>
        <div>ABOUT</div>
        <div>SEARCH</div>
        <div>Contact</div>
        <div>ICON</div>
        <Avatar
          color="default"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </div>
      <div className="w-full bg-amber-900">navBar</div>
      <div className="w-full bg-red-200">navBar</div>
    </div>
  );
}
