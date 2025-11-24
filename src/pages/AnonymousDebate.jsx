import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Users, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnonymousDebate() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Alguém quer debater sobre o futuro da IA?", sender: "Anon #1234", isMe: false },
        { id: 2, text: "Acho que vai dominar tudo, mas precisamos regular.", sender: "Anon #5678", isMe: false }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: Date.now(), text: input, sender: "Você", isMe: true }]);
            setInput("");
        }
    };

    return (
        <div className="w-full max-w-2xl animate-fade-in h-[80vh] flex flex-col">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Sala de Debate</h2>
                <Link to="/">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Sair
                    </Button>
                </Link>
            </div>

            <Card className="flex-1 flex flex-col bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden">
                <CardHeader className="border-b border-white/5 pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                            <Users className="h-5 w-5" />
                        </div>
                        Tópico: Tecnologia e Ética
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar" ref={scrollRef}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}>
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 px-1">
                                {msg.sender}
                            </span>
                            <div
                                className={`p-3 rounded-2xl max-w-[80%] text-sm md:text-base shadow-md ${msg.isMe
                                        ? "bg-pink-600 text-white rounded-tr-sm"
                                        : "bg-white/10 text-white rounded-tl-sm border border-white/5"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </CardContent>

                <CardFooter className="p-4 border-t border-white/5 bg-black/20">
                    <div className="flex w-full gap-3">
                        <Input
                            placeholder="Digite sua opinião..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            className="bg-white/5 border-white/10 focus:border-pink-500/50"
                        />
                        <Button size="icon" onClick={handleSend} className="bg-pink-600 hover:bg-pink-700">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
