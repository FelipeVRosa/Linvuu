import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, colorHex, drawType) {
  // Parse colorHex #RRGGBB
  const r = parseInt(colorHex.slice(1, 3), 16);
  const g = parseInt(colorHex.slice(3, 5), 16);
  const b = parseInt(colorHex.slice(5, 7), 16);

  // Raw RGBA buffer with filter byte per row
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowBytes);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const dx = x - width / 2;
      const dy = y - height / 2;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = width * 0.42;

      // Dark background circle #1D0640
      if (dist <= radius) {
        if (dist >= radius - 3) {
          // Border in mascot color
          rawData[pixelOffset] = r;
          rawData[pixelOffset + 1] = g;
          rawData[pixelOffset + 2] = b;
          rawData[pixelOffset + 3] = 255;
        } else {
          // Cosmic interior #1D0640 = 29, 6, 64
          const innerDist = Math.sqrt(dx * dx + (dy + 2) * (dy + 2));
          if (innerDist < radius * 0.6) {
            // Mascot inner body
            rawData[pixelOffset] = Math.min(255, r + 20);
            rawData[pixelOffset + 1] = Math.min(255, g + 20);
            rawData[pixelOffset + 2] = Math.min(255, b + 20);
            rawData[pixelOffset + 3] = 255;
          } else {
            rawData[pixelOffset] = 29;
            rawData[pixelOffset + 1] = 6;
            rawData[pixelOffset + 2] = 64;
            rawData[pixelOffset + 3] = 255;
          }
        }
      } else {
        // Transparent outside
        rawData[pixelOffset] = 0;
        rawData[pixelOffset + 1] = 0;
        rawData[pixelOffset + 2] = 0;
        rawData[pixelOffset + 3] = 0;
      }
    }
  }

  // PNG Header
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth: 8
  ihdr[9] = 6; // ColorType: RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // IDAT
  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);

  // IEND
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const length = data.length;
  const chunk = Buffer.alloc(8 + length + 4);
  chunk.writeUInt32BE(length, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const crc = crc32(chunk.subarray(4, 8 + length));
  chunk.writeUInt32BE(crc, 8 + length);
  return chunk;
}

// Standard CRC32
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (-(crc & 1) & 0xedb88320);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const assetsDir = path.resolve(process.cwd(), 'src/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const mascots = [
  { file: 'pretzel_de.png', color: '#F5A623', type: 'pretzel' },
  { file: 'pelmeni_ru.png', color: '#E06C75', type: 'pelmeni' },
  { file: 'potato_en.png', color: '#98C379', type: 'potato' },
  { file: 'croissant_fr.png', color: '#61AFEF', type: 'croissant' },
  { file: 'churro_es.png', color: '#E5C07B', type: 'churro' },
];

for (const m of mascots) {
  const png = createPNG(128, 128, m.color, m.type);
  fs.writeFileSync(path.join(assetsDir, m.file), png);
  console.log(`Created ${m.file}`);
}
