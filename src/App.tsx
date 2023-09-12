import { FileVideo, Github, Upload, Wand2 } from 'lucide-react';
import { ToggleThemeMode } from './components/Theme/ToggleTheme';
import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './components/ui/select';
import { Separator } from './components/ui/separator';
import { Slider } from './components/ui/slider';
import { Textarea } from './components/ui/textarea';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3 ">
        <h1>upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 por Andrelino Silva
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>

          <ToggleThemeMode />
        </div>
      </div>
      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid flex-1 grid-rows-2 gap-4">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode usar a variável{' '}
            <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompt para adicionar a transcrição do seu vídeo selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-muted-foreground transition-colors duration-500 hover:bg-primary/10"
              htmlFor="video"
            >
              <FileVideo className="h-6 w-6" />
              Selecione um vídeo
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt" className="font-medium">
                Prompt de transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 resize-none leading-relaxed"
                placeholder="Inclua palavras chaves mencionadas no vídeo, separadas por vírgulas (,)"
              />
            </div>
            <Button type="submit" className="h-12 w-full">
              Carregar vídeo <Upload className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do YouTube</SelectItem>
                  <SelectItem value="description">
                    Descrição do YouTube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs italic text-muted-foreground">
                Você poderá customizar esta opção em breve.
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs italic leading-relaxed text-muted-foreground">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="h-12 w-full">
              Executar <Wand2 className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}

export default App;
