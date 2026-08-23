---
title: "Exercise LA158: One-Sided Inverses, Rank, and Linear Maps"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - one-sided-inverses
  - rank
  - injectivity
  - surjectivity
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, Miscellaneous Problems, Ex. M.5, printed p. 130, PDF p. 142"
created: 2026-08-23
---

# Exercise LA158: One-Sided Inverses, Rank, and Linear Maps

## Problem Statement

> [!question] Exercise M.5
> Let $\varphi:F^n\to F^m$ be left multiplication by an $m\times n$ matrix $A$.
>
> (a) Prove equivalence of: $A$ has a right inverse $B$ with $AB=I$; $\varphi$ is surjective; $\operatorname{rank}A=m$.
>
> (b) Prove equivalence of: $A$ has a left inverse $B$ with $BA=I$; $\varphi$ is injective; $\operatorname{rank}A=n$.

## Hints

> [!hint]- Hint 1
> A right inverse chooses a preimage of each standard basis vector. For a left inverse, invert $\varphi$ on its image and extend linearly to the codomain.

## Solution

> [!success]- Solution
> (a) If $AB=I_m$, then every $y$ equals $A(By)$, so $\varphi$ is onto. Surjectivity is equivalent to $\dim\operatorname{im}A=m$. Conversely, if $A$ is onto, choose $b_j\in F^n$ with $Ab_j=e_j$ and use these as the columns of $B$; then $AB=I_m$.
>
> (b) If $BA=I_n$, then $Ax=0$ implies $x=BAx=0$, so $A$ is injective. Rank-nullity makes injectivity equivalent to rank $n$. Conversely, if $A$ is injective, define $B$ on $\operatorname{im}A$ by $B(Ax)=x$, extend a basis of $\operatorname{im}A$ to one of $F^m$, and define $B$ arbitrarily (for example, as zero) on the added basis vectors. Then $BA=I_n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Rank and Nullity|Rank and Nullity]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA32 - Left Inverses of a Rectangular Matrix|Exercise LA32]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA63 - What One Sided Inverses Prove about Linear Systems|Exercise LA63]]

## Notes

- **Deduplication:** LA32 and LA63 treat related one-sided-inverse consequences, but neither contains this three-way equivalence theorem; M.5 is therefore archived separately with cross-links.
- **Source status:** [S1, Ch. 4, Misc. Problems, Ex. M.5, printed p. 130, PDF p. 142]; independent proof.

