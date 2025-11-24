import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wind, MessageSquare, Users, HeartHandshake, ArrowRight } from "lucide-react";
import logo from "../assets/off_s.png";

export default function Home() {
    const features = [
        {
            to: "/scent",
            icon: Wind,
            title: "Recomendacão Anônima",
            desc: "Notifique alguém anonimamente sobre odores de forma gentil.",
            color: "text-blue-400",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            to: "/message",
            icon: MessageSquare,
            title: "Mensagem Anônima",
            desc: "Envie mensagens monitoradas por IA para segurança total.",
            color: "text-purple-400",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            to: "/debate",
            icon: Users,
            title: "Debate Anônimo",
            desc: "Espaço livre para debates sem filtros e sem julgamentos.",
            color: "text-pink-400",
            gradient: "from-pink-500/20 to-red-500/20"
        },
        {
            to: "/support",
            icon: HeartHandshake,
            title: "Apoio Anônimo",
            desc: "Reporte problemas e receba apoio psicológico discreto.",
            color: "text-green-400",
            gradient: "from-green-500/20 to-emerald-500/20"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full space-y-12 py-12">
            {/* Hero Section */}
            <div className="text-center  space-y-6 max-w-3xl animate-slide-up">
                <img src={logo} alt="OFF Logo" className="mx-auto w-48 md:w-64" />

                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                    Sua plataforma de interações <span className="text-[#1ffff0] font-medium">anônimas</span> e <span className="text-[#1ffff0] font-medium">seguras</span>.
                    <br />
                    Liberdade para melhorar, debater e apoiar.
                </p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12 w-full max-w-5xl px-4">
                {features.map((feature, index) => (
                    <Link key={index} to={feature.to} className="group">
                        <Card className={`h-full bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden relative`}>
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <CardHeader className="relative z-10">
                                <div className="flex justify-between items-start">
                                    <div className={`p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                                <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-white transition-colors">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="text-base text-muted-foreground/80 group-hover:text-white/70 transition-colors">
                                    {feature.desc}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
