---
title: "Exercise Rep74: The Character Group of an Abelian Group"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 5, Ex. 5.5, printed p. 318, PDF p. 330"
created: 2026-08-27
---

# Exercise Rep74: The Character Group of an Abelian Group

## Problem Statement

> [!question] Exercise 5.5
> Prove that the one-dimensional characters of a group $G$ form a group under multiplication of functions. This group is called the character group of $G$, and is often denoted by $\widehat G$. Prove that if $G$ is abelian, then $|\widehat G|=|G|$ and $\widehat G\cong G$.

## Hints

> [!hint]- Hint 1
> Reduce a finite abelian group to cyclic factors.

## Solution

> [!success]- Solution
> Pointwise multiplication preserves homomorphisms $G\to\mathbb C^\times$; the identity is the trivial character and the inverse is $\chi^{-1}(g)=\chi(g)^{-1}$. Thus they form $\widehat G$.
>
> If $G\cong C_{n_1}\times\cdots\times C_{n_r}$, a character is determined independently on the generators, with $n_j$ choices on the $j$th factor. Hence
>
> $$
> \widehat G\cong\widehat{C_{n_1}}\times\cdots\times\widehat{C_{n_r}}
> \cong C_{n_1}\times\cdots\times C_{n_r}\cong G,
> $$
>
> and $|\widehat G|=|G|$. The isomorphism is not canonical because it depends on choices of generators and roots of unity. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** [S1, Ch. 10, §5, Ex. 5.5, printed p. 318, PDF p. 330].

