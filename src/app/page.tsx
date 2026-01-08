"use client";

import { CheckCircle2, Fuel, Truck, Thermometer, Wind, Wrench, RefreshCw, FileCheck, Star, Shield, MessageCircle, ChevronRight, TrendingDown, Zap, Award, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function EcodiffusoreLandingPage() {
  const whatsappLink = "https://wa.me/message/OP4CZ5WQR6ZYD1";

  const benefits = [
    { icon: Fuel, text: "Economia real de 5% a 20% de diesel", color: "text-emerald-500" },
    { icon: Truck, text: "Mais força em baixa rotação", color: "text-blue-600" },
    { icon: Thermometer, text: "Motor trabalha mais frio (até 10°C a menos)", color: "text-cyan-500" },
    { icon: Wind, text: "Menos fumaça preta (até 90%)", color: "text-gray-600" },
    { icon: Wrench, text: "Sem alterar eletrônica, turbina ou bomba", color: "text-orange-500" },
    { icon: RefreshCw, text: "Instalação simples e totalmente reversível", color: "text-indigo-500" },
  ];

  const techBenefits = [
    "Mais km com o mesmo tanque",
    "Menos fuligem e carbonização",
    "Menor uso de ARLA (até 40% de economia)",
    "Resposta mais rápida nas retomadas",
  ];

  const realResults = [
    "Retomadas mais leves",
    "Redução imediata no consumo",
    "Menos fumaceira e motor mais limpo",
    "Mais elasticidade no motor em subidas e carga pesada",
  ];

  const pricing = [
    { model: "Scania Até 2018", oldPrice: "R$ 3.949", cashPrice: "R$ 2.836", cardPrice: "R$ 3.179", installment: "R$ 529,83" },
    { model: "Scania NTG", oldPrice: "R$ 4.279", cashPrice: "R$ 3.131", cardPrice: "R$ 3.509", installment: "R$ 584,83" },
    { model: "Volvo FH", oldPrice: "R$ 3.839", cashPrice: "R$ 2.876", cardPrice: "R$ 3.223", installment: "R$ 537,17" },
    { model: "Volvo Robocop", oldPrice: "R$ 4.169", cashPrice: "R$ 3.043", cardPrice: "R$ 3.410", installment: "R$ 568,33" },
    { model: "Mercedes", oldPrice: "R$ 4.169", cashPrice: "R$ 2.935", cardPrice: "R$ 3.289", installment: "R$ 548,17" },
    { model: "Iveco", oldPrice: "R$ 4.169", cashPrice: "R$ 2.916", cardPrice: "R$ 3.267", installment: "R$ 544,50" },
    { model: "DAF", oldPrice: "R$ 4.510", cashPrice: "R$ 3.131", cardPrice: "R$ 3.509", installment: "R$ 584,83" },
  ];

  const faqs = [
    {
      question: "A instalação é complicada?",
      answer: "Não. Vai uma mangueira nova com o encaixe pronto. É só substituir.",
    },
    {
      question: "Força o motor?",
      answer: "Não. Não altera mecânica, eletrônica ou pressão.",
    },
    {
      question: "Serve para quais caminhões?",
      answer: "Qualquer diesel, antigo ou eletrônico. Escreva no WhatsApp o modelo para orientação.",
    },
    {
      question: "Pode escapar e entrar no motor?",
      answer: "Não. A peça é presa externamente na mangueira, sem contato interno com partes móveis.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A1F44] via-[#0D2A5C] to-[#0A1F44] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo Ecodiffusore */}
            <div className="mb-8">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4913f38b-eadd-4023-bac7-d06886332744.png" 
                alt="Logo Ecodiffusore" 
                className="h-20 md:h-24 w-auto mx-auto"
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Tecnologia Aprovada em Laudo Técnico</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Seu caminhão <span className="text-emerald-400">mais forte</span> e até{" "}
              <span className="text-emerald-400">20% mais econômico</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-slate-300 font-light">
              sem mexer na mecânica
            </p>
            <p className="text-lg md:text-xl mb-8 text-slate-400 max-w-3xl mx-auto">
              O Ecodiffusore é a tecnologia que otimiza a combustão, melhora o torque de baixa e reduz o consumo real de diesel.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Video Section - Formato Vertical (Story) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-slate-900">
              Entenda como Funciona
            </h2>
            <div className="relative mx-auto" style={{ maxWidth: '360px', aspectRatio: '9/16' }}>
              {/* Container do vídeo do YouTube */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                {/* Placeholder - Substitua o src abaixo pela URL do seu vídeo do YouTube */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/mwBiPBLa4d0"
                  title="Entenda como Funciona o Ecodiffusore"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay decorativo (opcional) */}
                <div className="absolute inset-0 pointer-events-none border-4 border-emerald-500/20 rounded-2xl"></div>
              </div>
              
              {/* Ícone de play decorativo (aparece antes do vídeo carregar) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-emerald-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
            
            <p className="text-center text-slate-600 mt-6 text-sm">
              Veja como o Ecodiffusore transforma o desempenho do seu caminhão
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Se você vive da estrada, sabe:<br />
              <span className="text-red-600">o diesel leva metade do seu lucro embora</span>
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              Com o Ecodiffusore você pode <strong>reduzir esse custo imediatamente:</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-slate-100">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-slate-50 ${benefit.color}`}>
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <p className="text-slate-700 font-medium flex-1 pt-2">{benefit.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <FileCheck className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Tecnologia com Laudo Técnico Aprovado</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Nada de milagre.
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                O Ecodiffusore <strong>ioniza o ar admitido</strong>, melhora a organização das partículas e gera uma combustão mais eficiente, resultando em:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {techBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
                <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
                <span className="text-sm font-semibold text-amber-700">Resultados Reais</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Milhares de caminhões em operação comprovam:
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {realResults.map((result, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-white p-5 rounded-lg border-l-4 border-emerald-500">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <TrendingDown className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Um investimento que <span className="text-emerald-400">se paga sozinho</span>
              </h2>
              <p className="text-xl text-slate-300 mb-6">
                O valor muda conforme o modelo do caminhão, mas o retorno é garantido:<br />
                <strong className="text-emerald-400">com a economia gerada, o Ecodiffusore se paga em poucos meses.</strong>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-emerald-400">
                Condição Especial para Quem Está Nesta Página:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">Frete grátis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">Parcelamento em até 6x sem juros</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">Garantia total de satisfação</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">Suporte no WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">Instalação simples e sem alterações</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">11% de desconto à vista</span>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-6 text-center">
                Valores por Modelo / <span className="text-red-400">Oferta de Fim de Ano</span>
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {pricing.map((item, index) => (
                  <Card key={index} className="bg-white p-5 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="mb-3">
                      <h5 className="font-bold text-slate-900 text-lg mb-2">{item.model}</h5>
                      <div className="text-slate-400 line-through text-sm mb-3">
                        De {item.oldPrice}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {/* Preço à vista */}
                      <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-3">
                        <div className="text-xs text-emerald-700 font-semibold mb-1">💰 À VISTA (11% OFF)</div>
                        <div className="text-emerald-600 font-bold text-2xl">{item.cashPrice}</div>
                      </div>
                      
                      {/* Preço parcelado */}
                      <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-3">
                        <div className="text-xs text-blue-700 font-semibold mb-1">💳 NO CARTÃO</div>
                        <div className="text-blue-600 font-bold text-xl">{item.cardPrice}</div>
                        <div className="text-slate-600 text-sm font-medium mt-1">
                          ou <span className="text-blue-600 font-bold">6x de {item.installment}</span> sem juros
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-slate-300 mb-4">Não achou seu modelo? Chame a gente no WhatsApp</p>
                <Button
                  onClick={() => window.open(whatsappLink, "_blank")}
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl px-10 py-7 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Comprar Agora
                  <ChevronRight className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 text-center border-4 border-emerald-500 shadow-2xl">
              <Shield className="w-20 h-20 mx-auto mb-6 text-emerald-600" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Garantia de 30 dias
              </h2>
              <p className="text-xl mb-6 text-slate-700">
                <strong>Resultado ou devolvemos seu dinheiro</strong>
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Se não sentir diferença real, devolvemos 100% do valor.<br />
                <strong>Sem burocracia, sem perguntas.</strong>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
              Perguntas Rápidas
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Está pronto para rodar mais e gastar menos?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-red-100">
              Cada viagem sem o Ecodiffusore é <strong>dinheiro perdido no diesel.</strong>
            </p>
            <Button
              onClick={() => window.open(whatsappLink, "_blank")}
              size="lg"
              className="bg-white hover:bg-slate-100 text-red-600 font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-7 h-7 mr-3" />
              Comprar Agora
              <ChevronRight className="w-7 h-7 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Ecodiffusore. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
