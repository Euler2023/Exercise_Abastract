---
title: "Exercise Gal212: Stabilizers of Cyclic and Point Level Data"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.7, Exercise 7.7.1, printed p. 298, PDF p. 311"
source_refs:
  - "S7/ch-7/sec-7/ex-1"
created: 2026-10-28
---

# Exercise Gal212: Stabilizers of Cyclic and Point Level Data

## Problem Statement

> [!question] Original Exercise 7.7.1
> Show that the images of $K_0$ and $K_1$ under $\rho$ are given by (7.13). (A hint for this exercise is at the end of the book.)

> **Context and notation.** Let $L=\mathbb Q(j,E_j[N])$, $K_i=\operatorname{Gal}(L/\mathbb Q(j,f_i))$, and $\rho:\operatorname{Gal}(L/\mathbb Q(j))\simeq GL_2(\mathbb Z/N\mathbb Z)$. Here $f_1=x(Q)$ and $f_0=\sum_{d=1}^{N-1}x([d]Q)$. Equation (7.13), printed p. 294 / PDF p. 307, is
> $$
> \rho(K_0)=\left\{\begin{pmatrix}a&b\\0&d\end{pmatrix}\right\},\qquad
> \rho(K_1)=\left\{\pm\begin{pmatrix}a&b\\0&1\end{pmatrix}\right\},
> $$
> with all displayed matrices invertible.

## Hints

> [!hint]- Hint 1
> For one torsion $x$-coordinate, preserving it means preserving its point up to sign.

> [!hint]- Hint 2
> Upper-triangular matrices preserve the cyclic subgroup and permute its nonzero points.

> [!hint]- Hint 3
> Correct an arbitrary determinant by an upper-triangular diagonal matrix before applying the geometric calculation.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $P,Q$ be the chosen ordered torsion basis. A matrix $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ sends $Q$ to $cP+dQ$. For $f_1=x(Q)$, equality of $x$-coordinates means equality up to negation. Hence $M$ fixes $f_1$ exactly when $c=0,d=\pm1$. The matrices are precisely
> $$
> \left\{\pm\begin{pmatrix}a&b\\0&1\end{pmatrix}\in GL_2(\mathbb Z/N\mathbb Z)\right\}.
> $$
>
> Next $f_0=\sum_{d=1}^{N-1}x([d]Q)$. If $c=0$, the image of $Q$ is a unit multiple of $Q$, so its nonzero multiples are permuted; therefore the sum is fixed. This proves that the full upper-triangular subgroup $B$ fixes $f_0$.
>
> For the converse, use the geometric computation of Exercise 7.5.3: over $\mathbb C(j)$ the stabilizer of this sum inside $SL_2(\mathbb Z/N\mathbb Z)$ is exactly its upper-triangular subgroup. The theorem of Section 7.6 identifies this determinant-one subgroup with the geometric Galois group after extending constants to $\mathbb C$.
>
> Suppose $M$ fixes $f_0$, and choose $D=\operatorname{diag}((\det M)^{-1},1)$. The matrix $D$ is in $B$, so also fixes $f_0$; the product $DM$ has determinant $1$ and fixes $f_0$. The geometric stabilizer computation forces $DM$ to be upper triangular. Its lower-left entry is the same $c$ as that of $M$, so $c=0$. Thus no further matrices fix the sum.
>
> By the fundamental theorem of Galois theory these are exactly $\rho(K_1)$ and $\rho(K_0)$ for the two generated fields. The determinant adjustment is what allows the geometric $SL_2$ calculation to control the arithmetic $GL_2$ stabilizer.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 298 / PDF p. 311. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Imported input:** The geometric stabilizer of $f_0$ is the separately assigned Exercise 7.5.3(c), with its independent cusp-limit proof in this archive. The arithmetic passage is supplied explicitly above.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
