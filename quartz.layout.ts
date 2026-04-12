import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "My MCW Inpatient Profee Assistant": "https://crmills81.github.io/crystals_coding_tools",
      "HappyCOVERGIRLCo": "https://happycovergirlcocovers.com",
      "My Etsy Shop!": "https://happycovergirlco.etsy.com",
      "My Bluesky": "https://bsky.app/profile/happycovergirlcocovers.com",
      "My Pinterest": "https://www.pinterest.com/HappyCOVERGIRLCoArts/",
    },
    description:
      "Some ICD-10-CM codes may be root codes without all 7 characters, where applicable. With that said, this content is for general educational and reference purposes only and does not replace official coding resources. Users are responsible for verifying all codes and guidelines with current code books, encoder software, payer policies, and authoritative guidance before assigning or billing any codes.<br>",
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(
      Component.TableOfContents({
        collapseByDefault: false, 
        maxDepth: 3,
      })
    ),
    Component.RecentNotes({ limit: 20 }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}