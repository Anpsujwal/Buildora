import React from 'react';
import { 
  ShoppingBag, 
  TrendingUp, 
  Bot, 
  Wallet, 
  FileText, 
  Smile, 
  HardDrive, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  ArrowUpRight
} from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectMockupProps {
  type: ProjectItem['mockupType'];
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case 'ecommerce': // ShopSphere
      return (
        <div className="w-full h-48 bg-[#0B0B14] rounded-xl p-3 border border-white/[0.06] flex flex-col justify-between overflow-hidden font-sans">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs font-semibold text-white">ShopSphere Store</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] bg-[#8B5CF6]/20 text-[#A78BFA] px-2 py-0.5 rounded-full font-mono">
                Cart: 2 items
              </span>
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-[#12121E] p-2 rounded-lg border border-white/[0.04]">
              <div className="w-full h-12 bg-gradient-to-tr from-[#8B5CF6]/20 to-[#3B82F6]/10 rounded flex items-center justify-center mb-1.5">
                <span className="text-[10px] font-mono text-[#A78BFA]">DevKit Pro</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-white font-medium">$49.00</span>
                <span className="text-[#34D399]">In Stock</span>
              </div>
            </div>

            <div className="bg-[#12121E] p-2 rounded-lg border border-white/[0.04]">
              <div className="w-full h-12 bg-gradient-to-tr from-[#3B82F6]/20 to-[#60A5FA]/10 rounded flex items-center justify-center mb-1.5">
                <span className="text-[10px] font-mono text-[#60A5FA]">Cloud API Key</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-white font-medium">$19.00</span>
                <span className="text-[#34D399]">Instant</span>
              </div>
            </div>
          </div>

          {/* Checkout Status Strip */}
          <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.04] text-[10px] text-[#A1A1B5]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#34D399]" /> JWT Auth Active
            </span>
            <span className="text-[#8B5CF6]">Checkout Demo</span>
          </div>
        </div>
      );

    case 'analytics': // EduPredict
      return (
        <div className="w-full h-48 bg-[#0B0B14] rounded-xl p-3 border border-white/[0.06] flex flex-col justify-between overflow-hidden font-sans">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-xs font-semibold text-white">EduPredict AI</span>
            </div>
            <span className="text-[10px] font-mono bg-[#3B82F6]/20 text-[#60A5FA] px-2 py-0.5 rounded-full">
              96.4% Acc
            </span>
          </div>

          {/* Prediction Metric Preview */}
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-[#12121E] p-2.5 rounded-lg border border-white/[0.04] flex flex-col justify-center">
              <span className="text-[10px] text-[#A1A1B5]">Predicted Score</span>
              <span className="text-lg font-bold text-white tracking-tight">92.4%</span>
              <span className="text-[9px] text-[#34D399] flex items-center gap-1 mt-0.5">
                <ArrowUpRight className="w-2.5 h-2.5" /> High Confidence
              </span>
            </div>

            {/* Mini bar indicators */}
            <div className="bg-[#12121E] p-2.5 rounded-lg border border-white/[0.04] flex flex-col justify-around">
              <div>
                <div className="flex justify-between text-[9px] text-[#A1A1B5] mb-1">
                  <span>Attendance</span>
                  <span className="text-white">95%</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-[#3B82F6] rounded-full"></div>
                </div>
              </div>
              <div className="mt-1">
                <div className="flex justify-between text-[9px] text-[#A1A1B5] mb-1">
                  <span>Study Hours</span>
                  <span className="text-white">8.5h/d</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-[#8B5CF6] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom status */}
          <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.04] text-[10px] text-[#A1A1B5]">
            <span>Model: scikit-learn LinearReg</span>
            <span className="text-[#34D399]">Trained on 5,000 samples</span>
          </div>
        </div>
      );

    case 'chat': // QueryBot
      return (
        <div className="w-full h-48 bg-[#0B0B14] rounded-xl p-3 border border-white/[0.06] flex flex-col justify-between overflow-hidden font-sans">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#A78BFA]" />
              <span className="text-xs font-semibold text-white">QueryBot Assistant</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></span>
          </div>

          {/* Chat bubbles */}
          <div className="space-y-2 my-auto">
            <div className="flex justify-end">
              <div className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-white text-[10px] px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[85%]">
                How does the project database schema handle relations?
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-[#12121E] border border-white/[0.08] text-[#D4D4E8] text-[10px] px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[88%] leading-relaxed">
                <span className="text-[#A78BFA] font-medium">QueryBot: </span>
                Indexed via document references with foreign key constraints in MongoDB.
              </div>
            </div>
          </div>

          {/* Fake Input */}
          <div className="flex items-center justify-between bg-[#12121E] px-2.5 py-1.5 rounded-lg border border-white/[0.06] text-[10px] text-[#A1A1B5]">
            <span>Ask a question about the project...</span>
            <Send className="w-3 h-3 text-[#8B5CF6]" />
          </div>
        </div>
      );

    case 'finance': // SpendWise
      return (
        <div className="w-full h-48 bg-[#0B0B14] rounded-xl p-3 border border-white/[0.06] flex flex-col justify-between overflow-hidden font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-[#34D399]" />
              <span className="text-xs font-semibold text-white">SpendWise Ledger</span>
            </div>
            <span className="text-[10px] text-[#A1A1B5] font-mono">October 2026</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-[#12121E] p-2.5 rounded-lg border border-white/[0.04]">
              <span className="text-[10px] text-[#A1A1B5]">Monthly Budget</span>
              <div className="text-base font-bold text-white">$1,240.00</div>
              <div className="w-full h-1.5 bg-white/[0.08] rounded-full mt-2 overflow-hidden">
                <div className="w-[62%] h-full bg-[#34D399] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-1.5 bg-[#12121E] p-2 rounded-lg border border-white/[0.04] text-[9px]">
              <div className="flex justify-between text-[#A1A1B5]">
                <span>Cloud Hosting</span>
                <span className="text-white font-mono">-$28.00</span>
              </div>
              <div className="flex justify-between text-[#A1A1B5]">
                <span>Domain Registry</span>
                <span className="text-white font-mono">-$14.00</span>
              </div>
              <div className="flex justify-between text-[#A1A1B5]">
                <span>API Credits</span>
                <span className="text-white font-mono">-$19.50</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.04] text-[10px] text-[#34D399]">
            <span>✓ Savings Target On Track (38% Left)</span>
            <span className="text-[#A1A1B5]">MERN Stack</span>
          </div>
        </div>
      );

    case 'docflow': // DocuFlow
      return (
        <div className="w-full h-48 bg-[#0B0B14] rounded-xl p-3 border border-white/[0.06] flex flex-col justify-between overflow-hidden font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#60A5FA]" />
              <span className="text-xs font-semibold text-white">DocuFlow Repository</span>
            </div>
            <span className="text-[10px] font-mono text-[#A1A1B5]">8 Files Indexed</span>
          </div>

          <div className="space-y-1.5 my-auto">
            <div className="flex items-center justify-between bg-[#12121E] px-2.5 py-1.5 rounded-lg border border-white/[0.04] text-[10px]">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#EF4444]" />
                <span className="text-white font-mono">Final_Project_Report.pdf</span>
              </div>
              <span className="text-[#34D399] text-[9px] bg-[#34D399]/10 px-1.5 py-0.5 rounded">
                Verified
              </span>
            </div>

            <div className="flex items-center justify-between bg-[#12121E] px-2.5 py-1.5 rounded-lg border border-white/[0.04] text-[10px]">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="text-white font-mono">System_Architecture.vsdx</span>
              </div>
              <span className="text-[#A78BFA] text-[9px] bg-[#8B5CF6]/10 px-1.5 py-0.5 rounded">
                Diagram
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.04] text-[10px] text-[#A1A1B5]">
            <span>Status: Ready for Viva Review</span>
            <span className="text-[#60A5FA]">Fast Filtering</span>
          </div>
        </div>
      );

    case 'sentiment': // SentimentIQ
      return (
        <div className="w-full h-48 bg-[#0B0B14] rounded-xl p-3 border border-white/[0.06] flex flex-col justify-between overflow-hidden font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Smile className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-xs font-semibold text-white">SentimentIQ NLP</span>
            </div>
            <span className="text-[10px] font-mono bg-[#34D399]/20 text-[#34D399] px-2 py-0.5 rounded-full">
              Polarity: +0.88
            </span>
          </div>

          <div className="bg-[#12121E] p-2 rounded-lg border border-white/[0.04] text-[10px] my-auto">
            <span className="text-[#A1A1B5]">Analyzed Input:</span>
            <p className="text-white italic mt-0.5">
              "The prototype demonstrated seamless UI responsiveness and quick data retrieval."
            </p>
          </div>

          {/* Sentiment Distribution */}
          <div>
            <div className="flex justify-between text-[9px] text-[#A1A1B5] mb-1">
              <span className="text-[#34D399]">Positive (82%)</span>
              <span className="text-[#94A3B8]">Neutral (12%)</span>
              <span className="text-[#EF4444]">Negative (6%)</span>
            </div>
            <div className="w-full h-2 rounded-full flex overflow-hidden">
              <div className="w-[82%] bg-[#34D399]"></div>
              <div className="w-[12%] bg-[#94A3B8]"></div>
              <div className="w-[6%] bg-[#EF4444]"></div>
            </div>
          </div>
        </div>
      );

    case 'web3storage': // CloudVault
      return (
        <div className="w-full h-48 bg-[#0B0B14] rounded-xl p-3 border border-white/[0.06] flex flex-col justify-between overflow-hidden font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs font-semibold text-white">CloudVault Network</span>
            </div>
            <span className="text-[10px] font-mono bg-[#8B5CF6]/20 text-[#A78BFA] px-2 py-0.5 rounded-full">
              IPFS Node Sync
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-[#12121E] p-2 rounded-lg border border-white/[0.04]">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#34D399]"></span>
                <span className="text-[10px] font-mono text-white">Node-01 [Main]</span>
              </div>
              <span className="text-[9px] font-mono text-[#A1A1B5]">CID: Qm7f...9b2x</span>
            </div>

            <div className="bg-[#12121E] p-2 rounded-lg border border-white/[0.04]">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#34D399]"></span>
                <span className="text-[10px] font-mono text-white">Node-02 [Backup]</span>
              </div>
              <span className="text-[9px] font-mono text-[#A1A1B5]">CID: Qm7f...9b2x</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.04] text-[10px]">
            <span className="text-[#34D399] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> SHA-256 Integrity Verified
            </span>
            <span className="text-[#A1A1B5]">Decentralized</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
