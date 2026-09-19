import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сохраняем адреса фотографий старых проектов после группировки папок.
  async rewrites() {
    return [
    {
        "source": "/images/works/monokosour-3/:file",
        "destination": "/images/works/monokosour/monokosour-3/:file"
    },
    {
        "source": "/images/works/monokosour-4/:file",
        "destination": "/images/works/monokosour/monokosour-4/:file"
    },
    {
        "source": "/images/works/monokosour-5/:file",
        "destination": "/images/works/monokosour/monokosour-5/:file"
    },
    {
        "source": "/images/works/monokosour-6/:file",
        "destination": "/images/works/monokosour/monokosour-6/:file"
    },
    {
        "source": "/images/works/sheet-stringers-1/:file",
        "destination": "/images/works/sheet-stringers/sheet-stringers-1/:file"
    },
    {
        "source": "/images/works/sheet-stringers-2/:file",
        "destination": "/images/works/sheet-stringers/sheet-stringers-2/:file"
    },
    {
        "source": "/images/works/sheet-stringers-3/:file",
        "destination": "/images/works/sheet-stringers/sheet-stringers-3/:file"
    },
    {
        "source": "/images/works/sheet-stringers-4/:file",
        "destination": "/images/works/sheet-stringers/sheet-stringers-4/:file"
    },
    {
        "source": "/images/works/broken-stringers-1/:file",
        "destination": "/images/works/broken-stringers/broken-stringers-1/:file"
    },
    {
        "source": "/images/works/broken-stringers-2/:file",
        "destination": "/images/works/broken-stringers/broken-stringers-2/:file"
    },
    {
        "source": "/images/works/broken-stringers-3/:file",
        "destination": "/images/works/broken-stringers/broken-stringers-3/:file"
    },
    {
        "source": "/images/works/broken-stringers-4/:file",
        "destination": "/images/works/broken-stringers/broken-stringers-4/:file"
    },
    {
        "source": "/images/works/technical-staircase-3/:file",
        "destination": "/images/works/technical-staircase/technical-staircase-3/:file"
    },
    {
        "source": "/images/works/technical-staircase-4/:file",
        "destination": "/images/works/technical-staircase/technical-staircase-4/:file"
    },
    {
        "source": "/images/works/technical-staircase-5/:file",
        "destination": "/images/works/technical-staircase/technical-staircase-5/:file"
    },
    {
        "source": "/images/works/technical-staircase/:file",
        "destination": "/images/works/technical-staircase/technical-staircase-1/:file"
    },
    {
        "source": "/images/works/%20spiral-1/:file",
        "destination": "/images/works/%20spiral-/%20spiral-1/:file"
    },
    {
        "source": "/images/works/spiral-02/:file",
        "destination": "/images/works/%20spiral-/spiral-02/:file"
    },
    {
        "source": "/images/works/spiral-03/:file",
        "destination": "/images/works/%20spiral-/spiral-03/:file"
    },
    {
        "source": "/images/works/%20spiral-4/:file",
        "destination": "/images/works/%20spiral-/%20spiral-4/:file"
    }
];
  },
};

export default nextConfig;
