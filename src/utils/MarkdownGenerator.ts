
import { Identity, Routine } from '../core/models/types';

export class MarkdownGenerator {
  
  static generateIdentityMd(data: Identity): string {
    let md = `# Identity: ${data.name}\n\n`;

    md += `## Core Values\n`;
    if (data.values.length === 0) {
      md += `*No values defined.*\n`;
    } else {
      data.values.forEach(value => {
        md += `- ${value}\n`;
      });
    }
    md += `\n`;

    md += `## Anti-Values\n`;
    if (data.antiValues.length === 0) {
      md += `*No anti-values defined.*\n`;
    } else {
      data.antiValues.forEach(value => {
        md += `- ${value}\n`;
      });
    }
    md += `\n`;

    md += `## Current Goals\n`;
    if (data.goals.length === 0) {
      md += `> No active goals.\n`;
    } else {
      data.goals.forEach(goal => {
        const dateStr = goal.targetDate ? ` (Target: ${goal.targetDate})` : '';
        md += `> - **${goal.description}**${dateStr}\n`;
      });
    }

    return md;
  }

  static generateRoutineMd(data: Routine): string {
    let md = `# Weekly Routine\n\n`;

    md += `## Base Schedule\n`;
    
    if (data.baseSchedule.length === 0) {
      md += `*No schedule defined.*\n`;
    } else {
      // Simple sort by start time for readability
      const sortedSchedule = [...data.baseSchedule].sort((a, b) => 
        a.startTime.localeCompare(b.startTime)
      );

      sortedSchedule.forEach(slot => {
        md += `- ${slot.startTime} - ${slot.endTime}: **${slot.activity}** [${slot.day}]\n`;
      });
    }
    md += `\n`;

    md += `## Active Overrides\n`;
    if (data.activeOverrides) {
      md += `> **⚠️ OVERRIDE ACTIVE**\n`;
      md += `> Date: ${data.activeOverrides.date}\n`;
      md += `> New Activity: ${data.activeOverrides.newActivity}\n`;
      md += `> Time: ${data.activeOverrides.newStartTime} - ${data.activeOverrides.newEndTime}\n`;
    } else {
      md += `*No active overrides.*\n`;
    }

    return md;
  }
}
