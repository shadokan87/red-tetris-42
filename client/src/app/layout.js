"use client";
import "./globals.css";
import { WithRedux } from "./redux/WithRedux";

export default function rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WithRedux>{children}</WithRedux>
      </body>
    </html>
  );
}
