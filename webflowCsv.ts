import {
  PORTFOLIO_PROJECTS,
  WORK_EXPERIENCE,
  SKILL_CATEGORIES,
  EDUCATION_LIST,
  REFERENCES_LIST,
} from '../data/portfolioData';

// Helper to escape CSV cell values
const escapeCsvCell = (val: string | number | boolean | undefined | null): string => {
  if (val === undefined || val === null) return '""';
  const str = String(val);
  // Replace double quotes with escaped double quotes
  const escaped = str.replace(/"/g, '""');
  return `"${escaped}"`;
};

// Helper to convert array to slug
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Generates CSV string for Webflow Projects Collection
 */
export const getProjectsCsv = (): string => {
  const headers = [
    'Name',
    'Slug',
    'Category',
    'Client',
    'Year',
    'Summary',
    'Description',
    'Deliverables',
    'Tools',
    'Featured',
    'ImageURL',
    'ExternalURL',
  ];

  const rows = PORTFOLIO_PROJECTS.map((p) => [
    escapeCsvCell(p.title),
    escapeCsvCell(slugify(p.title)),
    escapeCsvCell(p.category),
    escapeCsvCell(p.client),
    escapeCsvCell(p.year),
    escapeCsvCell(p.summary),
    escapeCsvCell(p.description),
    escapeCsvCell(p.deliverables.join('; ')),
    escapeCsvCell(p.tools.join('; ')),
    escapeCsvCell(p.featured ? 'true' : 'false'),
    escapeCsvCell(typeof p.image === 'string' ? p.image : ''),
    escapeCsvCell(p.externalUrl || ''),
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
};

/**
 * Generates CSV string for Webflow Work Experience Collection
 */
export const getExperienceCsv = (): string => {
  const headers = [
    'Name',
    'Slug',
    'Role',
    'Company',
    'Location',
    'Period',
    'IsCurrent',
    'Description',
    'Highlights',
    'SkillsUsed',
  ];

  const rows = WORK_EXPERIENCE.map((e) => [
    escapeCsvCell(`${e.role} at ${e.company}`),
    escapeCsvCell(slugify(`${e.role}-${e.company}`)),
    escapeCsvCell(e.role),
    escapeCsvCell(e.company),
    escapeCsvCell(e.location),
    escapeCsvCell(e.period),
    escapeCsvCell(e.isCurrent ? 'true' : 'false'),
    escapeCsvCell(e.description),
    escapeCsvCell(e.highlights.join('; ')),
    escapeCsvCell(e.skillsUsed.join('; ')),
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
};

/**
 * Generates CSV string for Webflow Skills Collection
 */
export const getSkillsCsv = (): string => {
  const headers = ['Name', 'Slug', 'Category', 'Level', 'Description'];

  const rows: string[][] = [];

  SKILL_CATEGORIES.forEach((cat) => {
    cat.skills.forEach((s) => {
      rows.push([
        escapeCsvCell(s.name),
        escapeCsvCell(slugify(s.name)),
        escapeCsvCell(cat.title),
        escapeCsvCell(s.level),
        escapeCsvCell(s.description || ''),
      ]);
    });
  });

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
};

/**
 * Generates CSV string for Webflow Education Collection
 */
export const getEducationCsv = (): string => {
  const headers = [
    'Name',
    'Slug',
    'Qualification',
    'Institution',
    'Location',
    'Year',
    'Category',
  ];

  const rows = EDUCATION_LIST.map((edu) => [
    escapeCsvCell(edu.qualification),
    escapeCsvCell(slugify(edu.qualification)),
    escapeCsvCell(edu.qualification),
    escapeCsvCell(edu.institution),
    escapeCsvCell(edu.location),
    escapeCsvCell(edu.year),
    escapeCsvCell(edu.category),
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
};

/**
 * Generates CSV string for Webflow References Collection
 */
export const getReferencesCsv = (): string => {
  const headers = ['Name', 'Slug', 'Relation', 'Phone', 'Quote'];

  const rows = REFERENCES_LIST.map((ref) => [
    escapeCsvCell(ref.name),
    escapeCsvCell(slugify(ref.name)),
    escapeCsvCell(ref.relation),
    escapeCsvCell(ref.phone),
    escapeCsvCell(ref.quote),
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
};

/**
 * Triggers a browser download of a CSV file
 */
export const downloadCsvFile = (csvContent: string, filename: string) => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
