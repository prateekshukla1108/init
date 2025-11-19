
import { Identity, Routine } from '../models/types';

export interface IMemoryRepository {
  // Reads
  getIdentity(): Promise<Identity>;
  getRoutine(): Promise<Routine>;
  getRecentContext(): Promise<string>; // Returns Cat4 summary
  
  // Writes (The Dual-Write logic happens inside the implementation)
  updateIdentity(data: Identity): Promise<void>;
  updateRoutine(data: Routine): Promise<void>;
  appendLog(entry: string): Promise<void>;
}
