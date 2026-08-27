---
title: "Exercise G226: No Simple Groups of Orders pq or p Squared q"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 7, Ex. 7.4, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G226: No Simple Groups of Orders pq or p Squared q

## Problem Statement

> [!question] Exercise 7.4
> Prove that no simple group has order **(a)** $pq$ or **(b)** $p^2q$, where $p,q$ are primes.

## Hints

> [!hint]- Hint 1
> Order the primes and use the Sylow congruences; isolate the exceptional order $12$.

## Solution

> [!success]- Solution
> If $p=q$, the orders in **(a)** and **(b)** are $p^2$ and $p^3$; a finite $p$-group has nontrivial center and is not simple (apart from order $p$, which does not occur here). Thus assume $p\ne q$.
>
> For **(a)** relabel so that $p<q$. Then $n_q\mid p$ and $n_q\equiv1\pmod q$, so $n_q=1$.
>
> For **(b)**, if $q<p$, then $n_p\mid q$ and $n_p\equiv1\pmod p$, hence $n_p=1$. If $p<q$, then $n_q\mid p^2$. Unless $n_q=1$, one must have $n_q=p^2$ and $q\mid p^2-1$; because $q>p$, this forces $q\mid p+1$, hence $(p,q)=(2,3)$ and $|G|=12$. In order $12$, if $n_3=4$, the eight nonidentity elements in the Sylow $3$-subgroups leave only three nonidentity elements for every Sylow $2$-subgroup, so that subgroup is unique and normal. Thus every case has a nontrivial proper normal subgroup. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §7, Ex. 7.4, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
