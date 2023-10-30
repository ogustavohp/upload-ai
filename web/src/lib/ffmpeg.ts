import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'

// import coreURL from '../../public/ffmpeg/ffmpeg-core.js'
// import wasmURL from '../../public/ffmpeg/ffmpeg-core.wasm'
// import workerURL from '../../public/ffmpeg/ffmpeg-worker.js'

let ffmpeg: FFmpeg | null
// Create a single instance of ffmpeg that will be shared across all applications
// when calling the function it will load ffmpeg if it is loaded, if it is loaded it will return it
export async function getFFmpeg() {
  const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd'

  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        'application/wasm',
      ),
    })
  }

  return ffmpeg
}
