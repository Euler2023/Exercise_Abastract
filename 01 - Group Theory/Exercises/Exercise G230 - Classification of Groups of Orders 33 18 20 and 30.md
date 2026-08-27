---
title: "Exercise G230: Classification of Groups of Orders 33 18 20 and 30"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 7, Ex. 7.9, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G230: Classification of Groups of Orders 33 18 20 and 30

## Problem Statement

> [!question] Exercise 7.9
> Classify groups of orders **(a)** $33$, **(b)** $18$, **(c)** $20$, **(d)** $30$.

## Hints

> [!hint]- Hint 1
> Use normal Sylow subgroups and classify the resulting semidirect products.

## Solution

> [!success]- Solution
> Up to isomorphism: **(a)** only $C_{33}$. **(b)** $C_{18}$, $C_6\times C_3$, $D_9$, $S_3\times C_3$, and $(C_3\times C_3)\rtimes C_2$ with inversion on both factors. **(c)** $C_{20}$, $C_{10}\times C_2$, $D_{10}$, the dicyclic group $\operatorname{Dic}_5=\langle a,x:a^{10}=1,x^2=a^5,xax^{-1}=a^{-1}\rangle$, and the faithful affine group $C_5\rtimes C_4$. **(d)** $C_{30}$, $D_{15}$, $S_3\times C_5$, and $D_5\times C_3$.
>
> Sylow counting supplies a normal Hall subgroup in each case; homomorphisms into its automorphism group give exactly the actions listed. Actions differing by generators of the same cyclic image are isomorphic, so the list is exhaustive. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Semidirect-product actions]]

## Notes

- **Source status:** [S1, Ch. 7, §7, Ex. 7.9, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
