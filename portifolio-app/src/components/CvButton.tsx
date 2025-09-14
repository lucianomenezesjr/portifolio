import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { toast } from "sonner";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";


export function CvButton() {

  const handleDownload = () => {
    toast.success("Currículo baixado com sucesso!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 py-2 bg-[#2b0644] text-white rounded-lg cursor-pointer transition transform hover:bg-[#410a66] hover:scale-105">
            <Eye className="h-5 w-5" />
            Visualizar CV
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader className="flex flex-row items-center justify-between mx-5">
          <DialogTitle>Meu Currículo</DialogTitle>
            <a
                href="/curriculo.pdf"
                download="Luciano_Junior_CV.pdf"
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-[#2b06448a] text-white rounded-lg cursor-pointer transition transform hover:bg-[#410a667e] hover:scale-105">
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>Download CV</span>
            </a>
        </DialogHeader>
        <iframe
          src="/curriculo.pdf"
          className="w-full h-[600px] rounded-md"
        />
        
      </DialogContent>
    </Dialog>
  );
}
