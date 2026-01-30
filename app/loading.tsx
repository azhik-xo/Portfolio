import Image from "next/image";

// app/dashboard/loading.js
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <p className="text-7xl font-medium">[ . _ . ]</p>
      <p className="text-7xl font-medium">Site is Under Construction</p>
      <p className="text-3xl font-medium">Sorry for the inconvenience</p>
    </div>
  );
}
