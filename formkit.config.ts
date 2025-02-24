import { defineFormKitConfig } from "@formkit/vue";
import { rootClasses } from "./formkit.theme";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { createProPlugin, inputs } from "@formkit/pro";
import { genesisIcons } from "@formkit/icons"

const pro = createProPlugin("fk-9e3213c6b8", inputs);

export default defineFormKitConfig(() => ({
  plugins: [pro, createAutoAnimatePlugin() as VoidFunction],
  icons: { ...genesisIcons },
  config: { rootClasses },
}));
