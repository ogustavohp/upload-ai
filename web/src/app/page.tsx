import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Github } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b px-6 py-3">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por @ogustavohp
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
        </div>
      </header>

      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid flex-1 grid-rows-2 gap-4"></div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{' '}
            <code className="text-violet-400">{`transcription`}</code> no seu
            prompt para adicionara o conteúdo da transcrição do vídeo
            selecionado.
          </p>
        </div>
        <aside className="w-80"></aside>
      </main>
    </div>
  )
}
