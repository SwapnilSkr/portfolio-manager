import { Montserrat } from "next/font/google";

export const monsterrat_font_init = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const monsterrat = monsterrat_font_init.variable;
