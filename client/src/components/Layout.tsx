import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#ECF0F1] font-poppins text-[#34495E]">
      <Navbar />
      {children}
    </div>
  );
}
