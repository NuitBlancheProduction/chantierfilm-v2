import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const clientsDir = path.join(process.cwd(), 'public', 'clients');
    
    if (!fs.existsSync(clientsDir)) {
      return NextResponse.json({ logos: [] });
    }
    
    const allFiles = fs.readdirSync(clientsDir);
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];
    
    const logos = allFiles.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    
    return NextResponse.json({ logos });
  } catch (error) {
    console.error('Error reading clients directory:', error);
    return NextResponse.json({ logos: [] });
  }
}