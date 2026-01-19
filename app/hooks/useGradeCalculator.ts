
import { useState, useMemo, useEffect } from "react";
import { BRANCHES, Branch, Subject } from "../data";

export function useGradeCalculator() {
    const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES[0].id);
    const [selectedSemester, setSelectedSemester] = useState<"S1" | "S2">("S1");
    const [grades, setGrades] = useState<Record<string, { exam: number; td: number }>>({});

    const selectedBranch = useMemo(
        () => BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0],
        [selectedBranchId]
    );

    const currentSubjects = useMemo(
        () => selectedBranch.data[selectedSemester],
        [selectedBranch, selectedSemester]
    );

    // Initialize grades for new subjects if not present
    useEffect(() => {
        setGrades((prev) => {
            const newGrades = { ...prev };
            let changed = false;
            currentSubjects.forEach((sub) => {
                const key = `${selectedBranch.id}-${selectedSemester}-${sub.name}`;
                if (!newGrades[key]) {
                    newGrades[key] = { exam: 0, td: 0 };
                    changed = true;
                }
            });
            return changed ? newGrades : prev;
        });
    }, [currentSubjects, selectedBranch.id, selectedSemester]);

    const updateGrade = (subjectName: string, type: "exam" | "td", value: number) => {
        const key = `${selectedBranch.id}-${selectedSemester}-${subjectName}`;
        setGrades((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                [type]: Math.max(0, Math.min(20, value)), // Clamp between 0 and 20
            },
        }));
    };

    const getModuleAverage = (subjectName: string) => {
        const key = `${selectedBranch.id}-${selectedSemester}-${subjectName}`;
        const grade = grades[key] || { exam: 0, td: 0 };
        return grade.exam * 0.67 + grade.td * 0.33;
    };

    const semesterAverage = useMemo(() => {
        let totalWeightedScore = 0;
        let totalCoef = 0;

        currentSubjects.forEach((sub) => {
            const avg = getModuleAverage(sub.name);
            totalWeightedScore += avg * sub.coef;
            totalCoef += sub.coef;
        });

        return totalCoef > 0 ? totalWeightedScore / totalCoef : 0;
    }, [currentSubjects, grades, selectedBranch.id, selectedSemester]); // Added dependencies for correctness

    return {
        branches: BRANCHES,
        selectedBranch,
        setSelectedBranchId,
        selectedSemester,
        setSelectedSemester,
        currentSubjects,
        grades,
        updateGrade,
        getModuleAverage,
        semesterAverage,
    };
}
