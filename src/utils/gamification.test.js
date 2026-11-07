import {describe, expect, it} from 'vitest';
import {canAward, getLevel} from './gamification';
describe('level calculation',()=>{
  it('uses documented thresholds',()=>{expect(getLevel(0).name).toBe('Beginner');expect(getLevel(100).name).toBe('Explorer');expect(getLevel(650).name).toBe('Digital Achiever');});
});
describe('reward integrity',()=>{
  it('rejects duplicate lesson references',()=>{expect(canAward(['lesson-1'],'lesson-1')).toBe(false);expect(canAward(['lesson-1'],'lesson-2')).toBe(true);});
});
