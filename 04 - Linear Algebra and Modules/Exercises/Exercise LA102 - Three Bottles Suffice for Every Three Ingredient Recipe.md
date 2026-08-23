---
title: "Exercise LA102: Three Bottles Suffice for Every Three-Ingredient Recipe"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - convex-combinations
  - affine-dimension
  - mathematical-diversion
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Miscellaneous Problems, Ex. M.6, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise LA102: Three Bottles Suffice for Every Three-Ingredient Recipe

## Problem Statement

> [!question] Exercise M.6
> A hot-sauce recipe uses only chilis, vinegar, and salt, besides water. What is the smallest number of bottles that must be kept so that every such recipe can be obtained by mixing the available sauces?

## Hints

> [!hint]- Hint 1
> Represent a recipe by its three nonnegative ingredient proportions, normalized to sum to $1$.

> [!hint]- Hint 2
> Mixing bottles forms convex combinations.

## Solution

> [!success]- Solution
> Normalized recipes form the two-dimensional simplex
> 
> $$
> \Delta^2=\{(x,y,z)\in\mathbb R_{≥0}^3:x+y+z=1\}.
> $$
> 
> Recipes obtainable from $k$ fixed bottles form the convex hull of their $k$ recipe points. The convex hull of at most two points is a point or a line segment, so it cannot fill the two-dimensional simplex. Thus at least three bottles are necessary.
> 
> Three suffice: keep the three vertex recipes $(1,0,0)$, $(0,1,0)$, and $(0,0,1)$. Any recipe $(x,y,z)$ is their convex combination with coefficients $x,y,z$. Therefore the minimum is
> 
> $$
> 3.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, Misc. Problems, Ex. M.6, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Modeling assumption:** Ingredient quantities are normalized to proportions; adding arbitrary water afterward does not change the three-ingredient convex-combination argument.
