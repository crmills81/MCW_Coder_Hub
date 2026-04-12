import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  
return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        {/* Logo with increased size and rounded corners */}
        <img 
          src={`${baseDir}/static/logo.png`} 
          style={{ 
            width: "150px", 
            height: "auto", 
            display: "block", 
            marginBottom: "0.5rem", 
            borderRadius: "8px" 
          }} 
          alt="Logo"
        />
        {title}
      </a>
    </h2>
  )
}
PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
