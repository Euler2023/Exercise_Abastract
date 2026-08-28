---
title: "Exercise G306: Centralizer and Conjugacy Class of a Long Cycle"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - symmetric-groups
  - conjugacy
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 36, printed p. 78, PDF p. 93"
created: 2026-08-28
---

# Exercise G306: Centralizer and Conjugacy Class of a Long Cycle

## Problem Statement

> [!question] Exercise 36
> Let $\sigma=(1\,2\,3\,\dots\,n)\in S_n$. Show that the conjugacy class of $\sigma$ has $(n-1)!$ elements and that its centralizer is the cyclic group $\langle\sigma\rangle$.

## Hints

> [!hint]- Hint 1
> A permutation commuting with $\sigma$ is determined by where it sends $1$.

## Solution

> [!success]- Solution
> If $\gamma\sigma=\sigma\gamma$ and $\gamma(1)=\sigma^k(1)$, then for every $j$,
>
> $$
> \gamma(\sigma^j(1))=\sigma^j(\gamma(1))=\sigma^{j+k}(1).
> $$
>
> Since $1,\sigma(1),\ldots,\sigma^{n-1}(1)$ exhaust the set, $\gamma=\sigma^k$. Conversely every power of $\sigma$ commutes with $\sigma$, so $C_{S_n}(\sigma)=\langle\sigma\rangle$ has order $n$. Orbit-stabilizer for the conjugation action now gives
>
> $$
> |\operatorname{Cl}_{S_n}(\sigma)|=[S_n:C_{S_n}(\sigma)]=\frac{n!}{n}=(n-1)!.
> $$

## Related Concepts

- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes and Centralizers]]

## Notes

- **Source status:** [S2, Ch. I, Ex. 36, printed p. 78, PDF p. 93]. The proof is independently derived.

