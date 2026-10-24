---
title: "Exercise AG67: Periodicity of the Weierstrass Function"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.4, Exercise 1.4.2(a)–(b), printed p. 36, PDF p. 51"
source_refs:
  - "S7/ch-1/sec-4/ex-2"
created: 2026-10-24
---

# Exercise AG67: Periodicity of the Weierstrass Function

## Problem Statement

> [!question] Original Exercise 1.4.2
> Let $\Lambda=\omega_1\mathbb Z\oplus\omega_2\mathbb Z$ be a lattice and let $\wp$ be its associated Weierstrass $\wp$-function.
>
> (a) Show that $\wp$ is even and that $\wp'$ is $\Lambda$-periodic.
>
> (b) For $i=1,2$ show that the function $\wp(z+\omega_i)-\wp(z)$ is some constant $c_i$ by taking its derivative. Substitute $z=-\omega_i/2$ to show that $c_i=0$. Conclude that $\wp$ is $\Lambda$-periodic.
>
> The function, defined on printed p. 31 / PDF p. 46, is
> $$
> \wp(z)=\frac1{z^2}+\sum_{\omega\in\Lambda\setminus\{0\}}
> \left(\frac1{(z-\omega)^2}-\frac1{\omega^2}\right),\qquad z\notin\Lambda.
> $$

## Hints

> [!hint]- Hint 1
> The lattice is invariant under $\omega\mapsto-\omega$. After differentiation the subtraction term disappears, allowing translation to reindex the entire lattice sum.

> [!hint]- Hint 2
> A function with zero derivative is constant on the connected domain $\mathbb C\setminus\Lambda$. Neither $\omega_j/2$ nor $-\omega_j/2$ lies in $\Lambda$ because $(\omega_1,\omega_2)$ is a lattice basis.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Convergence needed for the rearrangements.** A lattice has a positive minimum separation between distinct points. Disjoint discs of a fixed small radius about its points show that the annulus $n\le |\omega|<n+1$ contains at most $C(n+1)$ lattice points. Therefore $\sum_{\omega\ne0}|\omega|^{-3}<\infty$.
>
> On a compact set $K\subset\mathbb C\setminus\Lambda$, let $|z|\le R$. For $|\omega|>2R$,
> $$
> \left|\frac1{(z-\omega)^2}-\frac1{\omega^2}\right|
> =\frac{|2\omega z-z^2|}{|z-\omega|^2|\omega|^2}
> \le\frac{10R}{|\omega|^3}.
> $$
> The remaining finitely many terms are regular on $K$. The defining series thus converges absolutely and uniformly on compact subsets away from $\Lambda$. The differentiated series has a tail bounded by a constant times $\sum|\omega|^{-3}$ as well, so the theorem on differentiating normally convergent holomorphic series applies.
>
> **(a) Evenness.** Replace $\omega$ by $-\omega$ in the absolutely convergent sum:
> $$
> \begin{aligned}
> \wp(-z)
> &=\frac1{z^2}+\sum_{\omega\ne0}
> \left(\frac1{(-z-\omega)^2}-\frac1{\omega^2}\right)\\
> &=\frac1{z^2}+\sum_{\eta\ne0}
> \left(\frac1{(z-\eta)^2}-\frac1{\eta^2}\right)=\wp(z).
> \end{aligned}
> $$
> Differentiation gives
> $$
> \wp'(z)=-2\sum_{\omega\in\Lambda}\frac1{(z-\omega)^3}.
> $$
> For $\lambda\in\Lambda$, substitute $\eta=\omega-\lambda$ to obtain
> $$
> \wp'(z+\lambda)=-2\sum_{\omega\in\Lambda}\frac1{(z+\lambda-\omega)^3}
> =-2\sum_{\eta\in\Lambda}\frac1{(z-\eta)^3}=\wp'(z).
> $$
>
> **(b) Vanishing of the additive constants.** For each $j$, put $F_j(z)=\wp(z+\omega_j)-\wp(z)$. On $\mathbb C\setminus\Lambda$ its derivative is
> $$
> F_j'(z)=\wp'(z+\omega_j)-\wp'(z)=0.
> $$
> The punctured plane $\mathbb C\setminus\Lambda$ is path connected: any line segment meets only finitely many lattice points, and small detours avoid them. Hence $F_j$ is one constant $c_j$ on this domain. Since a basis element is not twice another lattice element, $-\omega_j/2\notin\Lambda$. Evenness now gives
> $$
> c_j=F_j(-\omega_j/2)=\wp(\omega_j/2)-\wp(-\omega_j/2)=0.
> $$
> Thus $\omega_1$ and $\omega_2$ are periods. Repeatedly applying these two identities, also with negative shifts, proves $\wp(z+n_1\omega_1+n_2\omega_2)=\wp(z)$ for all integers $n_1,n_2$. The meromorphic identities extend over the poles in the usual sense.
>
> The argument also explains why the subtraction terms in $\wp$ cause no difficulty: one first reindexes its derivative, whose summands are a single absolutely convergent translated lattice sum, and then determines the possible integration constants by evenness.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Source status:** The complete exercise was visually checked at [Diamond–Shurman, Ch. 1, §1.4, printed p. 36, PDF p. 51]. The defining series and derivative formula were checked at [printed pp. 31–32, PDF pp. 46–47]. The proof above is independent and includes convergence justifications for its rearrangements.
- **Imported input:** Termwise differentiation of a normally convergent holomorphic series is a complex-analysis theorem. The lattice counting estimate needed for normal convergence is supplied above.
- **Boundary:** Periodicity of a derivative alone only makes the original function periodic up to constants. The half-period substitution is the step that removes those constants here.
