import { promises as fs } from 'fs';
import * as path from 'path';

// Define the root path for our mock database relative to the project root
const ROOT_PATH = path.resolve('mock_db');

/**
 * Ensures that the directory structure for the given file path exists.
 * @param filePath - The relative path to the file (e.g., 'internal/cat1.json')
 */
export const ensureDirectoryExists = async (filePath: string): Promise<void> => {
  const fullPath = path.join(ROOT_PATH, filePath);
  const directory = path.dirname(fullPath);
  try {
    await fs.mkdir(directory, { recursive: true });
  } catch (error) {
    // Ignore error if directory already exists
  }
};

/**
 * Reads a text file from the defined ROOT_PATH.
 * @param filePath - The relative path to the file.
 * @returns The content of the file as a string.
 */
export const readTextFile = async (filePath: string): Promise<string> => {
  const fullPath = path.join(ROOT_PATH, filePath);
  return await fs.readFile(fullPath, 'utf-8');
};

/**
 * Writes text content to a file in the defined ROOT_PATH.
 * Automatically creates necessary directories.
 * @param filePath - The relative path to the file.
 * @param content - The string content to write.
 */
export const writeTextFile = async (filePath: string, content: string): Promise<void> => {
  const fullPath = path.join(ROOT_PATH, filePath);
  
  // Ensure directory exists before writing
  await ensureDirectoryExists(filePath);
  
  await fs.writeFile(fullPath, content, 'utf-8');
};