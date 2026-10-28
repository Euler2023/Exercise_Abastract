---
title: "Exercise Gal213: Degrees of Torsion Coordinate Minimal Polynomials"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.7, Exercise 7.7.2, printed p. 298, PDF p. 311"
source_refs:
  - "S7/ch-7/sec-7/ex-2"
created: 2026-10-28
---

# Exercise Gal213: Degrees of Torsion Coordinate Minimal Polynomials

## Problem Statement

> [!question] Original Exercise 7.7.2
> Let $p_{1,\mathbb C}\in\mathbb C(j)[x]$ be the minimal polynomial of $f_1$ over $\mathbb C(j)$ and $p_{1,\mathbb Q}\in\mathbb Q(j)[x]$ its minimal polynomial over $\mathbb Q(j)$, a multiple of the former. Let $\epsilon_N=2$ for $N\in\{1,2\}$ and $\epsilon_N=1$ for $N>2$. Show by Galois theory and Figure 7.2 that
> $$
> \deg p_{1,\mathbb C}=\epsilon_N|SL_2(\mathbb Z/N\mathbb Z)|/(2N),
> $$
> and similarly that this equals $\deg p_{1,\mathbb Q}$. Thus the polynomials are equal because both are monic.

> [!warning] Source issue
> The section defines these finite torsion coordinates only for $N>1$. The printed $\epsilon_1$ formula has a sensible formal index value, but $f_1=x(0_E)$ and its finite minimal polynomial are not defined without an extra trivial-level convention. The proof separates this boundary.

## Hints

> [!hint]- Hint 1
> Count the stabilizer of the last basis point up to sign in $SL_2$.

> [!hint]- Hint 2
> Over $GL_2$ the free upper-left entry contributes the same factor $\varphi(N)$ as the determinant quotient.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Assume first $N\ge2$, so the nonzero torsion point $Q$ and its finite coordinate $f_1$ are defined. In the geometric $SL_2$ group the stabilizer of $x(Q)$ is
> $$
> U^\pm=\left\{\pm\begin{pmatrix}1&b\\0&1\end{pmatrix}:b\in\mathbb Z/N\mathbb Z\right\}.
> $$
> For $N>2$ its two sign families are disjoint and its order is $2N$; for $N=2$ the signs coincide and its order is $N$. Thus $|U^\pm|=2N/\epsilon_N$. The orbit-stabilizer formula in the Galois extension gives
> $$
> [\mathbb C(j,f_1):\mathbb C(j)]
> =\frac{\epsilon_N|SL_2(\mathbb Z/N\mathbb Z)|}{2N}.
> $$
> This is the degree of the complex minimal polynomial. Equivalently the relevant part of Figure 7.2 is the tower with $SL_2$ over $\mathbb C(j)$ and stabilizer $U^\pm$ over $\mathbb C(j,f_1)$.
>
> Over $\mathbb Q(j)$ the group is $GL_2$, and the stabilizer is
> $$
> B_1^\pm=\left\{\pm\begin{pmatrix}a&b\\0&1\end{pmatrix}:a\in(\mathbb Z/N\mathbb Z)^*,\ b\in\mathbb Z/N\mathbb Z\right\}.
> $$
> Its order is $2N\varphi(N)/\epsilon_N$. Determinant is a surjection $GL_2\to(\mathbb Z/N\mathbb Z)^*$ with kernel $SL_2$, so $|GL_2|=\varphi(N)|SL_2|$. The arithmetic orbit degree is therefore the same number.
>
> The complex minimal polynomial divides the arithmetic one after extension of coefficients, because the latter vanishes at $f_1$. Both are monic and have equal finite degree, so their quotient is $1$ and they are equal.
>
> At the formal level $N=1$ the displayed index formula evaluates to $1$, as expected for the trivial modular curve. But the finite coordinate of $Q=0_E$ is undefined. One may adopt a separate constant-coordinate convention, with linear minimal polynomial, or restrict the assertion to the section's standing assumption $N>1$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 298 / PDF p. 311. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
