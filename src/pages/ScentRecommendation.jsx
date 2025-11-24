import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Wind, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ScentRecommendation() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        if (email) {
            setTimeout(() => setSent(true), 1000);
        }
    };

    return (
        <div className="w-full max-w-lg animate-fade-in">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Melhora de Cheiro</h2>
                <p className="text-muted-foreground">Ajude alguém a melhorar, com discrição e empatia.</p>
            </div>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                            <Wind className="h-6 w-6" />
                        </div>
                        Envio Anônimo
                    </CardTitle>
                    <CardDescription>
                        O destinatário receberá um email gentil e padronizado.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {!sent ? (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-base">Email do destinatário</Label>
                                <Input
                                    id="email"
                                    placeholder="exemplo@email.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-black/20 border-white/10 focus:border-blue-500/50 h-12 text-lg"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                            <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                                <CheckCircle className="h-10 w-10 text-green-500" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl font-semibold text-white">Enviado com sucesso!</h3>
                                <p className="text-muted-foreground">Sua boa ação foi realizada anonimamente.</p>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                    {!sent ? (
                        <Button
                            className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20"
                            onClick={handleSend}
                            disabled={!email}
                        >
                            Enviar Notificação
                        </Button>
                    ) : (
                        <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => { setSent(false); setEmail(""); }}>
                            Enviar Outra
                        </Button>
                    )}
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
