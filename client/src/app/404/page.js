"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>404 - Page Not Found</h1>
        <Button type="primary" onClick={() => router.push("/lobby")}>
          Return to Lobby
        </Button>
      </div>
    </div>
  );
}
