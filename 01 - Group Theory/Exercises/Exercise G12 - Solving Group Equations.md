---
title: "Exercise G12: Solving Group Equations"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - equations
  - proof
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 2, Ex. 2.3"
created: 2026-08-10
---

# Exercise G12: Solving Group Equations

## Problem Statement

> [!question] Exercise
> Let $x,y,z,w$ be elements of a group $G$.
>
> **(a)** Solve for $y$, given that
> $$xyz^{-1}w=e.$$
>
> **(b)** Suppose that $xyz=e$. Does it follow that $yzx=e$? Does it follow that $zyx=e$?

## Hints

> [!hint]- Hint 1
> In part (a), multiply on the left by $x^{-1}$ and on the right by $w^{-1}$ and then by $z$. Preserve the order of all factors.

> [!hint]- Hint 2
> A cyclic rearrangement can be obtained by conjugating the equation $xyz=e$.

> [!hint]- Hint 3
> To test the reversed order, use two noncommuting transpositions in $S_3$.

## Solution

> [!success]- Solution
> ### (a) Solving for $y$
> Starting from
> $$xyz^{-1}w=e,$$
> multiply on the left by $x^{-1}$:
> $$yz^{-1}w=x^{-1}.$$
> Next multiply on the right by $w^{-1}$ and then by $z$:
> $$y=x^{-1}w^{-1}z.$$
> Substitution verifies the result:
> $$x(x^{-1}w^{-1}z)z^{-1}w=w^{-1}w=e.$$
>
> ### (b) Reordering the Factors
> If $xyz=e$, then conjugating by $x$ gives
> $$x^{-1}(xyz)x=yzx=e.$$
> Therefore $yzx=e$ always follows. A second cyclic shift also gives $zxy=e$.
>
> In contrast, $zyx=e$ need not follow. In $S_3$, using right-to-left composition, take
> $$x=(12),\qquad y=(23),\qquad z=(xy)^{-1}=yx=(132).$$
> By construction,
> $$xyz=xy(xy)^{-1}=e.$$
> However,
> $$zyx=(yx)(yx)=(132)^2=(123)\ne e.$$
> Thus cyclic rearrangements preserve the equation, but reversing the order does not in a general non-abelian group. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Exercises/Exercise G10 - Multiplication Table of S3|Exercise G10: Multiplication Table of S3]]

## Notes

The expression $x^{-1}w^{-1}z$ cannot be reordered unless additional commutativity hypotheses are given.

**Source status:** Exercise statement from [S1, Ch. 2, Section 2, Ex. 2.3]. The negative answer in part (b) is proved by an explicit counterexample in $S_3$.
