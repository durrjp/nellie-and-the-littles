// Resizes and compresses everything in image-originals/ into src/assets/images/ as WebP.
// Run with: npm run images
import { mkdir, readdir } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const SRC = 'image-originals'
const OUT = 'src/assets/images'
const MAX_WIDTH = 1600

await mkdir(OUT, { recursive: true })

for (const file of await readdir(SRC)) {
  const out = join(OUT, `${parse(file).name}.webp`)
  await sharp(join(SRC, file))
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out)
  console.log(out)
}
