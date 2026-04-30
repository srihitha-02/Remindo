import { parse, parseISO, isSameDay } from 'date-fns';

/**
 * Robustly parses a date string from the backend/form into a Local Date object.
 * Handles 'yyyy-MM-dd' and ISO strings correctly without UTC shifts.
 */
export const parseTaskDate = (dateStr: string | undefined | null): Date => {
  if (!dateStr) return new Date();
  
  // If it's already an ISO string with 'T', use parseISO
  if (dateStr.includes('T')) {
    return parseISO(dateStr);
  }
  
  // For 'yyyy-MM-dd', parse it as a local date at 00:00:00
  // date-fns parse with 'yyyy-MM-dd' is safe and uses the current reference date's timezone
  const parsed = parse(dateStr, 'yyyy-MM-dd', new Date());
  
  if (isNaN(parsed.getTime())) {
    // Fallback for any other weird formats
    const fallback = new Date(dateStr);
    return isNaN(fallback.getTime()) ? new Date() : fallback;
  }
  
  return parsed;
};

/**
 * Comparison helper to check if two dates fall on the same day in local time.
 */
export const isTaskOnDay = (taskDateStr: string | undefined | null, day: Date): boolean => {
  if (!taskDateStr) return false;
  return isSameDay(parseTaskDate(taskDateStr), day);
};
