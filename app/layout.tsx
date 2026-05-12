import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bootcamp Progress Predictor",
  description: "Predict bootcamp student success from early assignments"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="092c95c5-e9db-4895-a35c-2fb1035d4750"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
