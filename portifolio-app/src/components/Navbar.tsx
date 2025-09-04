import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Sobre mim" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Projetos">
          <div className="text-sm grid grid-cols-auto gap-10 p-4">
            <ProductItem
              title="Alure App"
              href="/Projetos/Alure"
              src="/alureImgs/home_quadrada.png"
              description="E-commerce de vestuário, focado principalmente em segurança, UI e UX."
            />
            <ProductItem
              title="Controle de Acesso"
              href="/Projetos/CDA"
              src="/CdaImagens/home_cda.png"
              description="Plataforma de controle de acesso escolar, com autenticação JWT e dashboard completo."
            />
            <ProductItem
              title="Extração de Dados"
              href="/Projetos/ExtracaoDeDados"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Desenvolvimento de uma api para extração de dados de notas fiscais."
            />
            
          </div>
        </MenuItem>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Contato" />
        </Link>
      </Menu>
    </div>
  );
}
