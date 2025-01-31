import path from 'path';
import { promises as fs } from 'fs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { path: folderPath } = body;

    if (!folderPath) {
      return new Response('Path is required', { status: 400 });
    }

    const filePath = path.resolve(`./public/${folderPath}/system.apk`);

    try {
      const fileExists = await fs.access(filePath).then(() => true).catch(() => false);

      if (!fileExists) {
        return new Response('File not found', { status: 404 });
      }

      const publicName = `system_${Date.now()}.apk`;

      const fileBuffer = await fs.readFile(filePath);

      return new Response(fileBuffer, {
        headers: {
          'Content-Type': 'application/vnd.android.package-archive',
          'Content-Disposition': `attachment; filename="${publicName}"`,
          'Content-Length': fileBuffer.length.toString(),
        },
        status: 200,
      });
    } catch (error) {
      console.error('Error reading file:', error);
      return new Response('Error reading file', { status: 500 });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
