<%*
const topicLabels = [
  "Group Theory",
  "Ring Theory",
  "Field Theory",
  "Linear Algebra",
  "Module Theory",
  "Galois Theory",
  "Representation Theory",
  "Modular Forms",
  "Arithmetic Geometry"
];
const topicValues = [
  "group-theory",
  "ring-theory",
  "field-theory",
  "linear-algebra",
  "module-theory",
  "galois-theory",
  "representation-theory",
  "modular-forms",
  "arithmetic-geometry"
];
const topic = await tp.system.suggester(topicLabels, topicValues, true, "Select a topic");
-%>
---
title: "<% tp.file.title %>"
topic: <% topic %>
tags:
  - concept
  - definition
  - <% topic %>
created: <% tp.date.now("YYYY-MM-DD") %>
source:
status: not-started
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


- [[<% tp.file.cursor(1) %>]]
- [[<% tp.file.cursor(2) %>]]


## Exercises



```dataview
TABLE status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```
