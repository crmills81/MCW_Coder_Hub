Templater organizes its string functions under modules like `tp.file`, `tp.system`, `tp.date`, `tp.string`, and others. Here's a comprehensive list of the main ones available for use in `<%* ... %>` execution blocks, grouped by category.

## File Operations (`tp.file`)
- `tp.file.create_new(content, fname, folder?, open?, sourceFile?)` - Creates new note
- `tp.file.rename(newName)` - Renames current note
- `tp.file.move(destination)` - Moves current note
- `tp.file.exists(path)` - Checks if file exists
- `tp.file.find_tfile(fname)` - Finds TFile by name
- `tp.file.include(sourceFile)` - Includes content from another note
- `tp.file.selection()` - Gets highlighted text
- `tp.file.title` - Current note title
- `tp.file.path(absolute?)` - Current note path
- `tp.file.folder(absolute?)` - Current note folder
- `tp.file.tags` - Current note tags
- `tp.file.cursor()` - Current cursor position

## User Input (`tp.system`)
- `tp.system.prompt(message, defaultValue?)` - Text input prompt
- `tp.system.suggester(items, displayItems?, addNewItem?, prompt?, initialValueIndex?)` - Dropdown picker
- `tp.system.multi_select_suggester(items, displayItems?, prompt?)` - Multi-select dropdown
- `tp.system.clipboard()` - Gets clipboard content
- `tp.system.suggester_mode()` - Gets current suggester mode

## Dates (`tp.date`)
- `tp.date.now(format?, offset?, reference?, reference_format?)` - Current date/time
- `tp.date.tomorrow(format?, offset?, reference?)` - Tomorrow's date
- `tp.date.yesterday(format?, offset?, reference?)` - Yesterday's date
- `tp.date.weekday(format?, offset?, reference?)` - Weekday name
- `tp.date.compact_year(format?, offset?, reference?)` - Compact year format

## String Processing (`tp.string`)
- `tp.string.strip(string)` - Removes whitespace
- `tp.string.capitalize(string)` - Capitalizes first letter
- `tp.string.title(string)` - Title case
- `tp.string.chomp_left(string, prefix)` - Removes left prefix
- `tp.string.chomp_right(string, suffix)` - Removes right suffix
- `tp.string.regex_replace(string, regex, replacement)` - Regex replace
- `tp.string.chunk(string, size, separator)` - Chunks string
- `tp.string.quote(string)` - Wraps in quotes
- `tp.string.unquote(string)` - Removes quotes

## Vault & Config (`tp.config`)
- `tp.config.target_folder` - Folder where template runs
- `tp.config.target_file` - File where template runs
- `tp.config.eternal_formatted` - Formatted eternal variables

## Frontmatter (`tp.frontmatter`)
- `tp.frontmatter.key` - Gets frontmatter value
- `tp.frontmatter['key']` - Gets frontmatter value (dynamic)

## Hooks (`tp.hooks`)
- Various lifecycle hooks for processing before/after template execution

## Obsidian API (`app`)
- `app.vault.create()` - Direct vault access
- `app.workspace.activeLeaf` - Current editor pane

## Variables (`tR`)
- `tR += "text"` - Appends to template result
- `tR = "text"` - Sets template result

**Usage**: All go inside `<%* ... %>` blocks in template notes. Save examples from prior messages as `.md` files in your Templater folder, then run via **Templater: Insert template**. The full API lives at Templater Internal Functions Documentation(https://silentvoid13.github.io/Templater/internal-functions/).[10]

Sources
[1] Syntax - Templater - SilentVoid https://silentvoid13.github.io/Templater/syntax.html
[2] Templater plugin (1.5 and newer): New Syntax and Examples https://forum.obsidian.md/t/templater-plugin-1-5-and-newer-new-syntax-and-examples/16513
[3] Is there a comprehensive list of characters and strings that *do stuff ... https://www.reddit.com/r/ObsidianMD/comments/1fxhh1q/is_there_a_comprehensive_list_of_characters_and/
[4] Obsidian Templater Fun - Macdrifter http://www.macdrifter.com/2021/08/obsidian-templater-fun.html
[5] Template literals (Template strings) - JavaScript - MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[6] Template Function List - Helm https://helm.sh/docs/chart_template_guide/function_list
[7] djjoa/Obsidian-System-Commands-Execution-Templates - GitHub https://github.com/djjoa/Obsidian-System-Commands-Execution-Templates
[8] String Functions - 010 Editor Manual https://www.sweetscape.com/010editor/manual/FuncString.htm
[9] String Functions | sprig - GitHub Pages http://masterminds.github.io/sprig/strings.html
[10] tp.file - Templater - SilentVoid https://silentvoid13.github.io/Templater/internal-functions/internal-modules/file-module.html
