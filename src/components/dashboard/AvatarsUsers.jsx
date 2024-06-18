import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PhoneOutgoing } from "lucide-react";

const repartidevs = [
  {
    id: 1,
    nombre: "Ricardo Huaytan",
    email: "rhuaytan@gmail.com",
    avatar: "Willow",
  },
  {
    id: 2,
    nombre: "Steven Fuertes",
    email: "sfuertes@gmail.com",
    avatar: "Harley",
  },
  {
    id: 3,
    nombre: "Juan Perez",
    email: "jperez@gmail.com",
    avatar: "Gizmo",
  },
  {
    id: 4,
    nombre: "Mittens Mittens",
    email: "mmittens@gmail.com",
    avatar: "Mittens",
  },
  {
    id: 5,
    nombre: "Trouble Trouble",
    email: "ttrouble@gmail.com",
    avatar: "Trouble",
  },
  {
    id: 6,
    nombre: "Boo Boo",
    email: "bboo@gmail.com",
    avatar: "Boo",
  },
  {
    id: 7,
    nombre: "Tiger Perez",
    email: "jperez@gmail.com",
    avatar: "Tiger",
  },
  {
    id: 8,
    nombre: "Angel Mittens",
    email: "mmittens@gmail.com",
    avatar: "Angel",
  },
  {
    id: 9,
    nombre: "Scooter Trouble",
    email: "ttrouble@gmail.com",
    avatar: "Scooter",
  },
 
];

export default function AvatarUsers() {
  return (
    <section>
      <div className="grid sm:grid sm:grid-cols-3 xl:grid-cols-1 gap-y-10 gap-x-3 lg:gap-x-10">
        {repartidevs.map((e) => (
          <div key={e.id} className="">
            <div className="flex items-center">
              <div>
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${e.avatar}`}
                    alt="avatar"
                  />
                </Avatar>
              </div>
              <article className="flex-1">
                <p className="text-gray-700 lg:text-xs font-medium">
                  {e.nombre}
                </p>
                <p className="text-gray-500 lg:text-xs">{e.email}</p>
              </article>
              <div className="bg-green-100 p-2 rounded-full">
                <a href="#" className="text-green-500">
                  <PhoneOutgoing className="sm:size-4 xl:size-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
