import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { HeartHandshake, CheckCircle, ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function AnonymousSupport() {
    const [report, setReport] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (report) {
            setTimeout(() => setSubmitted(true), 1000);
        }
    };

    return (
        <div className="w-full max-w-lg animate-fade-in">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-2">Espaço de Apoio</h2>
                <p className="text-muted-foreground">Você não está sozinho.</p>
            </div>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                            <HeartHandshake className="h-6 w-6" />
                        </div>
                        Desabafo Anônimo
                    </CardTitle>
                    <CardDescription>
                        Seu relato é confidencial e será tratado com carinho.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {!submitted ? (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label className="text-base">Como você está se sentindo hoje?</Label>
                                <Textarea
                                    placeholder="Sinta-se à vontade para escrever tudo o que está te afligindo..."
                                    value={report}
                                    onChange={(e) => setReport(e.target.value)}
                                    className="min-h-[200px] bg-black/20 border-white/10 focus:border-green-500/50 resize-none text-base p-4 leading-relaxed"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                                <CheckCircle className="h-20 w-20 text-green-500 relative z-10" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-white">Recebemos seu relato.</h3>
                                <p className="text-muted-foreground max-w-xs mx-auto">
                                    Um voluntário irá ler seu desabafo em breve. Lembre-se: pedir ajuda é um ato de coragem.
                                </p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5 w-full">
                                <p className="text-sm text-muted-foreground">
                                    Emergência? Ligue <span className="text-white font-bold">188</span> (CVV)
                                </p>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                    {!submitted ? (
                        <Button
                            className="w-full h-12 text-lg bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/20"
                            onClick={handleSubmit}
                            disabled={!report}
                        >
                            Enviar Relato
                        </Button>
                    ) : (
                        <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => window.location.href = "/"}>
                            Voltar para Início
                        </Button>
                    )}
                    {!submitted && (
                        <Link to="/" className="w-full">
                            <Button variant="ghost" className="w-full text-muted-foreground hover:text-white">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Cancelar
                            </Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
