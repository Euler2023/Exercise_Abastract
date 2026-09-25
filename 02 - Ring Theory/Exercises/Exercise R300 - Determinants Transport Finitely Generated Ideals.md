---
title: "Exercise R300: Determinants Transport Finitely Generated Ideals"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 26, printed p. 548, PDF p. 563"
created: 2026-09-26
---

# Exercise R300: Determinants Transport Finitely Generated Ideals

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 26
> Let $A$ be a commutative ring, and $I=(x_1,\ldots,x_r)$ an ideal. Let $c_{ij}\in A$ and let $y_i=\sum_{j=1}^{r}c_{ij}x_j$. Let $I'=(y_1,\ldots,y_r)$. Let $D=\det(c_{ij})$. Show that $DI\subset I'$.

## Hints

> [!hint]- Hint 1: Write the generators as a column
> The defining equations say $y=Cx$ for $C=(c_{ij})$.

> [!hint]- Hint 2: Multiply by the adjugate
> Use $\operatorname{adj}(C)C=(\det C)I_r$ over a commutative ring.

## Solution

> [!success]- Solution
> Regard $x=(x_1,\ldots,x_r)^{\mathsf T}$ and $y=(y_1,\ldots,y_r)^{\mathsf T}$ as columns. Then $y=Cx$. Since $A$ is commutative, the adjugate identity is valid over $A$:
>
> $$
> \operatorname{adj}(C)y
> =\operatorname{adj}(C)Cx
> =Dx.
> $$
>
> The $i$-th coordinate of the left side is an $A$-linear combination of $y_1,\ldots,y_r$, hence lies in $I'$. Thus $Dx_i\in I'$ for every generator $x_i$ of $I$. Multiplying by arbitrary coefficients and summing yields $DI\subseteq I'$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Routing:** The requested conclusion is ideal containment over a commutative ring; the adjugate is the computational tool.
- **Source and proof status:** [S2, Ch. XIII, Ex. 26, printed p. 548, PDF p. 563]. The statement was checked against the page image; the proof is independent.

