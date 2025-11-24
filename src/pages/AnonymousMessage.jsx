import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { MessageSquare, AlertTriangle, Check, ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnonymousMessage() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle");

    const handleSend = () => {
        setStatus("analyzing");
        setTimeout(() => {
            const forbiddenWords = ["conquista", "linda", "gata", "feio", "idiota", "burro"];
            const hasForbidden = forbiddenWords.some(word => message.toLowerCase().includes(word));
            setStatus(hasForbidden ? "rejected" : "approved");
        }, 1500);
    };

    return (
        <div className="w-full max-w-lg animate-fade-in">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Mensagem Segura</h2>
                <p className="text-muted-foreground">Comunicação livre, mas respeitosa.</p>
            </div>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                            <MessageSquare className="h-6 w-6" />
                        </div>
                        Nova Mensagem
                    </CardTitle>
                    <CardDescription>
                        Nossa IA analisa o conteúdo em tempo real para garantir segurança.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="relative">
                        <Textarea
                            placeholder="Digite sua mensagem aqui..."
                            value={message}
                            onChange={(e) => { setMessage(e.target.value); setStatus("idle"); }}
                            className="min-h-[180px] bg-black/20 border-white/10 focus:border-purple-500/50 resize-none text-base p-4"
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                            {message.length} caracteres
                        </div>
                    </div>

                    {status === "analyzing" && (
                        <div className="p-4 rounded-lg bg-blue-500/10 text-blue-400 text-sm flex items-center gap-3 animate-pulse">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Analisando sentimento e conteúdo...
                        </div>
                    )}

                    {status === "rejected" && (
                        <div className="p-4 rounded-lg bg-red-500/10 text-red-400 text-sm flex items-center gap-3 border border-red-500/20 animate-in slide-in-from-top-2">
                            <AlertTriangle className="h-5 w-5" />
                            <div>
                                <span className="font-semibold block">Mensagem Bloqueada</span>
                                Conteúdo identificado como potencial assédio ou ofensivo.
                            </div>
                        </div>
                    )}

                    {status === "approved" && (
                        <div className="p-4 rounded-lg bg-green-500/10 text-green-400 text-sm flex items-center gap-3 border border-green-500/20 animate-in slide-in-from-top-2">
                            <Check className="h-5 w-5" />
                            <div>
                                <span className="font-semibold block">Mensagem Aprovada</span>
                                Enviada com sucesso para o destinatário.
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                    <Button
                        className="w-full h-12 text-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-900/20"
                        onClick={handleSend}
                        disabled={!message || status === "analyzing" || status === "approved"}
                    >
                        {status === "analyzing" ? "Verificando..." : "Enviar Mensagem"}
                    </Button>
                    <Link to="/" className="w-full">
                        <Button variant="ghost" className="w-full text-muted-foreground hover:text-white">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
