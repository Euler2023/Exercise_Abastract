---
title: "Exercise LA472: A Fundamental Domain for Coordinate Permutations"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 30, printed p. 600, PDF p. 615"
created: 2026-09-29
---

# Exercise LA472: A Fundamental Domain for Coordinate Permutations

## Problem Statement

> [!question] Lang XV.30
> Let $W$ be the group of permutations of the diagonal elements in the vector space $\mathfrak a$ of diagonal matrices. Show that $\mathfrak a_{\ge0}$ is a fundamental domain for the action of $W$ on $\mathfrak a$ (i.e., given $H\in\mathfrak a$, there exists a unique $H^+\ge0$ such that $H^+=wH$ for some $w\in W$).

## Hints

> [!hint]- Hint 1
> The condition $H\ge0$ means its diagonal entries are weakly decreasing.

> [!hint]- Hint 2
> Two weakly decreasing finite lists with the same multiset of entries are equal. The permutation arranging a list need not be unique.

## Solution

> [!success]- Independent derivation
> The space $\mathfrak a$ and the inequalities are those of Exercises 26 and 28: for $H=\operatorname{diag}(h_1,\ldots,h_n)$, we have $\sum_i h_i=0$ and
> $$
> H\ge0\quad\Longleftrightarrow\quad
> h_1\ge h_2\ge\cdots\ge h_n.
> $$
> Choose a permutation that lists the entries of $H$ in weakly decreasing order, and let $H^+$ be the resulting diagonal matrix. A permutation preserves the sum of entries, so $H^+\in\mathfrak a$, and its ordering gives $H^+\ge0$.
>
> Suppose $H_1^+$ and $H_2^+$ are two such representatives in the same orbit. Their diagonal lists have the same multiset of real numbers. Their first entries must both equal the largest member of that multiset. Remove one occurrence of this number and repeat with the remaining lists. Induction on the length gives equality of every entry, so $H_1^+=H_2^+$.
>
> Hence each orbit meets $\mathfrak a_{\ge0}$ in exactly one point, which is precisely the source's stated meaning of fundamental domain.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]

## Notes

- Source: [S2, Ch. XV, Exercise 30, printed p. 600, PDF p. 615], visually verified. The proof is an independent ordering argument.
- The unique object is $H^+$, not necessarily the permutation $w$. Repeated diagonal entries give a nontrivial stabilizer: the permutations within each equal-entry block.
- The primary computation is ordering diagonal coordinates and comparing the consecutive differences from [[04 - Linear Algebra and Modules/Exercises/Exercise LA468 - Coordinate Differences and Dual Bases on Trace Zero Diagonals|Exercise LA468]]. The group-action link records the orbit interpretation.
