
import { Branch } from "@/app/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BranchSelectorProps {
    branches: Branch[];
    selectedBranchId: string;
    onSelect: (id: string) => void;
}

export function BranchSelector({ branches, selectedBranchId, onSelect }: BranchSelectorProps) {
    return (
        <div className="w-full overflow-x-auto pb-2 pt-2 px-1 no-scrollbar">
            <div className="flex space-x-3 min-w-max">
                {branches.map((branch) => {
                    const isSelected = selectedBranchId === branch.id;
                    return (
                        <button
                            key={branch.id}
                            onClick={() => onSelect(branch.id)}
                            className={cn(
                                "group relative px-5 py-3 rounded-xl transition-all duration-500 ease-out border text-sm font-medium flex items-center gap-2 overflow-hidden",
                                isSelected
                                    ? "text-white scale-105"
                                    : "bg-transparent border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/5"
                            )}
                        >
                            {isSelected && (
                                <motion.div
                                    layoutId="activeBranch"
                                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            <span
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300 relative z-10",
                                    isSelected ? "opacity-100 shadow-[0_0_10px_currentColor]" : "opacity-0"
                                )}
                                style={{ backgroundColor: branch.color }}
                            />

                            <span className="relative z-10">{branch.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
