import "./globals.css";

export const metadata = {
  title: "Tucanico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
