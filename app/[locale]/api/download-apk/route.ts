import path from 'path';
import { promises as fs } from 'fs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { path: folderPath } = body;

    if (!folderPath) {
      return new Response('Path is required', { status: 400 });
    }

    // Caminho do arquivo APK
    const filePath = path.resolve(`./public/${folderPath}/system.apk`);

    try {
      // Verifica se o arquivo existe
      const fileExists = await fs.access(filePath).then(() => true).catch(() => false);

      if (!fileExists) {
        return new Response('File not found', { status: 404 });
      }

      // Nome público do arquivo (adicionando timestamp)
      const publicName = `system_${Date.now()}.apk`;

      // Lê o arquivo como Buffer
      const fileBuffer = await fs.readFile(filePath);

      // Configura a resposta com o arquivo para download
      return new Response(fileBuffer, {
        headers: {
          'Content-Type': 'application/vnd.android.package-archive', // Tipo APK
          'Content-Disposition': `attachment; filename="${publicName}"`, // Nome no download
          'Content-Length': fileBuffer.length.toString(), // Tamanho do arquivo
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
