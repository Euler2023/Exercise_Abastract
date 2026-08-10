---
title: "Exercise G7: Left-Zero Law"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - foundations
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 1, Ex. 1.1"
created: 2026-08-10
---

# Exercise G7: Left-Zero Law

## Problem Statement

> [!question] Exercise
> Let $S$ be a set, and define a law of composition on $S$ by
> $$ab=a \qquad \text{for all }a,b\in S.$$
> Prove that this law is associative. For which sets $S$ does this law have an identity element?

## Hints

> [!hint]- Hint 1
> Compute $(ab)c$ and $a(bc)$ directly from the definition of the operation.

> [!hint]- Hint 2
> If $e$ is an identity, compare $ea$ as prescribed by the operation with the identity requirement $ea=a$.

## Solution

> [!success]- Solution
> ### Associativity
> For arbitrary $a,b,c\in S$, the defining rule gives
> $$(ab)c=ac=a$$
> and
> $$a(bc)=a.$$
> Hence
> $$(ab)c=a(bc),$$
> so the operation is associative.
>
> ### Existence of an Identity
> Suppose that $e\in S$ is a two-sided identity. Then for every $a\in S$, the identity property requires
> $$ea=a.$$
> On the other hand, the defining rule gives
> $$ea=e.$$
> Therefore $e=a$ for every $a\in S$. Thus $S$ can contain only the element $e$.
>
> Conversely, if $S=\{e\}$ is a singleton, then $ee=e$, so $e$ is an identity. The empty set has no identity because it contains no candidate identity element.
>
> Therefore this law has an identity if and only if $S$ is a singleton. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Binary Operations and Associativity|Binary Operations and Associativity]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

This operation is often called the **left-zero law**. The proof uses only the definition of associativity and identity.

**Source status:** Exercise statement from [S1, Ch. 2, Section 1, Ex. 1.1]. The solution above is proved directly in this note; no external theorem is used.
