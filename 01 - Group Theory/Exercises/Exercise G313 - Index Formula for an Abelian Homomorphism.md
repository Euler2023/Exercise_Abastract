---
title: "Exercise G313: Index Formula for an Abelian Homomorphism"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
  - exact-sequences
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 44, printed p. 79, PDF p. 94"
created: 2026-08-28
---

# Exercise G313: Index Formula for an Abelian Homomorphism

## Problem Statement

> [!question] Exercise 44
> Let $f:A\to A'$ be a homomorphism of abelian groups and let $B\le A$. Write $A^f,A_f$ for the image and kernel of $f$ on $A$, and similarly $B^f,B_f$ for its image and kernel on $B$. Show that
>
> $$
> (A:B)=(A^f:B^f)(A_f:B_f),
> $$
>
> in the sense that if two of these three indices are finite, so is the third, and the equality holds.

## Hints

> [!hint]- Hint 1
> Map $A/B$ onto $A^f/B^f$ and identify the kernel.

## Solution

> [!success]- Solution
> Define
>
> $$
> \bar f:A/B\longrightarrow A^f/B^f,
> \qquad a+B\longmapsto f(a)+B^f.
> $$
>
> This map is well defined and surjective. If $f(a)\in B^f$, choose $b\in B$ with $f(a)=f(b)$. Then $a-b\in A_f$ and $a+B=(a-b)+B$. Thus the kernel is the image of $A_f$ in $A/B$, namely $A_f/B_f$. We obtain a short exact sequence
>
> $$
> 0\longrightarrow A_f/B_f
> \longrightarrow A/B
> \longrightarrow A^f/B^f
> \longrightarrow0.
> $$
>
> In a short exact sequence, if two of the three groups are finite then so is the third, and their cardinalities multiply. Translating those cardinalities into indices gives the asserted formula.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Notation:** Superscript $f$ denotes image and subscript $f$ denotes kernel, exactly as in the source.
- **Source status:** [S2, Ch. I, Ex. 44, printed p. 79, PDF p. 94]. The short-exact-sequence proof is independent.

