"use client";

import { useSearchParams } from "next/navigation";

export default function Profile() {
  const searchParams = useSearchParams();

  const sort = searchParams.get("name");
  const page = searchParams.get("age");
  return (
    <div>
      <div>nama {sort}</div>
      <div>umur {page}</div>
    </div>
  );
}
