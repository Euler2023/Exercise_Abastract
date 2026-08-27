---
title: "Exercise G191: Areas and Fundamental Domains of Wallpaper Patterns"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - crystallographic-groups
  - fundamental-domains
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Miscellaneous Ex. M.5, printed pp. 193–194, PDF pp. 205–206; Fig. 6.6.2, printed p. 174, PDF p. 186"
figures:
  - "[[Attachments/artin-algebra-2e-ch06-fig-6.6.2.png]]"
created: 2026-08-27
---

# Exercise G191: Areas and Fundamental Domains of Wallpaper Patterns

## Problem Statement

> [!question] Miscellaneous Exercise M.5
> (a) Find a way to determine the area of one hippo head in the first pattern of Figure 6.6.2 and of one fleur-de-lys in the pattern at the bottom.
>
> (b) Find two noncongruent fundamental domains for each symmetry group.
>
> (c) Prove that two fundamental domains for the same pattern are finitely equidecomposable.
>
> (d) Relate the area of a fundamental domain to the order of the point group.

## Source Figure

![[Attachments/artin-algebra-2e-ch06-fig-6.6.2.png]]

*Direct crop of Figure 6.6.2, containing the hippo and fleur-de-lys patterns: [S1, Ch. 6, printed p. 174, PDF p. 186].*

## Hints

> [!hint]- Hint 1
> Choose a translation parallelogram $P$ and count motifs inside it with boundary fractions.

> [!hint]- Hint 2
> Intersect one fundamental domain with the translates of the other. Boundedness and discreteness leave only finitely many nonempty pieces.

## Solution

> [!success]- Solution
> **(a)** Choose lattice vectors $a,b$ visible in the repeated pattern and form a half-open translation parallelogram $P$. If $N$ motifs occur in $P$, counting a boundary motif by the fraction lying in $P$, then
>
> $$
> \operatorname{area}(\text{one motif})=\frac{|\det(a,b)|}{N}.
> $$
>
> This applies without knowing the curved boundary analytically and gives both requested areas by measurement of $a,b$ and motif counting.
>
> **(b)** For the hippo pattern ($p1$), a parallelogram from $(a,b)$ and the sheared parallelogram from $(a,a+b)$ are noncongruent fundamental domains. For the fleur-de-lys pattern, take a triangular chamber bounded by neighboring mirror axes and rotation centers; cutting a small boundary triangle and moving it by the adjacent symmetry produces a noncongruent second domain.
>
> **(c)** Let $D,D'$ be half-open fundamental domains. The sets
>
> $$
> P_g=D\cap gD'
> $$
>
> partition $D$ up to boundaries. Because $D,D'$ are bounded and $G$ is discrete, only finitely many $g$ give nonempty $P_g$. Moving $P_g$ by $g^{-1}$ gives pieces that partition $D'$. Thus $D$ can be cut into finitely many pieces and reassembled as $D'$.
>
> **(d)** Let $L$ be the translation lattice and $\overline G$ the point group. A translation parallelogram has area $\operatorname{covol}(L)$ and contains $[G:L]=|\overline G|$ fundamental domains. Hence
>
> $$
> \operatorname{area}(D)=\frac{\operatorname{covol}(L)}{|\overline G|}.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Discrete Isometry Groups and Frieze Groups|Discrete Isometry Groups and Frieze Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[01 - Group Theory/Exercises/Exercise G148 - Point Groups of the Seventeen Wallpaper Patterns|Exercise G148]]

## Notes

- Boundary pieces are assigned by a half-open convention, so “exactly once” is literal away from a measure-zero boundary.
- **Source status:** The figure and all four parts were visually checked at the cited pages. The determinant-counting and equidecomposition proofs are independent.

