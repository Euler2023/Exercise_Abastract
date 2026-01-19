# CLAUDE.md - Project Guidelines

This is an Obsidian vault for Abstract Algebra exercises and related topics.

## Project Rules

### 1. Changelog Updates (REQUIRED)
**Every time you make changes to this project, you MUST update the changelog in `README.md`.**

Format:
```markdown
## Changelog

### [YYYY-MM-DD]
- Added: description of new content
- Updated: description of modifications
- Fixed: description of fixes
```

### 2. Significant Updates Detection

**When making significant changes, you MUST also update these files:**

#### What counts as a "significant update":
- Adding a new chapter/topic folder
- Adding 5+ concept files or exercises
- Restructuring existing folders
- Changing topic names or paths
- Adding major new features (e.g., new theorem, major concept)

#### Required updates for significant changes:

| Change Type | Update README.md | Update Canvas/ | Update Index.md |
|-------------|------------------|----------------|-----------------|
| New chapter | Topics + Structure sections | All 3 canvas files | Navigation table + dataview |
| New topic area | Topics section | Overview + Relationships | Navigation table |
| Major restructure | Structure section | All affected canvases | Navigation table |
| 5+ new concepts | - | Topic Relationships | - |

#### Canvas files to update (`Canvas/`):
1. **Abstract Algebra Overview.canvas** - Add new topic nodes, connect to existing topics
2. **Topic Relationships.canvas** - Add concept groups with internal hierarchy
3. **Study Roadmap.canvas** - Add to appropriate learning phase

#### README.md sections to update:
1. **Topics Covered** - Add new topic with brief description
2. **Structure** - Update folder tree if structure changes
3. **Changelog** - Always add dated entry (required for ALL changes)

### 3. File Organization

```
exercise_abstract/
├── 00 - Home/           # Index, base files, trackers
├── 01 - Group Theory/   # Concepts/ and Exercises/
├── 02 - Ring Theory/    # Concepts/ and Exercises/
├── 03 - Field Theory/   # Concepts/ and Exercises/
├── 04 - Linear Algebra and Modules/  # Concepts/ and Exercises/
├── 05 - Galois Theory/  # Concepts/ and Exercises/
├── 06 - Representation Theory/  # Concepts/ and Exercises/
├── 07 - Modular Forms/  # Concepts/ and Exercises/
├── 08 - Arithmetic Geometry/  # Concepts/ and Exercises/
├── Canvas/              # .canvas files for visual maps
├── Templates/           # Templater templates
└── Attachments/         # Images and files
```

### 4. Content Standards

#### Exercise Files
- Location: `[Topic]/Exercises/`
- Naming: `Exercise [CODE][NUM] - [Short Title].md`
- Required frontmatter:
  ```yaml
  title: "Exercise [CODE][NUM]: [Title]"
  topic: [topic-name]
  difficulty: beginner | intermediate | advanced
  status: not-started | in-progress | completed
  tags:
    - exercise
    - [topic-tag]
  source: "[Textbook/Source]"
  created: YYYY-MM-DD
  ```
- Required sections: Problem Statement, Hints (collapsible), Solution (collapsible), Related Concepts

#### Concept Files
- Location: `[Topic]/Concepts/`
- Required frontmatter:
  ```yaml
  title: [Concept Name]
  topic: [topic-name]
  tags:
    - concept
    - definition
    - [topic-tag]
  created: YYYY-MM-DD
  ```
- Required sections: Definition (callout), Key Properties, Examples, Related Concepts

#### Hub Files
- One per topic folder: `[Topic] Hub.md`
- Include: Overview, concept links, dataview exercise queries, key theorems

### 5. Obsidian Syntax

#### Use These Features
- **Callouts**: `> [!info]`, `> [!abstract]`, `> [!example]`, `> [!tip]`, `> [!warning]`
- **Collapsible**: `> [!hint]-` (collapsed), `> [!success]-` (collapsed solutions)
- **LaTeX**: `$inline$` and `$$display$$`
- **Wikilinks**: `[[Note Name]]`, `[[Note Name|Display Text]]`
- **Dataview**: For dynamic queries in hub pages
- **Mermaid**: For diagrams in concept notes

#### Topic Tags
| Topic | Tag |
|-------|-----|
| Group Theory | `group-theory` |
| Ring Theory | `ring-theory` |
| Field Theory | `field-theory` |
| Linear Algebra & Modules | `linear-algebra`, `module-theory` |
| Galois Theory | `galois-theory` |
| Representation Theory | `representation-theory` |
| Modular Forms | `modular-forms` |
| Arithmetic Geometry | `arithmetic-geometry` |

### 6. Base Files (.base)

Base files use YAML format for Obsidian Bases. When creating/editing:
- Filters use expressions like `file.hasTag("exercise")`
- Formulas define computed properties
- Views can be `table`, `cards`, `list`, or `map`

### 7. Canvas Files (.canvas)

Canvas files use JSON format. When creating:
- Generate unique 16-character hex IDs for nodes/edges
- Use color presets "1"-"6" or hex colors
- Position nodes with reasonable spacing (50-100px apart)

### 8. Exercise Codes

| Topic | Code |
|-------|------|
| Group Theory | G |
| Ring Theory | R |
| Field Theory | F |
| Linear Algebra & Modules | M, LA |
| Galois Theory | Gal |
| Representation Theory | Rep |
| Modular Forms | MF |
| Arithmetic Geometry | AG |

### 9. When Adding New Topics

1. Create folder with `Concepts/` and `Exercises/` subfolders
2. Create `[Topic] Hub.md` with standard structure
3. Update `00 - Home/Index.md` navigation table
4. Update relevant Canvas files
5. Add topic to this guidelines file
6. **Update changelog in README.md**

## Quick Reference

### New Exercise Checklist
- [ ] Correct folder location
- [ ] Proper frontmatter with all required fields
- [ ] Problem in `> [!question]` callout
- [ ] Hints in collapsible `> [!hint]-` callouts
- [ ] Solution in collapsible `> [!success]-` callout
- [ ] Related concepts linked
- [ ] **Changelog updated**

### New Concept Checklist
- [ ] Correct folder location
- [ ] Proper frontmatter
- [ ] Definition in `> [!info]` callout
- [ ] Examples in `> [!example]` callouts
- [ ] Related concepts linked
- [ ] Hub file updated
- [ ] **Changelog updated**
