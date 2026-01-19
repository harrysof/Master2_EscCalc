"use client";

import { useGradeCalculator } from "./hooks/useGradeCalculator";
import { BranchSelector } from "./components/BranchSelector";
import { SubjectRow } from "./components/SubjectRow";
import { AuroraBackground } from "./components/AuroraBackground";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const {
    branches,
    selectedBranch,
    setSelectedBranchId,
    selectedSemester,
    setSelectedSemester,
    currentSubjects,
    grades,
    updateGrade,
    getModuleAverage,
    semesterAverage,
  } = useGradeCalculator();

  const getSemesterColor = (avg: number) => {
    if (avg >= 15) return "text-[#d89cf6] shadow-[#d89cf6]";
    if (avg >= 14) return "text-[#12CAD6] shadow-[#12CAD6]";
    if (avg >= 12) return "text-[#50D890] shadow-[#50D890]";
    if (avg >= 10) return "text-[#FE9801] shadow-[#FE9801]";
    return "text-red-500 shadow-red-500";
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex-1 flex flex-col items-center p-4 sm:p-8 max-w-6xl mx-auto w-full h-[100vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="text-center mb-6 mt-8 relative">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-2 tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Master 2 <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-white animate-text">
              Grade Calculator
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 font-light tracking-[0.3em] text-xs uppercase"
          >
            C'est Grave Directe | By Sofiane Belkacem Nacer
          </motion.p>
        </div>

        {/* Branch Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full mb-8 backdrop-blur-sm bg-black/20 p-2 rounded-2xl border border-white/5"
        >
          <BranchSelector
            branches={branches}
            selectedBranchId={selectedBranch.id}
            onSelect={setSelectedBranchId}
          />
        </motion.div>

        {/* Semester Tabs */}
        <div className="w-full mb-8 flex justify-center">
          <div className="bg-black/40 backdrop-blur-md p-1.5 rounded-2xl inline-flex w-full sm:w-auto shadow-2xl border border-white/10 relative overflow-hidden">
            {(["S1", "S2"] as const).map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={cn(
                  "relative z-10 flex-1 sm:w-32 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                  selectedSemester === sem
                    ? "text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {selectedSemester === sem && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Semester {sem.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content & Result Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full pb-20">
          {/* Subjects List */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBranch.id + selectedSemester}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between mb-4 px-2">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: selectedBranch.color }} />
                    {selectedBranch.name}
                  </h2>
                </div>

                {currentSubjects.map((sub, index) => {
                  const key = `${selectedBranch.id}-${selectedSemester}-${sub.name}`;
                  const grade = grades[key] || { exam: 0, td: 0 };
                  return (
                    <motion.div
                      key={sub.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <SubjectRow
                        subject={sub}
                        exam={grade.exam}
                        td={grade.td}
                        moduleAvg={getModuleAverage(sub.name)}
                        onUpdate={(type, val) => updateGrade(sub.name, type, val)}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Result Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <motion.div
                layout
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Animated glow based on score */}
                <motion.div
                  animate={{
                    opacity: semesterAverage >= 10 ? 0.4 : 0.1,
                    background: semesterAverage >= 10
                      ? `radial-gradient(circle at 50% 50%, #50D890, transparent 70%)`
                      : `radial-gradient(circle at 50% 50%, #FF0000, transparent 70%)`
                  }}
                  className="absolute inset-0 pointer-events-none blur-3xl"
                />

                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-center border-b border-white/5 pb-4">
                  Semester Average
                </h3>

                <div className="flex justify-center items-center py-4 relative z-10">
                  <div
                    className={cn(
                      "text-7xl font-mono font-black tracking-tighter transition-all duration-500",
                      getSemesterColor(semesterAverage)
                    )}
                    style={{
                      textShadow:
                        semesterAverage >= 10 ? `0 0 50px currentColor` : "none",
                    }}
                  >
                    {/* Counter animation could go here, but simple text update is usually cleaner for frequent updates */}
                    {semesterAverage.toFixed(2)}
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <motion.div
                    initial={false}
                    animate={{ scale: semesterAverage >= 10 ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-black/50 border backdrop-blur-md",
                      semesterAverage >= 10
                        ? "border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.2)]"
                        : "border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(248,113,113,0.2)]"
                    )}
                  >
                    {semesterAverage >= 10 ? "✨ Validated" : "Not Validated"}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
