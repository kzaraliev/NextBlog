import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'posts');

// Simple frontmatter parser without external dependencies
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { metadata: {}, content: content };
  }
  
  const frontmatterString = match[1];
  const bodyContent = match[2];
  
  // Parse YAML-like frontmatter
  const metadata = {};
  frontmatterString.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      metadata[key] = value;
    }
  });
  
  return { metadata, content: bodyContent };
}

// Convert markdown to HTML using marked with post-processing for styling
function markdownToHtml(markdown) {
  try {
    // Use marked with basic options
    let html = marked.parse(markdown, {
      breaks: false,
      gfm: true
    });
    
    // Post-process the HTML to add Tailwind classes
    html = html
      // Headers
      .replace(/<h1>/g, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8 first:mt-0">')
      .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">')
      .replace(/<h3>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">')
      .replace(/<h4>/g, '<h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">')
      .replace(/<h5>/g, '<h5 class="text-base font-semibold text-gray-900 mt-4 mb-2">')
      .replace(/<h6>/g, '<h6 class="text-sm font-semibold text-gray-900 mt-4 mb-2">')
      
      // Paragraphs
      .replace(/<p>/g, '<p class="mb-6 text-gray-700 leading-relaxed text-lg">')
      
      // Lists
      .replace(/<ul>/g, '<ul class="list-disc list-inside mb-8 ml-6 space-y-2 text-gray-700">')
      .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-8 ml-6 space-y-2 text-gray-700">')
      .replace(/<li>/g, '<li class="leading-relaxed">')
      
      // Strong and emphasis
      .replace(/<strong>/g, '<strong class="font-semibold text-gray-900">')
      .replace(/<em>/g, '<em class="italic text-gray-800">')
      
      // Links
      .replace(/<a href="/g, '<a href="')
      .replace(/<a /g, '<a class="text-orange-600 hover:text-orange-800 font-medium underline decoration-2 underline-offset-2 transition-colors" ')
      
      // Code
      .replace(/<code>/g, '<code class="bg-orange-50 text-orange-800 px-2 py-1 rounded text-sm font-mono border border-orange-200">')
      .replace(/<pre><code/g, '<pre class="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto"><code class="text-sm font-mono text-gray-800"')
      
      // Blockquotes
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-orange-500 pl-6 my-8 italic text-gray-700 text-lg bg-orange-50 py-4 rounded-r-lg">');
    
    return html;
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return `<p class="text-red-600">Грешка при обработка на съдържанието</p>`;
  }
}

export async function getAllPosts() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'));
    
    const posts = markdownFiles.map(fileName => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { metadata, content } = parseFrontmatter(fileContent);
      
      // Format date for display in Bulgarian
      const date = new Date(metadata.date);
      const formattedDate = date.toLocaleDateString('bg-BG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      return {
        id: metadata.slug || fileName.replace('.md', ''),
        title: metadata.title || 'Без заглавие',
        href: `/blog/${metadata.slug || fileName.replace('.md', '')}`,
        description: metadata.description || '',
        imageUrl: metadata.image || 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: formattedDate,
        datetime: metadata.date,
        category: {
          title: metadata.category || 'Общи',
          href: '#'
        },
        author: {
          name: metadata.author || 'Анонимен',
          role: metadata.authorRole || 'Автор',
          href: '#',
          imageUrl: metadata.authorImage || '/avatar.webp'
        },
        content,
        contentHtml: markdownToHtml(content),
        slug: metadata.slug || fileName.replace('.md', '')
      };
    });
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const posts = await getAllPosts();
    return posts.find(post => post.slug === slug);
  } catch (error) {
    console.error('Error getting post by slug:', error);
    return null;
  }
} 