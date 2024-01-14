import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "合利环保（河北）有限公司",
  description: "环保规划、设计、咨询、施工",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
