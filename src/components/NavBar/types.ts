export interface NavBarProps {
  links?: Link[];
  isAuthorized?: boolean;
}

type Link = {
  title: string;
  icon?: string;
  link?: string;
}
