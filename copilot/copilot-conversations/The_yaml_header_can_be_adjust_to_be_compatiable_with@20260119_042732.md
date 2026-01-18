---
epoch: 1768768052498
modelKey: "gemini-3-flash-preview|google"
topic: "Templater YAML Header Compatibility"



tags:
  - copilot-conversation
---

**user**: The yaml header can be adjust to be compatiable with templater plugin?
[Context: Notes: Templates/Concept Template.md]
[Timestamp: 2026/01/19 04:27:32]

**ai**: Yes, you can adjust the YAML header in your [[Concept Template]] to be compatible with the Templater plugin. Templater uses `<% ... %>` syntax instead of the standard Obsidian `{{...}}` syntax.

Here is how you can update your template to work with Templater:

```markdown
---
title: "<% tp.file.title %>"
topic: 
tags:
  - concept
  - definition
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

## Definition

> [!info] Definition
> Formal definition here.

## Intuition

Intuitive explanation of the concept.

## Key Properties

1. Property 1
2. Property 2
3. Property 3

## Examples

> [!example] Example 1
> Description of example.

> [!example] Example 2
> Description of another example.

## Theorems

> [!abstract] Theorem
> **Statement:**
>
> **Proof:**

## Related Concepts

- [[Related Concept 1]]
- [[Related Concept 2]]

## Exercises

<dataview_block>
<query_type>dataview</query_type>
<original_query>
LIST
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
</original_query>
<executed_result>
No results
</executed_result>
</dataview_block>
```

### Key Changes Made:
- **Title**: Changed `{{title}}` to `<% tp.file.title %>`. This will automatically grab the name of the file you just created.
- **Date**: Changed `{{date}}` to `<% tp.date.now("YYYY-MM-DD") %>`. You can change the format inside the quotes (e.g., `"YYYY-MM-DD HH:mm"`) to suit your preference.
- **Header**: Updated the `# {{title}}` in the body to `# <% tp.file.title %>` as well.

### Pro Tip:
If you want Templater to prompt you for the **topic** when you create the note, you can change the topic line to:
`topic: <% tp.system.prompt("Enter the topic") %>`
[Timestamp: 2026/01/19 04:27:39]