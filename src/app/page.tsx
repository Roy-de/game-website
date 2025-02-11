// Mark the file as a Client Component
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainPage } from "@/pages/MainPage";
import { BlogDetail } from "@/pages/BlogDetail";
import { Games } from "@/pages/Games";

export default function Home() {
  return <><MainPage/></>
}
