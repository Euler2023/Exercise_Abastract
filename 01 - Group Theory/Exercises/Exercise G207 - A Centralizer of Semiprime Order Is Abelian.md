---
title: "Exercise G207: A Centralizer of Semiprime Order Is Abelian"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 4, Ex. 4.9, printed p. 223, PDF p. 235"
created: 2026-08-27
---

# Exercise G207: A Centralizer of Semiprime Order Is Abelian

## Problem Statement

> [!question] Exercise 4.9
> Let $x$ be an element of a group $G$, not the identity, whose centralizer $Z(x)$ has order $pq$, where $p$ and $q$ are primes. Prove that $Z(x)$ is abelian.

## Hints

> [!hint]- Hint 1
> The element $x$ lies in the center of its own centralizer.

## Solution

> [!success]- Solution
> Put $C=Z_G(x)$. Since every element of $C$ commutes with $x$, the nonidentity subgroup $\langle x\rangle$ lies in $Z(C)$. Its order divides $pq$. If $|x|=pq$, then $C=\langle x\rangle$ is cyclic. If $|x|=p$ or $q$, then $C/\langle x\rangle$ has prime order and is cyclic. Since $\langle x\rangle\subseteq Z(C)$, the quotient $C/Z(C)$ is a quotient of the cyclic group $C/\langle x\rangle$, hence is cyclic. Exercise 3.2 then implies that $C$ is abelian. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes Centralizers and the Class Equation]]
- [[01 - Group Theory/Concepts/Abelian Groups|Center and Abelian Groups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §4, Ex. 4.9, printed p. 223, PDF p. 235]; problem checked against the source PDF; solution independently derived for this vault.
