import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function DownloadButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition">
      <ArrowDownTrayIcon className="w-5 h-5" />
      <p className="underline">Download CV</p>
    </button>
  );
}
