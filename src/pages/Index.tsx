import { MessageSquare, Video, Wallet } from "lucide-react";
import GlassButton from "@/components/GlassButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/90 via-blue-950 to-black text-white">
      <div className="container max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Hero Section */}
        <div className="w-full max-w-md mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://media3.giphy.com/media/l4pTsOd33RweMENnG/giphy.gif?cid=6c09b952a7lizzulb0ypti1tlra5em6jlbbexd4j9nu5be9b&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Dancing Kenny"
            className="w-full h-auto"
          />
        </div>

        {/* CA Address */}
        <div className="mb-8 text-center w-full max-w-md">
          <p className="text-sm text-gray-300 mb-2">CA:</p>
          <p className="text-xs sm:text-sm font-mono bg-black/30 px-4 py-2 rounded-lg break-all">
            EPKGZVre3RzaEWSmWHeMXrqe4N22RuE5WdPoWiy5LQNo
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
          <GlassButton
            href="https://pump.fun/coin/EPKGZVre3RzaEWSmWHeMXrqe4N22RuE5WdPoWiy5LQNo"
            icon={<Wallet className="w-5 h-5" />}
            label="Buy"
          />
          <GlassButton
            href="https://t.me/DancingKenny"
            icon={<MessageSquare className="w-5 h-5" />}
            label="Telegram"
          />
          <GlassButton
            href="https://www.tiktok.com/@dancing.kenny?_t=8sWULevupkM&_r=1"
            icon={<Video className="w-5 h-5" />}
            label="TikTok"
          />
          <GlassButton
            href="https://x.com/dancingdkenny?s=21"
            icon={<span className="text-xl">𝕏</span>}
            label="X"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;