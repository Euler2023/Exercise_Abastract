---
title: "Exercise R360: Counting Roots Using the Discriminant"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 11, printed p. 53, PDF p. 72"
created: 2026-10-20
---

# Exercise R360: Counting Roots Using the Discriminant

## Problem Statement

> [!question] Neukirch I.8.11
> Show that the number of solutions of the congruence $ax^2+bx+c\equiv0\bmod p$, where $(a,p)=1$, equals $1+\left(\frac{b^2-4ac}{p}\right)$.

Here $p$ is the odd prime used in the surrounding source discussion. Solutions are residue classes modulo $p$, and the Legendre symbol is extended by zero on multiples of $p$.

## Hints

> [!hint]- Hint 1
> Complete the square without dividing the polynomial: compare $(2ax+b)^2$ with $b^2-4ac$.

> [!hint]- Hint 2
> Since $2a$ is a unit modulo $p$, the map $x\mapsto2ax+b$ is a bijection of $\mathbb F_p$.

> [!hint]- Hint 3
> Count roots of $y^2=\Delta$ for $\Delta=b^2-4ac$. Include the case $\Delta=0$, which has one root.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $\Delta=b^2-4ac$ in $\mathbb F_p$. The identity
> $$
> (2ax+b)^2-\Delta=4a(ax^2+bx+c)
> $$
> holds by expansion. Because $p$ is odd and $a\ne0$, both $4a$ and $2a$ are invertible in $\mathbb F_p$. Therefore
> $$
> ax^2+bx+c=0
> \quad\Longleftrightarrow\quad
> (2ax+b)^2=\Delta.
> $$
> The change of variable $y=2ax+b$ is bijective, with inverse $x=(y-b)/(2a)$.
>
> If $\Delta=0$, its square-root equation has the single root $y=0$, corresponding to $x=-b/(2a)$. If $\Delta$ is a nonzero square, it has exactly two roots $y=\pm u$, distinct in odd characteristic, and therefore two roots $x=(-b\pm u)/(2a)$. If $\Delta$ is a nonsquare, it has no roots. These counts are respectively $1,2,0$, exactly
> $$
> 1+\left(\frac{\Delta}{p}\right).
> $$
> In particular the vanishing-discriminant case is included, rather than treated as a nonresidue.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields]]

## Notes

- **Source verification:** The complete problem was visually checked in [S4, Ch. I, §8, Exercise 11, printed p. 53, PDF p. 72]. No source figure is required.
- **Proof status and inputs:** The completion-of-the-square identity and all three counts are independent derivations. The odd-prime convention comes from [S4, Ch. I, §8, printed p. 50, PDF p. 69]; the zero extension of the symbol is stated explicitly here.
- **Boundary and routing:** The coefficient $a$ must be invertible and $2$ must be nonzero. The source is not making an unrestricted characteristic-two assertion. Ring Theory is primary because a bijective affine substitution reduces a residue-field polynomial equation to a square-root count.

