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

| Topic                                                                  | Description                                       | Progress                                                                                                                                                                      |
| ---------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[01 - Group Theory/Group Theory Hub\|Group Theory]]                   | Groups, subgroups, homomorphisms, quotient groups | `$= dv.pages('"01 - Group Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"01 - Group Theory/Exercises"').length`                             |
| [[02 - Ring Theory/Ring Theory Hub\|Ring Theory]]                      | Rings, ideals, quotient rings, polynomial rings   | `$= dv.pages('"02 - Ring Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"02 - Ring Theory/Exercises"').length`                               |
| [[03 - Field Theory/Field Theory Hub\|Field Theory]]                   | Fields, field extensions, algebraic closures      | `$= dv.pages('"03 - Field Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"03 - Field Theory/Exercises"').length`                             |
| [[04 - Module Theory/Module Theory Hub\|Module Theory]]                | Modules, exact sequences, tensor products         | `$= dv.pages('"04 - Module Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"04 - Module Theory/Exercises"').length`                           |
| [[05 - Galois Theory/Galois Theory Hub\|Galois Theory]]                | Galois groups, solvability, fundamental theorem   | `$= dv.pages('"05 - Galois Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"05 - Galois Theory/Exercises"').length`                           |
| [[06 - Representation Theory/Representation Theory Hub\|Representation Theory]] | Vector spaces, linear maps, canonical forms       | `$= dv.pages('"06 - Representation Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"06 - Representation Theory/Exercises"').length` |

## Visual Maps

- [[Canvas/Abstract Algebra Overview.canvas|Abstract Algebra Overview Canvas]]
- [[Canvas/Topic Relationships.canvas|Topic Relationships Canvas]]

## Exercise Tracker

![[Exercise Tracker.base]]

## Recent Activity

```dataview
TABLE status, difficulty, topic
FROM "01 - Group Theory/Exercises" OR "02 - Ring Theory/Exercises" OR "03 - Field Theory/Exercises" OR "04 - Module Theory/Exercises" OR "05 - Galois Theory/Exercises" OR "06 - Representation Theory/Exercises"
SORT file.mtime DESC
LIMIT 10
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
