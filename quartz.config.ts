import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Crystal's Coder Hub",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', 
      tagId: 'G-ERKZQHRW7W',
    },
    locale: "en-US",
    baseUrl: "crmills81.github.io/MCW_Coder_Hub",
    ignorePatterns: [
      "private", 
      "templates", 
      ".obsidian",
      "content/30 Anatomy & Path/Med terms dictionary/Med roots",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Google Sans",
        body: "Inter",
        code: "Google Sans Code",
      },
      colors: {
        lightMode: {
          light: "#FEFAFD",
          lightgray: "#FDF7FC",
          gray: "#b8b8b8",
          darkgray: "#000000",
          dark: "#674EA7",
          secondary: "#780A75",
          tertiary: "#D129CB",
          highlight: "rgba(242, 230, 242, 0.44)",
          textHighlight: "#f7c8df",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#fdf2f7",
          dark: "#f7dae8",
          secondary: "#f549e4",
          tertiary: "#9905b0",
          highlight: "rgba(248,154,195, 0.15)",
          textHighlight: "#fce0ed",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
