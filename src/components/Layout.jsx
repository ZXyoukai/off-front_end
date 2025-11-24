import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wind, MessageSquare, Users, HeartHandshake, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Layout({ children }) {
    const location = useLocation();

    const navItems = [
        { path: "/", icon: Home, label: "Início" },
        { path: "/scent", icon: Wind, label: "Cheiro" },
        { path: "/message", icon: MessageSquare, label: "Mensagem" },
        { path: "/debate", icon: Users, label: "Debate" },
        { path: "/support", icon: HeartHandshake, label: "Apoio" },
    ];

    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            {/* Dynamic Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-background/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-lg flex justify-between items-center">
                {navItems.map((item) => (
                    <Link key={item.path} to={item.path}>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-110",
                                location.pathname === item.path && "bg-primary/20 text-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                            )}
                            title={item.label}
                        >
                            <item.icon className="h-5 w-5" />
                        </Button>
                    </Link>
                ))}
            </nav>

            {/* Main Content */}
            <main className="pt-24 px-4 pb-8 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center animate-fade-in">
                {children}
            </main>
        </div>
    );
}
