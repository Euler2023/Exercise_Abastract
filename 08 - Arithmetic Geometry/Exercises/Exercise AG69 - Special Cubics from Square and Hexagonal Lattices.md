---
title: "Exercise AG69: Special Cubics from Square and Hexagonal Lattices"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.4, Exercise 1.4.5, printed p. 37, PDF p. 52"
source_refs:
  - "S7/ch-1/sec-4/ex-5"
created: 2026-10-24
---

# Exercise AG69: Special Cubics from Square and Hexagonal Lattices

## Problem Statement

> [!question] Original Exercise 1.4.5
> Show that when $a_2=0$ in Proposition 1.4.3 the desired lattice is $\Lambda=m\Lambda_{\mu_3}$ for a suitably chosen $m$. Prove the case $a_3=0$ in Proposition 1.4.3 similarly.
>
> **Proposition 1.4.3 and its hypotheses, included for independent reading:** Given an elliptic curve
> $$
> y^2=4x^3-a_2x-a_3,\qquad a_2^3-27a_3^2\ne0,
> $$
> there exists a lattice $\Lambda$ such that $a_2=g_2(\Lambda)$ and $a_3=g_3(\Lambda)$ [printed p. 35 / PDF p. 50]. Here $\Lambda_\tau=\tau\mathbb Z\oplus\mathbb Z$, $\mu_3=e^{2\pi i/3}$, $g_2=60G_4$, and $g_3=140G_6$.

## Hints

> [!hint]- Hint 1
> Multiplication by $\mu_3$ preserves $\Lambda_{\mu_3}$ and forces $g_2$ to vanish there. Multiplication by $i$ preserves $\Lambda_i$ and forces $g_3$ to vanish there.

> [!hint]- Hint 2
> Use $g_2(m\Lambda)=m^{-4}g_2(\Lambda)$ and $g_3(m\Lambda)=m^{-6}g_3(\Lambda)$. Nonsingularity guarantees that the other coefficient is nonzero, so take a fourth or sixth root in $\mathbb C^*$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> For $k=4,6$, the lattice Eisenstein sum is absolutely convergent. Replacing its index $\omega$ by $m\omega$ gives
> $$
> G_k(m\Lambda)=m^{-k}G_k(\Lambda),\qquad m\ne0,
> $$
> and therefore the same homogeneity laws hold for $g_2$ with exponent $4$ and $g_3$ with exponent $6$. These are the lattice homogeneity laws stated on printed p. 32 / PDF p. 47.
>
> **Case $a_2=0$.** Put $\rho=\mu_3$. Since $\rho^2=-1-\rho$, multiplication by $\rho$ maps $\Lambda_\rho$ onto itself. Consequently
> $$
> g_2(\Lambda_\rho)=g_2(\rho\Lambda_\rho)
> =\rho^{-4}g_2(\Lambda_\rho)=\rho^2g_2(\Lambda_\rho).
> $$
> As $\rho^2\ne1$, this forces $g_2(\Lambda_\rho)=0$. Proposition 1.4.1(c), printed pp. 32–33 / PDF pp. 47–48, says that the Weierstrass cubic associated to every lattice has distinct roots. If $g_3(\Lambda_\rho)$ were also zero, its cubic would be $y^2=4x^3$ with a repeated root, contradicting that proposition. Thus $g_3(\Lambda_\rho)\ne0$.
>
> The hypothesis $a_2^3-27a_3^2\ne0$ with $a_2=0$ also gives $a_3\ne0$. Choose any of the six nonzero complex roots
> $$
> m^6=\frac{g_3(\Lambda_\rho)}{a_3}.
> $$
> For $\Lambda=m\Lambda_\rho$, homogeneity now gives
> $$
> g_2(\Lambda)=m^{-4}\cdot0=0=a_2,
> \qquad g_3(\Lambda)=m^{-6}g_3(\Lambda_\rho)=a_3.
> $$
> This lattice realizes the given cubic.
>
> **Case $a_3=0$.** The equality $i\Lambda_i=\Lambda_i$ gives
> $$
> g_3(\Lambda_i)=g_3(i\Lambda_i)=i^{-6}g_3(\Lambda_i)=-g_3(\Lambda_i),
> $$
> so $g_3(\Lambda_i)=0$. The same nonsingularity proposition implies $g_2(\Lambda_i)\ne0$. The target curve's hypothesis with $a_3=0$ implies $a_2\ne0$. Choose any nonzero complex fourth root
> $$
> m^4=\frac{g_2(\Lambda_i)}{a_2}.
> $$
> Then $\Lambda=m\Lambda_i$ satisfies
> $$
> g_2(\Lambda)=m^{-4}g_2(\Lambda_i)=a_2,
> \qquad g_3(\Lambda)=m^{-6}\cdot0=0=a_3.
> $$
> The two cases do not overlap: $a_2=a_3=0$ violates the nonsingularity hypothesis. This proves exactly the two cases left as exercises in Proposition 1.4.3, without invoking its general conclusion.
>
> For explicit checks, [[08 - Arithmetic Geometry/Exercises/Exercise AG68 - Square and Hexagonal Weierstrass Lattices|AG68]] writes $g_2(\Lambda_i)=4a^2$ with $a=\wp_i(1/2)>0$, and $g_3(\Lambda_\rho)=4b^3$ with $b=\wp_\rho(1/2)\ne0$. Choosing $a_2=4,a_3=0$ allows $m^2=a$; choosing $a_2=0,a_3=4$ allows $m^2=b$. The resulting equations are respectively $y^2=4x(x-1)(x+1)$ and $y^2=4(x^3-1)$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]

## Notes

- **Source status:** The exact exercise and the statement and hypotheses of Proposition 1.4.3 were visually checked at [Diamond–Shurman, Ch. 1, §1.4, printed pp. 35, 37, PDF pp. 50, 52]. The homogeneity laws and nonsingularity input were checked at [printed pp. 32–33, PDF pp. 47–48]. The proof above is an independent construction for the two assigned special cases.
- **Imported source result:** Proposition 1.4.1(c) gives nonsingularity for the cubic of an existing lattice. This is used only to show that the remaining invariant is nonzero; it is not the converse uniformization conclusion assigned here.
- **Boundary:** The allowed coefficients are complex. Nonzero complex numbers admit the required fourth and sixth roots; a prescribed real multiplier would impose additional sign conditions that are absent from the exercise.
- **Notation:** These two families have $j=0$ and $j=1728$, respectively, but no surjectivity theorem for the $j$-function is needed for this proof.
