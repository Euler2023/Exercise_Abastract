---
title: Abstract Algebra Exercises
aliases:
  - Home
  - Dashboard
cssclasses:
  - dashboard
tags:
  - index
  - abstract-algebra
created: 2025-01-19
---

# Abstract Algebra Exercises

Welcome to the **Abstract Algebra Exercises** vault. This collection covers fundamental topics in abstract algebra with exercises, proofs, and interconnected concepts.

## Quick Navigation

```dataview
TABLE WITHOUT ID
  link(
    key + "/" + regexreplace(key, "^[0-9]+ - ", "") + " Hub",
    regexreplace(key, "^[0-9]+ - ", "")
  ) AS Topic,
  length(filter(rows.status, (s) => s = "completed")) AS Completed,
  length(rows) AS Total,
  round(
    100 * length(filter(rows.status, (s) => s = "completed")) / length(rows),
    1
  ) + "%" AS Progress
FROM ""
FLATTEN regexreplace(file.folder, "/Exercises.*$", "") AS TopicFolder
WHERE regexmatch("^[0-9]{2} - .+/Exercises(?:/.*)?$", file.folder)
GROUP BY TopicFolder
SORT key ASC
```

### Overall Exercise Statistics

```dataview
TABLE WITHOUT ID
  length(rows) AS Total,
  length(filter(rows.status, (s) => s = "not-started")) AS "Not Started",
  length(filter(rows.status, (s) => s = "in-progress")) AS "In Progress",
  length(filter(rows.status, (s) => s = "completed")) AS Completed,
  length(rows)
    - length(filter(rows.status, (s) => s = "not-started"))
    - length(filter(rows.status, (s) => s = "in-progress"))
    - length(filter(rows.status, (s) => s = "completed")) AS "Needs Review",
  round(
    100 * length(filter(rows.status, (s) => s = "completed")) / length(rows),
    1
  ) + "%" AS "Completion Rate"
FROM ""
WHERE regexmatch("^[0-9]{2} - .+/Exercises(?:/.*)?$", file.folder)
GROUP BY true
```

## Visual Maps

- [[Canvas/Abstract Algebra Overview.canvas|Abstract Algebra Overview Canvas]]
- [[Canvas/Topic Relationships.canvas|Topic Relationships Canvas]]

## Exercise Tracker

![[Exercise Tracker.base]]

## Study Progress

![[Study Progress.base]]

## Recent Activity

```dataview
TABLE status, difficulty, topic
FROM "01 - Group Theory/Exercises" OR "02 - Ring Theory/Exercises" OR "03 - Field Theory/Exercises" OR "04 - Linear Algebra and Modules/Exercises" OR "05 - Galois Theory/Exercises" OR "06 - Representation Theory/Exercises" OR "07 - Modular Forms/Exercises" OR "08 - Arithmetic Geometry/Exercises"
SORT file.mtime DESC
LIMIT 20
```

## Study Resources

> [!tip] Recommended Textbooks
> - Dummit & Foote - *Abstract Algebra*
> - Lang - *Algebra*
> - Artin - *Algebra*
> - Hungerford - *Algebra*

## Tags Overview

```dataview
TABLE length(rows) AS "Count"
FROM #exercise
GROUP BY difficulty
```
