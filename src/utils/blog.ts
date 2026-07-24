import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogsDir = path.join(__dirname, 'pages/blogs');

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
}

export function getSortedPosts(): BlogPost[] {
  if (!fs.existsSync(blogsDir)) return [];
  
  const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.astro'));
  const posts: BlogPost[] = [];
  
  for (const file of files) {
    const filePath = path.join(blogsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    const titleMatch = content.match(/const title = "([^"]+)"/);
    const descMatch = content.match(/const description = "([^"]+)"/);
    const dateMatch = content.match(/Last updated: ([^|]+)/);
    const readTimeMatch = content.match(/(\d+) min read/);
    
    if (titleMatch && descMatch) {
      posts.push({
        title: titleMatch[1],
        description: descMatch[1],
        slug: file.replace(/\.astro$/, ''),
        date: dateMatch ? dateMatch[1].trim() : '2026-07-24',
        readTime: readTimeMatch ? `${readTimeMatch[1]} min read` : '10 min read'
      });
    }
  }
  
  return posts.sort((a, b) => b.slug.localeCompare(a.slug));
}
