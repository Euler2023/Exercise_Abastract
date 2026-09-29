---
title: "Exercise Rep138: Rational Conjugacy Classes"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - characters
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 14, printed p. 725, PDF p. 740"
created: 2026-09-29
---

# Exercise Rep138: Rational Conjugacy Classes

## Problem Statement

> [!question] Lang XVIII.14
> Let $G$ be a finite group and let $C$ be a conjugacy class. Prove that the following two conditions are equivalent. They define what it means for the class to be **rational**.
>
> **RAT 1.** For all characters $\chi$ of $G$, $\chi(\sigma)\in\mathbb Q$ for $\sigma\in C$.
>
> **RAT 2.** For all $\sigma\in C$, and $j$ prime to the order of $\sigma$, we have $\sigma^j\in C$.

> [!info] Characters
> Characters here are ordinary complex characters. It is equivalent in RAT 1 to test just the irreducible characters.

## Hints

> [!hint]- Hint 1: Locate the eigenvalues
> If $\sigma$ has order $m$, the eigenvalues of $\rho(\sigma)$ are $m$-th roots of unity. Apply the automorphism $\zeta_m\mapsto\zeta_m^j$ to their sum.

> [!hint]- Hint 2: Use character separation
> The irreducible characters form a basis for the class functions. Thus two elements at which every irreducible character has the same value must be conjugate.

## Solution

> [!success]- Independent derivation using cyclotomic Galois action
> Fix $\sigma\in C$ and let $m$ be its order. For any complex representation $\rho$, its matrix $\rho(\sigma)$ satisfies $X^m-1$, a polynomial with distinct roots over $\mathbb C$. It is therefore diagonalizable, with eigenvalues $\zeta_m^{a_1},\ldots,\zeta_m^{a_d}$, where $\zeta_m$ is a primitive $m$-th root of unity. Hence
> $$
> \chi(\sigma)=\sum_{i=1}^d\zeta_m^{a_i}\in\mathbb Q(\zeta_m).
> $$
> For every integer $j$ relatively prime to $m$, the cyclotomic Galois automorphism $\tau_j$ sends $\zeta_m$ to $\zeta_m^j$, and consequently
> $$
> \tau_j\bigl(\chi(\sigma)\bigr)
> =\sum_{i=1}^d\zeta_m^{ja_i}
> =\chi(\sigma^j).
> $$
> We use the standard cyclotomic Galois theorem: these $\tau_j$, indexed by $(\mathbb Z/m\mathbb Z)^\times$, are all the automorphisms of $\mathbb Q(\zeta_m)/\mathbb Q$, and their common fixed field is $\mathbb Q$.
>
> **RAT 1 implies RAT 2.** If every $\chi(\sigma)$ is rational, then every $\tau_j$ fixes it, so $\chi(\sigma^j)=\chi(\sigma)$ for all irreducible characters. By the character-basis theorem, every complex class function is a linear combination of irreducible characters. In particular the indicator function of $C$ has equal values at $\sigma$ and $\sigma^j$. Its value at $\sigma$ is $1$, so $\sigma^j\in C$.
>
> **RAT 2 implies RAT 1.** If $\sigma^j\in C$ for every $j$ prime to $m$, then characters, being constant on conjugacy classes, satisfy $\chi(\sigma^j)=\chi(\sigma)$. The displayed Galois formula shows that $\chi(\sigma)$ is fixed by all the automorphisms of $\mathbb Q(\zeta_m)/\mathbb Q$. Thus $\chi(\sigma)\in\mathbb Q$.
>
> This proves both implications. Direct sums decompose into irreducibles, so checking irreducible characters in RAT 1 is sufficient. The argument includes $m=1$, when the cyclotomic field is already $\mathbb Q$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[06 - Representation Theory/Concepts/Character Rings and Adams Operations|Character Rings and Adams Operations]]
- [[06 - Representation Theory/Exercises/Exercise Rep11 - Galois Action and the Regular Character|Galois Action and the Regular Character]]

## Notes

- **Source and proof status:** Both conditions and their quantifiers were visually checked at [S2, Ch. XVIII, Exercise 14, printed p. 725, PDF p. 740]. The solution is independent. The character-basis input is Lang XVIII, Theorem 5.15, printed p. 684, PDF p. 699, also visually checked. The cyclotomic Galois theorem is a named standard input.
- **No extra coprimality:** Here $j$ need only be prime to $\operatorname{ord}(\sigma)$, not to $|G|$. The proof works in the cyclotomic field for this particular element.
- **Values are actually integers:** Character values are algebraic integers, as sums of roots of unity. A rational algebraic integer is an integer, so RAT 1 also implies $\chi(\sigma)\in\mathbb Z$.
