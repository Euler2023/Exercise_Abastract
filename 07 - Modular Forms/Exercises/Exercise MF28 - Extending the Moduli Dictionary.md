---
title: "Exercise MF28: Extending the Moduli Dictionary"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.5, Exercise 1.5.1, printed p. 42, PDF p. 57; Theorem 1.5.1, printed pp. 38–40, PDF pp. 53–55"
source_refs:
  - "S7/ch-1/sec-5/ex-1"
created: 2026-10-24
---

# Exercise MF28: Extending the Moduli Dictionary

## Problem Statement

> [!question] Original Exercise 1.5.1
> Prove the other two parts of Theorem 1.5.1. (A hint for this exercise is at the end of the book.)
>
> **Referenced Theorem 1.5.1(a),(c).** Let $N$ be a positive integer, $\Lambda_\tau=\tau\mathbb Z+\mathbb Z$, and $E_\tau=\mathbb C/\Lambda_\tau$. The moduli space for $\Gamma_0(N)$ is
> $$
> S_0(N)=\{[E_\tau,\langle 1/N+\Lambda_\tau\rangle]:\tau\in\mathcal H\}.
> $$
> Two displayed classes are equal exactly when $\Gamma_0(N)\tau=\Gamma_0(N)\tau'$, giving a bijection $\psi_0:S_0(N)\to Y_0(N)$. The moduli space for $\Gamma(N)$ is
> $$
> S(N)=\{[E_\tau,(\tau/N+\Lambda_\tau,1/N+\Lambda_\tau)]:\tau\in\mathcal H\}.
> $$
> Two displayed classes are equal exactly when $\Gamma(N)\tau=\Gamma(N)\tau'$, giving a bijection $\psi:S(N)\to Y(N)$. Here $S_0(N)$ classifies a cyclic subgroup of order $N$, while $S(N)$ classifies an ordered basis $(P,Q)$ of $E[N]$ with $e_N(P,Q)=e^{2\pi i/N}$; equivalence means a holomorphic group isomorphism preserving the indicated data.

## Hints

> [!hint]- Hint 1
> For the cyclic case choose a generator and apply the already proved part (b). For the full-level case write the two torsion points as rows of a matrix modulo $N$.

> [!hint]- Hint 2
> The prescribed Weil pairing makes that matrix have determinant $1$ modulo $N$. Lift it to $SL_2(\mathbb Z)$ using Exercise 1.2.2. An isomorphism between normalized tori is multiplication by $m$, with $(m\tau,m)^t=\gamma(\tau',1)^t$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> We use Theorem 1.5.1(b) (proved in the text on printed pp. 39–40 / PDF pp. 54–55), the scalar description of torus isomorphisms (Corollary 1.3.3, printed p. 26 / PDF p. 41), and the surjectivity proved in Exercise 1.2.2 (printed p. 21 / PDF p. 36).
>
> **Cyclic structures: representatives.** Given $(E,C)$, choose a generator $Q$ of $C$. Part (b) supplies an isomorphism to $(E_\tau,1/N+\Lambda_\tau)$, so it sends $C$ to the displayed subgroup.
>
> **Cyclic structures: equivalence.** A scalar isomorphism $E_\tau\to E_{\tau'}$, $z\mapsto mz$, gives an oriented integral basis change
> $$
> \binom{m\tau}{m}=\begin{pmatrix}a&b\\c&d\end{pmatrix}\binom{\tau'}1,
> \qquad ad-bc=1.
> $$
> Thus $m=c\tau'+d$ and $\tau=\gamma\tau'$. It preserves the cyclic subgroups exactly when $(c\tau'+d)/N+\Lambda_{\tau'}$ generates $\langle1/N+\Lambda_{\tau'}\rangle$. Independence of $\tau'$ and $1$ over $\mathbb R$ says this is equivalent to $c\equiv0\pmod N$ and $d$ being a unit modulo $N$. The determinant equation already makes $d$ a unit when $c\equiv0$. Hence precisely $\gamma\in\Gamma_0(N)$ occurs. Conversely every such matrix gives this scalar isomorphism and preserves the subgroup. The representatives therefore induce the claimed bijection.
>
> **Full structures: representatives.** First identify $E$ with $E_{\tau'}$. Write
> $$
> P=\frac{a\tau'+b}N+\Lambda_{\tau'},\qquad Q=\frac{c\tau'+d}N+\Lambda_{\tau'}.
> $$
> The Weil formula gives $ad-bc\equiv1\pmod N$. Exercise 1.2.2 lifts the residue matrix to $\gamma\in SL_2(\mathbb Z)$ without changing the points. Set $\tau=\gamma\tau'$ and $m=c\tau'+d$. Then $m\Lambda_\tau=\Lambda_{\tau'}$, $m\tau/N=P$ modulo $\Lambda_{\tau'}$, and $m/N=Q$ modulo it. This gives the normalized full structure.
>
> **Full structures: equivalence.** With the same oriented basis change, preserving both marked points requires
> $$
> (a\tau'+b)/N\equiv\tau'/N,\qquad(c\tau'+d)/N\equiv1/N\pmod{\Lambda_{\tau'}}.
> $$
> Coefficient comparison is equivalent to $a,d\equiv1$, $b,c\equiv0\pmod N$, exactly $\gamma\in\Gamma(N)$. Conversely those congruences preserve both points. This proves both injectivity and surjectivity of $\psi$. For $N=1$ the markings are trivial and all statements reduce to the torus isomorphism classification.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]

## Notes

The text leaves (a) and (c) as this exercise; the argument above is independent. Appendix A gives the lifting strategy for (c), printed p. 414 / PDF p. 425. We classify complex points; no fine moduli scheme or universal family is asserted.
