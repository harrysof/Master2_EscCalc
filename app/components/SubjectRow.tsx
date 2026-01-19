
import { Subject } from "@/app/data";
import { cn } from "@/lib/utils";

interface SubjectRowProps {
    subject: Subject;
    exam: number;
    td: number;
    moduleAvg: number;
    onUpdate: (type: "exam" | "td", value: number) => void;
}

export function SubjectRow({ subject, exam, td, moduleAvg, onUpdate }: SubjectRowProps) {
    const getAvgColor = (avg: number) => {
        if (avg >= 15) return "text-[#d89cf6] drop-shadow-[0_0_5px_rgba(216,156,246,0.5)]";
        if (avg >= 10) return "text-green-400";
        if (avg >= 7) return "text-orange-400";
        return "text-red-400";
    };

    return (
        <div className="group bg-[#1E1E2A]/50 hover:bg-[#1E1E2A] border border-[#3A3A5A]/50 hover:border-[#3A3A5A] rounded-xl p-4 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-200 font-medium text-sm sm:text-base">{subject.name}</h3>
                    <div className="bg-[#2C2C3E] border border-[#3A3A5A] rounded px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Coef</span>
                        <span className="text-xs text-white font-bold">{subject.coef}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="flex-1 sm:flex-none">
                        <label className="block textxs text-gray-500 mb-1 ml-1">Examen</label>
                        <input
                            type="number"
                            min="0"
                            max="20"
                            step="0.05"
                            value={exam || ""}
                            placeholder="0"
                            onChange={(e) => onUpdate("exam", parseFloat(e.target.value) || 0)}
                            className="w-full sm:w-20 bg-[#121218] border border-[#3A3A5A] rounded-lg px-3 py-2 text-sm text-center text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                        />
                    </div>
                    <div className="flex-1 sm:flex-none">
                        <label className="block text-xs text-gray-500 mb-1 ml-1">TD</label>
                        <input
                            type="number"
                            min="0"
                            max="20"
                            step="0.05"
                            value={td || ""}
                            placeholder="0"
                            onChange={(e) => onUpdate("td", parseFloat(e.target.value) || 0)}
                            className="w-full sm:w-20 bg-[#121218] border border-[#3A3A5A] rounded-lg px-3 py-2 text-sm text-center text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                        />
                    </div>

                    <div className="w-[1px] h-10 bg-[#3A3A5A] mx-1 hidden sm:block" />

                    <div className="flex-1 sm:flex-none flex flex-col items-center sm:items-end min-w-[70px]">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Moyenne</span>
                        <span className={cn("text-lg font-bold font-mono transition-colors", getAvgColor(moduleAvg))}>
                            {moduleAvg.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
