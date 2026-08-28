---
title: "Exercise G319: Pullbacks of Abelian Groups"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
  - pullbacks
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 50, printed p. 81, PDF p. 96"
created: 2026-08-28
---

# Exercise G319: Pullbacks of Abelian Groups

## Problem Statement

> [!question] Exercise 50
> (a) For homomorphisms $f:X\to Z$ and $g:Y\to Z$ of abelian groups, show that the pullback is
>
> $$
> X\times_ZY=\{(x,y)\in X\oplus Y:f(x)=g(y)\},
> $$
>
> with the coordinate projections.
>
> (b) Show that a pullback of a surjective homomorphism is surjective.

## Hints

> [!hint]- Hint 1
> Verify the universal property. For (b), lift $g(y)$ through $f$.

## Solution

> [!success]- Solution
> **(a)** The displayed set is a subgroup of $X\oplus Y$, and its projections $p_X,p_Y$ satisfy $fp_X=gp_Y$. If $u:T\to X$ and $v:T\to Y$ satisfy $fu=gv$, then
>
> $$
> t\longmapsto(u(t),v(t))
> $$
>
> is the unique homomorphism $T\to X\times_ZY$ whose two projections are $u,v$. This is exactly the pullback universal property.
>
> **(b)** If $f:X\to Z$ is surjective, then the base-changed projection $p_Y:X\times_ZY\to Y$ is surjective: for any $y\in Y$, choose $x\in X$ with $f(x)=g(y)$; then $(x,y)$ belongs to the pullback and maps to $y$.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Method boundary:** The same construction works for modules over any ring.
- **Source status:** [S2, Ch. I, Ex. 50, printed p. 81, PDF p. 96]. The universal-property proof is independent.

