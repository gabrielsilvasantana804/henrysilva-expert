
import React, { useState } from 'react';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaCheckCircle, 
  FaStar, 
  FaHeartbeat, 
  FaShieldAlt, 
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaTimes
} from 'react-icons/fa';

// Constants for assets and links
const EXPERT_NAME = "Henry Silva";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511969429211&text=Olá Dr. Henry, gostaria de agendar minha consulta gratuita.&type=phone_number&app_absent=0&utm_source=ig";
const INSTAGRAM_URL = "https://www.instagram.com/dr.henrysilva/";

const EXPERT_PHOTOS = [
  "https://i.imgur.com/ZCICsj8.jpeg",
  "https://i.imgur.com/1dn13sU.jpeg",
  "https://i.imgur.com/WEuBzLx.jpeg",
  "https://i.imgur.com/IhY8Nq3.jpeg"
];

const RESULTS_PHOTOS = [
  "https://i.imgur.com/7zUPAIQ.jpeg",
  "https://i.imgur.com/O5vRJjo.jpeg",
  "https://i.imgur.com/4eypOgp.jpeg",
  "https://i.imgur.com/2qgIWjk.jpeg",
  "https://i.imgur.com/uUWwwA3.jpeg",
  "https://i.imgur.com/tsuzBVY.jpeg",
  "https://i.imgur.com/UMyokPA.jpeg",
  "https://i.imgur.com/M43Psn2.jpeg",
  "https://i.imgur.com/qE55eKe.jpeg"
];

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      
      {/* Lightbox for Gallery */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl">
            <FaTimes />
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}

      {/* Hero Section - Reordered according to user request */}
      <section className="relative pt-12 pb-20 px-6 bg-zinc-950 flex flex-col items-center">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
            Eu sou <span className="text-amber-200">Henry Silva</span>,<br />
            seu dentista em Mauá.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Especialista em transformar sorrisos com o que há de mais moderno em lentes de resina, implantes e reabilitação oral.
          </p>
          
          {/* Main Image positioned below the text */}
          <div className="relative w-full max-w-md mx-auto mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
              <img 
                src={EXPERT_PHOTOS[0]} 
                alt={EXPERT_NAME} 
                className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-4">
            <a 
              href={WHATSAPP_URL}
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-5 bg-green-600 hover:bg-green-500 text-white rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 cta-shadow group"
            >
              <FaWhatsapp className="mr-3 text-2xl" />
              AGENDAR MINHA PRIMEIRA CONSULTA GRATUITA
            </a>
            <p className="text-zinc-400 text-sm italic">
              Resposta rápida • Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={EXPERT_PHOTOS[1]} 
                alt="Dr. Henry Silva" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif mb-6 text-zinc-900">Autoridade em estética dental</h2>
            <div className="space-y-4 text-zinc-700 leading-relaxed text-lg">
              <p>
                Minha missão é devolver a autoestima e a segurança de sorrir para cada um dos meus pacientes. Não trato apenas dentes, trato pessoas que buscam sua melhor versão.
              </p>
              <p>
                Com anos de experiência e foco total em excelência, tornei-me referência em procedimentos de alta complexidade e estética avançada.
              </p>
              
              <ul className="space-y-3 pt-4">
                {[
                  "Referência em Lentes de Resina",
                  "Especialista em Implantes e Próteses",
                  "Expert em Endodontia e Urgências",
                  "Atendimento humanizado e personalizado"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Resultados Reais</h2>
          <p className="text-zinc-500">Transformações reais feitas pelas minhas mãos.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {RESULTS_PHOTOS.map((photo, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
              onClick={() => setSelectedImage(photo)}
            >
              <img 
                src={photo} 
                alt={`Resultado ${index + 1}`} 
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Ampliar</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-400 text-xs mt-8">
          *Os resultados podem variar de pessoa para pessoa.
        </p>
      </section>

      {/* Trust Blocks */}
      <section className="py-20 px-6 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Por que confiar o seu sorriso a mim?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 flex flex-col items-center text-center">
              <FaStar className="text-amber-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Avaliação Honestidade</h3>
              <p className="text-zinc-400">Eu indico apenas o que você realmente precisa para atingir o resultado esperado.</p>
            </div>
            
            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 flex flex-col items-center text-center">
              <FaHeartbeat className="text-red-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Atendimento Humano</h3>
              <p className="text-zinc-400">Aqui você não é um número. Cada plano de tratamento é 100% individualizado.</p>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 flex flex-col items-center text-center">
              <FaShieldAlt className="text-blue-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Segurança Total</h3>
              <p className="text-zinc-400">Utilizamos os melhores materiais do mercado mundial para garantir sua saúde.</p>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-green-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Localização Privilegiada</h3>
              <p className="text-zinc-400">Consultório moderno e de fácil acesso no coração de Mauá/SP.</p>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 flex flex-col items-center text-center">
              <FaCalendarCheck className="text-purple-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Prazos Ágeis</h3>
              <p className="text-zinc-400">Otimizamos o tempo para que você tenha seu novo sorriso o quanto antes.</p>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 flex flex-col items-center text-center">
              <FaCheckCircle className="text-amber-200 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Foco no Natural</h3>
              <p className="text-zinc-400">Dentes brancos, porém naturais. Harmonia perfeita com o seu rosto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate CTA */}
      <section className="py-16 px-6 bg-amber-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-zinc-900 mb-6 italic">
            "O seu sorriso é o seu cartão de visitas mais valioso."
          </h2>
          <p className="text-zinc-600 mb-10 text-lg">
            Agende agora sua primeira avaliação gratuita e tire todas as suas dúvidas diretamente comigo pelo WhatsApp.
          </p>
          <a 
            href={WHATSAPP_URL}
            className="inline-flex items-center px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-full text-lg font-bold transition-all cta-shadow"
          >
            <FaWhatsapp className="mr-3 text-2xl" />
            FALAR COM O DR. HENRY AGORA
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">Como funciona sua jornada?</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8 group">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Início via WhatsApp</h3>
                <p className="text-zinc-600">Você clica no botão, fala comigo ou com minha equipe e agendamos o melhor horário.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 group">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Avaliação Presencial</h3>
                <p className="text-zinc-600">Nos encontramos no consultório para uma análise clínica completa da sua saúde bucal.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 group">
              <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Planejamento e Execução</h3>
                <p className="text-zinc-600">Definimos o melhor tratamento e começamos a transformação do seu sorriso.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 p-6 bg-zinc-50 rounded-xl text-center border border-dashed border-zinc-300">
            <p className="text-zinc-900 font-bold">Lembre-se: A primeira consulta é 100% gratuita e sem compromisso.</p>
          </div>
        </div>
      </section>

      {/* Expert + Bastidores Section */}
      <section className="py-20 bg-zinc-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Bastidores e Dedicação</h2>
            <p className="text-zinc-500 italic">"Cuidando de cada detalhe com precisão e carinho."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={EXPERT_PHOTOS[2]} alt="Atendimento Dr. Henry" className="w-full aspect-video object-cover" />
              <div className="p-4 bg-white text-center text-sm font-medium">Atendimento Personalizado</div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={EXPERT_PHOTOS[3]} alt="Expertise Dr. Henry" className="w-full aspect-video object-cover" />
              <div className="p-4 bg-white text-center text-sm font-medium">Tecnologia e Precisão</div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={EXPERT_PHOTOS[1]} alt="Consultório Dr. Henry" className="w-full aspect-video object-cover" />
              <div className="p-4 bg-white text-center text-sm font-medium">Ambiente Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 premium-gradient text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Pronto para conquistar o <br />sorriso dos seus sonhos?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            Não deixe para amanhã a autoestima que você pode ter hoje. Agende agora sua avaliação gratuita.
          </p>
          <a 
            href={WHATSAPP_URL}
            className="inline-flex items-center justify-center px-12 py-6 bg-green-600 hover:bg-green-500 text-white rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 cta-shadow animate-bounce mt-4"
          >
            <FaWhatsapp className="mr-3 text-3xl" />
            QUERO AGENDAR MINHA CONSULTA GRATUITA
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-zinc-200 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif mb-2">Henry Silva</h3>
          <p className="text-zinc-500 text-sm mb-4">
            Referência em Lentes de Resina | Reabilitação Oral | Mauá - SP
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-pink-600 text-2xl transition-colors">
              <FaInstagram />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-600 text-2xl transition-colors">
              <FaWhatsapp />
            </a>
          </div>

          <div className="text-zinc-400 text-xs space-y-2">
            <p>R. Alm. Barroso, 30 - sala 58 - Vila Bocaina, Mauá - SP, 09310-030</p>
            <p>&copy; {new Date().getFullYear()} Dr. Henry Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp for Mobile */}
      <a 
        href={WHATSAPP_URL}
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-3xl md:hidden hover:scale-110 active:scale-95 transition-all"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default App;
