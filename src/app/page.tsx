"use client";

import dynamic from "next/dynamic";

const MbtiContainer = dynamic(() => import("./@contatiner/Container"), {
  ssr: false,
});

export default function Home() {
  return <MbtiContainer />;
}
