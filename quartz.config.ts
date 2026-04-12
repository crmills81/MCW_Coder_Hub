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
      provider: 'google', 
      tagId: 'G-ERKZQHRW7W', // Removed the < > brackets
    },
    locale: "en-US",
    baseUrl: "crmills81.github.io/MCW_Coder_Hub",
    ignorePatterns: [
      "private", 
      "templates", 
      ".obsidian",
      "content/30 Anatomy & Path/Med terms dictionary/Med roots",
    ],
  }, // Added missing closing brace
// ... rest of your config
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Google Sans",
        body: "Google Sans",
        code: "Google Sans Code",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#ebdae2",
          gray: "#b8b8b8",
          darkgray: "#000000",
          dark: "#4b2175",
          secondary: "#2f1647",
          tertiary: "#850599",
          highlight: "rgba(250, 175, 250, 0.44)",
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
      Plugin.FrontMatter(), // Removed the "]" from here
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
    ], // <--- This bracket now correctly closes the entire list
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
