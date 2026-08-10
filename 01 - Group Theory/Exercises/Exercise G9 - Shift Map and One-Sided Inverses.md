---
title: "Exercise G9: Shift Map and One-Sided Inverses"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - functions
  - inverses
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 1, Ex. 1.3"
created: 2026-08-10
---

# Exercise G9: Shift Map and One-Sided Inverses

## Problem Statement

> [!question] Exercise
> Let $\mathbb N$ denote the natural numbers, and let $s:\mathbb N\to\mathbb N$ be the shift map
> $$s(n)=n+1.$$
> Prove that $s$ has no right inverse but has infinitely many left inverses.

We use the convention that a right inverse $r$ satisfies $s\circ r=\operatorname{id}_{\mathbb N}$, while a left inverse $\ell$ satisfies $\ell\circ s=\operatorname{id}_{\mathbb N}$.

## Hints

> [!hint]- Hint 1
> The shift map misses the least natural number, so it is not surjective. What would a right inverse imply about surjectivity?

> [!hint]- Hint 2
> A left inverse is forced on the image of $s$, but its value at the one point outside that image can be chosen freely.

## Solution

> [!success]- Solution
> Take $\mathbb N=\{0,1,2,\ldots\}$.
>
> ### No Right Inverse
> Suppose that a map $r:\mathbb N\to\mathbb N$ satisfied
> $$s\circ r=\operatorname{id}_{\mathbb N}.$$
> Evaluating at $0$ would give
> $$s(r(0))=0.$$
> But every value of $s$ is at least $1$, so this is impossible. Therefore $s$ has no right inverse.
>
> ### Infinitely Many Left Inverses
> For each $k\in\mathbb N$, define $\ell_k:\mathbb N\to\mathbb N$ by
> $$
> \ell_k(n)=
> \begin{cases}
> k,&n=0,\\
> n-1,&n\ge 1.
> \end{cases}
> $$
> Then for every $n\in\mathbb N$,
> $$(\ell_k\circ s)(n)=\ell_k(n+1)=n.$$
> Hence
> $$\ell_k\circ s=\operatorname{id}_{\mathbb N},$$
> so every $\ell_k$ is a left inverse of $s$. The maps $\ell_k$ are pairwise distinct because they have different values at $0$. Thus $s$ has infinitely many left inverses. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Binary Operations and Associativity|Binary Operations and Associativity]]
- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

If one uses $\mathbb N=\{1,2,3,\ldots\}$ instead, replace the exceptional input $0$ by $1$: choose $\ell_k(1)=k$ freely and set $\ell_k(n)=n-1$ for $n\ge2$.

This example illustrates the general facts that a map has a left inverse only if it is injective and a right inverse only if it is surjective.

**Source status:** Exercise statement from [S1, Ch. 2, Section 1, Ex. 1.3]. The explicit family $\{\ell_k\}$ proves the claim without an external result.
