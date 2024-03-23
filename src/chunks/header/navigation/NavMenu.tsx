import { buttonVariants } from '@/components/ui/Button.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { linkedIn } from '@/constants/links.ts';
import { AlignJustify } from 'lucide-react';
import type { ReactNode } from 'react';

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <a href={href}>
    <DropdownMenuItem>{children}</DropdownMenuItem>
  </a>
);

export default function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex lg:hidden">
        <AlignJustify className="h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-2">
        <NavLink href="#">About Me</NavLink>
        <NavLink href="#">Experience</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Contact</NavLink>
        <DropdownMenuSeparator />
        <a href={linkedIn} className={buttonVariants()} target="_blank">
          Talk with me
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
