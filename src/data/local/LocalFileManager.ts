
import { IMemoryRepository } from '../../core/repositories/IMemoryRepository';
import { Identity, Routine } from '../../core/models/types';
import { readTextFile, writeTextFile } from './FileAdapter';
import { MarkdownGenerator } from '../../utils/MarkdownGenerator';

const IDENTITY_FILE = 'internal/cat1.json';
const IDENTITY_EXPORT = 'exports/01_IDENTITY.md';

const ROUTINE_FILE = 'internal/cat3.json';
const ROUTINE_EXPORT = 'exports/03_ROUTINE.md';

const CONTEXT_FILE = 'internal/cat4.json';
const LOG_FILE = 'internal/cat5.json';
const LOG_EXPORT = 'exports/05_LOGS.md';

export class LocalFileManager implements IMemoryRepository {

  /**
   * reads internal/cat1.json
   * Returns default Identity if file missing
   */
  async getIdentity(): Promise<Identity> {
    try {
      const raw = await readTextFile(IDENTITY_FILE);
      return JSON.parse(raw) as Identity;
    } catch (error) {
      // Default Empty Identity
      return {
        name: "User",
        values: [],
        antiValues: [],
        goals: []
      };
    }
  }

  /**
   * reads internal/cat3.json
   * Returns default Routine if file missing
   */
  async getRoutine(): Promise<Routine> {
    try {
      const raw = await readTextFile(ROUTINE_FILE);
      return JSON.parse(raw) as Routine;
    } catch (error) {
      // Default Empty Routine
      return {
        baseSchedule: [],
        activeOverrides: null
      };
    }
  }

  /**
   * reads internal/cat4.json
   * Returns empty string if file missing
   */
  async getRecentContext(): Promise<string> {
    try {
      const raw = await readTextFile(CONTEXT_FILE);
      const data = JSON.parse(raw);
      return data.summary || "";
    } catch (error) {
      return "";
    }
  }

  // --- Writes ---

  /**
   * Updates Identity:
   * 1. Saves to internal/cat1.json
   * 2. Generates exports/01_IDENTITY.md
   */
  async updateIdentity(data: Identity): Promise<void> {
    // 1. JSON Write
    const jsonContent = JSON.stringify(data, null, 2);
    await writeTextFile(IDENTITY_FILE, jsonContent);

    // 2. Markdown Write
    const mdContent = MarkdownGenerator.generateIdentityMd(data);
    await writeTextFile(IDENTITY_EXPORT, mdContent);
  }

  /**
   * Updates Routine:
   * 1. Saves to internal/cat3.json
   * 2. Generates exports/03_ROUTINE.md
   */
  async updateRoutine(data: Routine): Promise<void> {
    // 1. JSON Write
    const jsonContent = JSON.stringify(data, null, 2);
    await writeTextFile(ROUTINE_FILE, jsonContent);

    // 2. Markdown Write
    const mdContent = MarkdownGenerator.generateRoutineMd(data);
    await writeTextFile(ROUTINE_EXPORT, mdContent);
  }

  /**
   * Appends a log entry.
   * Saves to internal/cat5.json and exports/05_LOGS.md
   */
  async appendLog(entry: string): Promise<void> {
    let logs: string[] = [];
    
    try {
      const raw = await readTextFile(LOG_FILE);
      logs = JSON.parse(raw);
    } catch (error) {
      // Start new log if missing
      logs = [];
    }

    logs.push(entry);

    // Write JSON
    await writeTextFile(LOG_FILE, JSON.stringify(logs, null, 2));

    // Write Export (Simple List View)
    const mdContent = `# Session Logs\n\n` + logs.map(l => `- ${l}`).join('\n');
    await writeTextFile(LOG_EXPORT, mdContent);
  }
}
