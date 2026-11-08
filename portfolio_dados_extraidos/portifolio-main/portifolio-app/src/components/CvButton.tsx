import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { toast } from "sonner";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/contexts/LanguageContext";


export function CvButton() {
  const { t, language } = useLanguage();

  // Define os caminhos dos CVs baseado no idioma
  const cvPath = language === 'en' ? '/cv/en_cv.pdf' : '/cv/pt_cv.pdf';
  const downloadFileName = language === 'en' ? 'Luciano_Junior_CV_EN.pdf' : 'Luciano_Junior_CV_PT.pdf';

  const handleDownload = () => {
    toast.success(t('cvButton.downloadSuccess'));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 py-2 bg-[#2b0644] text-white rounded-lg cursor-pointer transition transform hover:bg-[#410a66] hover:scale-105">
            <Eye className="h-5 w-5" />
            {t('cvButton.view')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader className="flex flex-row items-center justify-between mx-5">
          <DialogTitle>{t('cvButton.title')}</DialogTitle>
            <a
                href={cvPath}
                download={downloadFileName}
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-[#2b06448a] text-white rounded-lg cursor-pointer transition transform hover:bg-[#410a667e] hover:scale-105">
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>{t('cvButton.download')}</span>
            </a>
        </DialogHeader>
        <iframe
          src={cvPath}
          className="w-full h-[600px] rounded-md"
        />
        
      </DialogContent>
    </Dialog>
  );
}
