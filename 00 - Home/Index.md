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
| [[04 - Linear Algebra and Modules/Linear Algebra and Modules Hub\|Linear Algebra & Modules]]                | Vector spaces, modules, linear maps         | `$= dv.pages('"04 - Linear Algebra and Modules/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"04 - Linear Algebra and Modules/Exercises"').length`                           |
| [[05 - Galois Theory/Galois Theory Hub\|Galois Theory]]                | Galois groups, solvability, fundamental theorem   | `$= dv.pages('"05 - Galois Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"05 - Galois Theory/Exercises"').length`                           |
| [[06 - Representation Theory/Representation Theory Hub\|Representation Theory]] | Vector spaces, linear maps, canonical forms       | `$= dv.pages('"06 - Representation Theory/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"06 - Representation Theory/Exercises"').length` |
| [[07 - Modular Forms/Modular Forms Hub\|Modular Forms]]                | Modular forms, L-functions, elliptic curves       | `$= dv.pages('"07 - Modular Forms/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"07 - Modular Forms/Exercises"').length` |
| [[08 - Arithmetic Geometry/Arithmetic Geometry Hub\|Arithmetic Geometry]] | Elliptic curves, rational points, schemes, BSD conjecture | `$= dv.pages('"08 - Arithmetic Geometry/Exercises"').where(p => p.status == "completed").length` / `$= dv.pages('"08 - Arithmetic Geometry/Exercises"').length` |

## Visual Maps

- [[Canvas/Abstract Algebra Overview.canvas|Abstract Algebra Overview Canvas]]
- [[Canvas/Topic Relationships.canvas|Topic Relationships Canvas]]

## Exercise Tracker

![[Exercise Tracker.base]]

## Recent Activity

```dataview
TABLE status, difficulty, topic
FROM "01 - Group Theory/Exercises" OR "02 - Ring Theory/Exercises" OR "03 - Field Theory/Exercises" OR "04 - Linear Algebra and Modules/Exercises" OR "05 - Galois Theory/Exercises" OR "06 - Representation Theory/Exercises" OR "07 - Modular Forms/Exercises" OR "08 - Arithmetic Geometry/Exercises"
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
