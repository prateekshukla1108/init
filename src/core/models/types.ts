
export interface Goal {
  id: string;
  description: string;
  targetDate?: string;
}

export interface Identity {
  name: string;
  values: string[];
  antiValues: string[];
  goals: Goal[];
}

export interface TimeSlot {
  id: string;
  day: string; // e.g., "Monday", "Weekdays"
  startTime: string; // Format: "HH:MM"
  endTime: string;   // Format: "HH:MM"
  activity: string;
}

export interface Override {
  id: string;
  date: string; // ISO 8601 Date string "YYYY-MM-DD"
  targetTimeSlotId?: string; // ID of the slot being modified, if applicable
  newActivity: string;
  newStartTime: string;
  newEndTime: string;
}

export interface Routine {
  baseSchedule: TimeSlot[];
  activeOverrides: Override | null;
}

export interface Message {
  id: string;
  role: 'user' | 'system' | 'assistant';
  content: string;
  timestamp: number;
  metadata?: {
    classification: 'CAT1_UPDATE' | 'CAT3_OVERRIDE' | 'CHAT';
    confidence: number;
  };
}
