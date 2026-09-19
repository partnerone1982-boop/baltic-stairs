"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LegacyWorkRedirect({ ids }: { ids: string[] }) {
  const router = useRouter();
  useEffect(() => {
    const redirect = () => {
      const id = window.location.hash.slice(1);
      if (ids.includes(id)) router.replace(`/works/${id}`);
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [ids, router]);
  return null;
}
