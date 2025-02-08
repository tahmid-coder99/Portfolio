import Navbar from "./Navbar";
import { useTheme } from "@/hooks/use-theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme} min-h-screen bg-background font-poppins text-foreground`}>
      <Navbar />
      {children}
    </div>
  );
}