import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";
import Menu from "./components/common/Menu/Menu";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Footer from "./components/Footer/Footer";

const onest = Onest({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "AetO Beauty",
    description: "Inspiring Beauty, Inside and Out",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={onest.className}>
                <Navbar />
                <Menu />
                <PageWrapper>{children}</PageWrapper>
                <Footer />
            </body>
        </html>
    );
}
