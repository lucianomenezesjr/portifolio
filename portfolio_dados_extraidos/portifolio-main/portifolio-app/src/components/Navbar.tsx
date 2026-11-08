import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useLanguage();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item={t('navbar.home')} />
        </Link>

        <MenuItem setActive={setActive} active={active} item={t('navbar.projects')}>
          <div className="text-sm grid grid-cols-auto gap-10 p-4">
            <ProductItem
              title={t('projects.alure.title')}
              href="/Projetos/Alure"
              src="/alureImgs/home_quadrada.png"
              description={t('projects.alure.description')}
            />
            <ProductItem
              title={t('projects.cda.title')}
              href="/Projetos/CDA"
              src="/CdaImagens/home_cda.png"
              description={t('projects.cda.description')}
            />
            <ProductItem
              title={t('projects.extraction.title')}
              href="/Projetos/ExtracaoDeDados"
              src="/GeminiAPI/methodPostv2.png"
              description={t('projects.extraction.description')}
            />
            
          </div>
        </MenuItem>
        <Link href="/#contato" scroll={true}>
          <MenuItem setActive={setActive} active={active} item={t('navbar.contact')} />
        </Link>
      </Menu>
    </div>
  );
}
