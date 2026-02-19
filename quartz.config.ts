import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Crystal's MCW Coder Hub",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', tagId: '<G-ERKZQHRW7W>',
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
        header: "Google Sans Code",
        body: "Google Sans Code",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#FDF2F7",
          gray: "#b8b8b8",
          darkgray: "#000000",
          dark: "#4b2175",
          secondary: "#2f1647",
          tertiary: "#600180",
          highlight: "rgba(227, 216, 237, 0.15)",
          textHighlight: "#FDEAF3",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#FDF2F7",
          dark: "#FDEAF3",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(248,154,195, 0.15)",
          textHighlight: "#FCE0ED",
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
      // Comment out CustomOgImages to speed up build time
     // Plugin.CustomOgImages(),
    ],
  },
}

export default config
