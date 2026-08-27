---
title: "Exercise G150: Point Groups of Four Wallpaper Patterns"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - point-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 6, Ex. 6.3, printed pp. 189–190, PDF pp. 201–202"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-ex-6.3-patterns.png]]"
  - "[[Attachments/artin-algebra-2e-ch06-fig-6.6.2.png]]"
created: 2026-08-27
---

# Exercise G150: Point Groups of Four Wallpaper Patterns

## Problem Statement

> [!question] Exercise 6.3
> With each of the patterns shown, determine the point group and find a pattern with the same type of symmetry in Table 6.6.2.

## Source Figures

![[Attachments/artin-algebra-2e-ch06-ex-6.3-patterns.png]]

*Direct crop of the four patterns in Exercise 6.3. Source: [S1, Ch. 6, §6, Ex. 6.3, printed p. 190, PDF p. 202].*

## Hints

> [!hint]- Hint 1
> Label the four patterns upper-left, upper-right, lower-left, and lower-right. Find their largest rotation orders before testing mirrors and glides.

> [!hint]- Hint 2
> Compare them respectively with the $p4$, $p4g$, $p6m$, and $pm$ rows of the seventeen-pattern figure.

## Solution

> [!success]- Solution
> Inspection of the rotational centers and axes gives:
>
> | pattern | largest rotation | orientation-reversing symmetry | point group | matching type in Fig. 6.6.2 |
> |---|---:|---|---|---|
> | upper-left interlacing | order $4$ | none | $C_4$ | second row, middle ($p4$) |
> | upper-right basket weave | order $4$ | reflections/glides | $D_4$ | fourth row, right ($p4g$) |
> | lower-left star pattern | order $6$ | mirror axes | $D_6$ | fifth row, right ($p6m$) |
> | lower-right fish pattern | no nontrivial rotation | horizontal mirrors | $D_1$ | third row, left ($pm$) |
>
> To see that no larger point group occurs, note that the visible motif orientation rules out the missing mirrors in the upper-left pattern; the upper-right pattern has quarter-turns but no additional directions beyond the four axes of $D_4$; crystallographic restriction caps the lower-left rotation order at $6$; and every fish keeps its left-right orientation, ruling out a half-turn. Thus the listed point groups are exact. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[01 - Group Theory/Concepts/Orthogonal Transformations of the Plane|Orthogonal Transformations of the Plane]]
- [[01 - Group Theory/Exercises/Exercise G148 - Point Groups of the Seventeen Wallpaper Patterns|Exercise G148]]

## Notes

- **Source status:** Both the separate exercise figure and Figure 6.6.2 were visually checked at their source pages. The point-group identifications are independent visual deductions.

