import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between border-b px-6 py-3">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por @ogustavohp
          </span>
          <Button variant="outline">Github</Button>
        </div>
      </div>
    </div>
  )
}
