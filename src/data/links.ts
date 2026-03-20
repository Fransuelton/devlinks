export interface LinkProfile {
  label: string;
  url: string;
  icon: string;
}

export const profileLinks: LinkProfile[] = [
  {
    label: "Veja meu portfólio",
    url: "https://www.fransuelton.dev/",
    icon: "ion:code-slash-outline",
  },
  {
    label: "GitHub",
    url: "https://github.com/Fransuelton",
    icon: "ion:logo-github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/fransuelton/",
    icon: "ion:logo-linkedin",
  },
  {
    label: "Discord",
    url: "https://discord.com/users/537751809331167243",
    icon: "ion:logo-discord",
  },
  {
    label: "E-mail",
    url: "mailto:contato@fransuelton.dev",
    icon: "ion:mail",
  },
  {
    label: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=558499778995",
    icon: "ion:logo-whatsapp",
  },
];
