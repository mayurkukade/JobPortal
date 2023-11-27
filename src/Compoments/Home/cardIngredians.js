export const allIngredients = [
    { icon: "🧑🏿‍🎓",basic:"0",standard:"15999",premium:"24999", label: "STUDENT" },
    { icon: "👮🏿‍♂️",basic:"0",standard:"19999",premium:"29999", label: "TRAINING PLACEMENT OFFICER" },
    { icon: "👩🏿‍💻", basic:"0",standard:"29999",premium:"39999",label: "CORPORATE RECEUITER" },
  
  ];
  
  const [STUDENT, PLACEMENT , RECEUITER] = allIngredients;
export const initialTabs = [STUDENT, PLACEMENT , RECEUITER];

export function getNextIngredient(
  ingredients
) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
