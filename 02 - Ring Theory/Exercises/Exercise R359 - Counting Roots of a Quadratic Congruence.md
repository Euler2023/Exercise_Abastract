---
title: "Exercise R359: Counting Roots of a Quadratic Congruence"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 10, printed p. 53, PDF p. 72"
created: 2026-10-20
---

# Exercise R359: Counting Roots of a Quadratic Congruence

## Problem Statement

> [!question] Neukirch I.8.10
> Show that the number of solutions of $x^2\equiv a\bmod p$ equals $1+\left(\frac ap\right)$.

Solutions are counted as residue classes modulo the odd prime $p$. We use the usual extension $\left(\frac ap\right)=0$ when $p\mid a$, alongside its values $1$ and $-1$ on nonzero residues.

## Hints

> [!hint]- Hint 1
> Separate the case $a\equiv0\bmod p$ from the two possible Legendre-symbol values on units.

> [!hint]- Hint 2
> If $u^2=a$ in $\mathbb F_p$, factor $X^2-a=(X-u)(X+u)$.

> [!hint]- Hint 3
> When $a\ne0$, the two roots $u$ and $-u$ are distinct because $p$ is odd. A nonsquare has no root by definition.

## Solution

> [!success]- Independent derivation
> Work in the field $\mathbb F_p$. If $a=0$, the equation $x^2=0$ has only the root $x=0$, because a field has no nonzero nilpotents. The count is $1=1+0$.
>
> If $a\ne0$ and $\left(\frac ap\right)=-1$, there is no root by the definition of a quadratic nonresidue, giving the count $0=1-1$.
>
> Finally, if $\left(\frac ap\right)=1$, choose $u\ne0$ with $u^2=a$. The factorization
> $$
> x^2-a=(x-u)(x+u)
> $$
> shows that every root equals $u$ or $-u$, since a product in a field can vanish only if a factor vanishes. Both are roots, and they are distinct: equality would imply $2u=0$, impossible when $p$ is odd and $u\ne0$. Thus the count is $2=1+1$. These three cases prove the formula for every integer $a$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 10, printed p. 53, PDF p. 72]. No source figure is required.
- **Proof status and conventions:** This is an independent elementary root count. The source's Legendre-symbol discussion assumes an odd prime on [S4, printed p. 50, PDF p. 69]. Its definition there is stated on units; the usual zero extension is made explicit here so the formula also covers $a\equiv0$.
- **Boundary and routing:** The count is modulo $p$, rather than the infinite set of integer representatives. Odd characteristic is essential for the two distinct nonzero roots. Ring Theory is primary because the proof factors a polynomial in a residue field.

