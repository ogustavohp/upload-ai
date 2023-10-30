import { FFmpeg } from '@ffmpeg/ffmpeg'

import coreURL from '../ffmpeg/ffmpeg-core.js'
import wasmURL from '../ffmpeg/ffmpeg-core.wasm'
import workerURL from '../ffmpeg/ffmpeg-core.js'

let ffmpeg: FFmpeg | null
// Create a single instance of ffmpeg that will be shared across all applications
// when calling the function it will load ffmpeg if it is loaded, if it is loaded it will return it
export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    await ffmpeg.load()
  }

  return ffmpeg
}
