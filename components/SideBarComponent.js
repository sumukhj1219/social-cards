import Image from "next/image";
import React from "react";

const SideBarComponent = () => {
  const items = [
    { name: "Dashboard", icon: "🏠", link: "#dashboard" },
    { name: "Projects", icon: "📁", link: "#projects" },
    { name: "Messages", icon: "✉️", link: "#messages" },
    { name: "Settings", icon: "⚙️", link: "#settings" },
    { name: "Logout", icon: "🚪", link: "#logout" },
  ];

  return (
    <div className="group relative h-screen">
      <div className="fixed top-0 left-0 h-full w-16 bg-gray-800 text-white flex flex-col items-center pt-5 transition-all duration-500 group-hover:w-56">
        <div className="mb-10 flex flex-col items-center">
          <Image
            src="/file.svg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
            width={'30'}
            height={'30'}
          />
          <p className="mt-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
            User Name
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="flex items-center space-x-4 px-4 py-2 text-sm transition-colors hover:bg-gray-700"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBarComponent;
