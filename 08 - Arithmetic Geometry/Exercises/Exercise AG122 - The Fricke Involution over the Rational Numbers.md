---
title: "Exercise AG122: The Fricke Involution over the Rational Numbers"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.9, Exercise 7.9.2, printed p. 310, PDF p. 323"
source_refs:
  - "S7/ch-7/sec-9/ex-2"
created: 2026-10-28
---

# Exercise AG122: The Fricke Involution over the Rational Numbers

## Problem Statement

> [!question] Original Exercise 7.9.2
> The matrix $\begin{pmatrix}0&-1\\N&0\end{pmatrix}$ normalizes $\Gamma_0(N)$ and gives the involution
> $$
> w_N:X_0(N)\to X_0(N),\qquad\Gamma_0(N)\tau\mapsto\Gamma_0(N)(-1/(N\tau)).
> $$
> (a) Put $\tau'=-1/(N\tau)$. Explain why showing $w_N$ is defined over $\mathbb Q$ reduces to showing $j(\tau'),j_N(\tau')\in\mathbb Q(X_0(N)_{\mathrm{alg}})$, and show this. (Hints are at the end of the book.)
>
> (b) On the planar model defined by the minimal polynomial $p_0$ of $f_0$ over $\mathbb Q(j)$, write $w_N:(j,x)\mapsto(j',x')$, with first component a rational function $r_N$ over $\mathbb Q$ in two variables. Describe a map $S_0(N)'_{\mathrm{alg}}\to X_0(N)^{\mathrm{planar}}_{\mathrm{alg}}$ analogous to (7.21). Explain why $j(E/C)=r_N(j(E),x(C))$, where $E/\overline{\mathbb Q}$ is elliptic, $C$ is $N$-cyclic, and $x(C)$ is the sum of the $x$-coordinates of its nonzero points.
>
> (c) Describe $w_N$ on the planar model defined by $\Phi(j,j_N)=0$. What does this show about $\Phi(x,y)$?

> **Context and notation.** $j_N(\tau)=j(N\tau)$, $f_0=\sum_{d=1}^{N-1}f_0^d$, and $\mathbb Q(X_0(N)_{\mathrm{alg}})=\mathbb Q(j,f_0)=\mathbb Q(j,j_N)$. The normalized universal-model coordinate in (7.21) is essential: an unnormalized $x$-coordinate changes under rescaling a Weierstrass equation.

## Hints

> [!hint]- Hint 1
> Apply $j(-1/z)=j(z)$ to both coordinates.

> [!hint]- Hint 2
> The quotient by $\langle1/N\rangle$ has a lattice homothetic to $\Lambda_{N\tau}$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> (a) The field of the nonsingular projective model is $\mathbb Q(j,j_N)$. Giving a morphism over $\mathbb Q$ is equivalent to giving its pullback field map over $\mathbb Q$, so testing these two generators suffices. Since $j(-1/z)=j(z)$,
> $$
> j(\tau')=j(N\tau)=j_N(\tau),\qquad j_N(\tau')=j(-1/\tau)=j(\tau).
> $$
> The pullback simply interchanges two generators and squares to the identity. It therefore defines the required rational field automorphism and hence an involution of the nonsingular projective curve over $\mathbb Q$.
>
> (b) For $j(E)\ne0,1728$, identify $E$ with the universal short model of that invariant and use its normalized $x$-coordinate. The map is
> $$
> [E,C]\longmapsto\left(j(E),\sum_{0\ne R\in C}x(R)\right).
> $$
> The two possible universal-model identifications differ by negation, which leaves every $x$-coordinate unchanged. Thus this is well defined. The prime excludes the two exceptional invariant values as in (7.21). Under the analytic description, $[E,C]$ is represented by $(\mathbb C/\Lambda_\tau,\langle1/N\rangle)$. The quotient has lattice $\Lambda_\tau+\mathbb Z/N$, homothetic by $N$ to $\mathbb Z(N\tau)+\mathbb Z$, so its invariant is $j(N\tau)$. The Fricke image has precisely this first coordinate by (a). As $f_0$ is the indicated sum, $j(E/C)=r_N(j(E),x(C))$ wherever the displayed rational coordinates are defined. On the nonsingular projective models the map extends over omitted points; a pole or a $0/0$ presentation of $r_N$ is interpreted via that extension.
>
> (c) In the $(j,j_N)$ plane the involution is $(x,y)\mapsto(y,x)$. Therefore the defining irreducible relation is invariant under exchanging variables, up to its scalar normalization: $\Phi(y,x)=c\Phi(x,y)$ for a nonzero rational $c$, and $c^2=1$. For $N>1$, the usual modular polynomial normalization (primitive integral polynomial, monic as a polynomial in either variable) gives $c=1$ by coefficient comparison, so $\Phi(x,y)=\Phi(y,x)$. The trivial level is a separate boundary: when $N=1$, $j_N=j$ and one may take $\Phi(x,y)=y-x$, which changes sign under interchange while defining the same diagonal. Without a normalization and level convention, the intrinsic conclusion is invariance of the zero locus.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 310 / PDF p. 323. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
