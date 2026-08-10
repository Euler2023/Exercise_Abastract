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
const difficulty = await tp.system.suggester(
  ["Beginner", "Intermediate", "Advanced"],
  ["beginner", "intermediate", "advanced"],
  true,
  "Select a difficulty"
);
-%>
---
title: "<% tp.file.title %>"
topic: <% topic %>
difficulty: <% difficulty %>
status: not-started
tags:
  - exercise
  - <% topic %>
source:
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

## Problem Statement

> [!question] Exercise
> State the problem here.

## Hints

> [!hint]- Hint 1
> First hint here.

> [!hint]- Hint 2
> Second hint here.

## Solution

> [!success]- Solution
> ### Approach
> Describe the approach here.
>
> ### Proof
> Write the detailed proof here.
>
> $$
> \text{Mathematical expressions here}
> $$

## Related Concepts

- [[<% tp.file.cursor(1) %>]]
- [[<% tp.file.cursor(2) %>]]



## Notes

Additional notes or alternative approaches.
