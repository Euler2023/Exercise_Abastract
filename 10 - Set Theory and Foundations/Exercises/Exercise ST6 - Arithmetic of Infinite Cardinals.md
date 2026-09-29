---
title: "Exercise ST6: Arithmetic of Infinite Cardinals"
topic: set-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 8, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise ST6: Arithmetic of Infinite Cardinals

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 8
> Let $A$ be an infinite set and abbreviate $\operatorname{card}(A)$ by $\alpha$. If $B$ is an infinite set, abbreviate $\operatorname{card}(B)$ by $\beta$. Define $\alpha\beta$ to be $\operatorname{card}(A\times B)$. Let $B'$ be a set disjoint from $A$ such that $\operatorname{card}(B)=\operatorname{card}(B')$. Define $\alpha+\beta$ to be $\operatorname{card}(A\cup B')$. Denote by $B^A$ the set of all maps of $A$ into $B$, and denote $\operatorname{card}(B^A)$ by $\beta^\alpha$. Let $C$ be an infinite set and abbreviate $\operatorname{card}(C)$ by $\gamma$. Prove the following statements:
>
> (a) $\alpha(\beta+\gamma)=\alpha\beta+\alpha\gamma$.
>
> (b) $\alpha\beta=\beta\alpha$.
>
> (c) $\alpha^{\beta+\gamma}=\alpha^\beta\alpha^\gamma$.

## Hints

> [!hint]- Hint 1: Use disjoint tagged copies
> Represent $\beta+\gamma$ by $B\sqcup C$, even when the original sets overlap.

> [!hint]- Hint 2: Build the maps
> Distribute the tag for (a), swap coordinates for (b), and restrict and glue functions for (c).

## Solution

> [!success]- Complete independent derivation
> Use disjoint tagged copies for $B\sqcup C$. Bijections between representatives induce bijections on products and function sets, as in Exercise 7.
>
> For (a), define
>
> $$
> A\times(B\sqcup C)\to(A\times B)\sqcup(A\times C)
> $$
>
> by $(a,(0,b))\mapsto(0,(a,b))$ and $(a,(1,c))\mapsto(1,(a,c))$. Moving the tag back inside the pair gives the inverse, proving the first equality.
>
> For (b), $(a,b)\mapsto(b,a)$ is a bijection $A\times B\to B\times A$ with inverse the coordinate swap.
>
> For (c), restriction gives
>
> $$
> A^{B\sqcup C}\to A^B\times A^C,\qquad
> f\mapsto(f|_B,f|_C).
> $$
>
> Two functions on the disjoint summands glue uniquely to a function on the union, providing the inverse. Thus the cardinalities are equal. These are explicit set bijections, so the arguments also apply to finite and empty sets; infinity was unnecessary.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]
- [[10 - Set Theory and Foundations/Exercises/Exercise ST5 - Cardinality of Function Sets under Bijections]]

## Notes

All definitions and three identities checked at printed p. 893 / PDF p. 908. The independent proof uses tagged unions to implement the source's disjoint-copy convention. No simplifying identity for products of infinite cardinals is needed.
