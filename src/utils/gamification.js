export function getLevel(xp){
  if(xp < 100) return {name:'Beginner', next:100};
  if(xp < 300) return {name:'Explorer', next:300};
  if(xp < 650) return {name:'Skilled Learner', next:650};
  if(xp < 1100) return {name:'Digital Achiever', next:1100};
  return {name:'Digital Expert', next:1500};
}
export function canAward(existingReferences, reference){ return !existingReferences.includes(reference); }
