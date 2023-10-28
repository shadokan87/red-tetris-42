"use client";
import { useRouter } from "next/navigation";
import withAuth from "./withAuth";

const parseRoomUrl = (url) => {
  const trimmedUrl = url.split("/")[0];
  const regex = /#(\w+)\[(\w+)\]/;
  const match = trimmedUrl.match(regex);
  if (match) {
    return { name: match[1], displayName: match[2] };
  }
  return null;
};

function Home() {
  const router = useRouter();
  console.log("Raw URL:", router.asPath);
  const urlFormat = parseRoomUrl(window.location.hash);
  if (urlFormat) {
    console.log(
      "Name:",
      urlFormat.name,
      "Display Name:",
      urlFormat.displayName
    );
  } else {
    router.push("/404", undefined, { shallow: true });
  }
  return <main>{"Hello !"}</main>;
}

export default withAuth(Home);
