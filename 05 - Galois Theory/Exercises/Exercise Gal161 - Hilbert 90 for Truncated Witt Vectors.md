---
title: 'Exercise Gal161: Hilbert 90 for Truncated Witt Vectors'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 2, printed p. 283, PDF p. 302
source_refs:
- S4/ch-IV/sec-3/ex-2
created: '2026-10-23'
---

# Exercise Gal161: Hilbert 90 for Truncated Witt Vectors

## Problem Statement

> [!question] Neukirch IV.3.2
> Let $k$ be a field of characteristic $p$ and $\bar k$ its separable closure. For fixed $n\ge1$, consider in the ring of Witt vectors $W(\bar k)$ (see chap. II, §4, Exercise 2–6) the additive group $W_n(\bar k)$ of truncated Witt vectors $a=(a_0,a_1,\ldots,a_{n-1})$. Show that axiom (3.1) holds for the $G(\bar k|k)$-module $A=W_n(\bar k)$.

## Hints

> [!hint]- Hint 1
> The axiom requires $\ker N/(\sigma-1)W_n(L)=0$ for every finite cyclic $L/K$. First prove the stronger assertion $H^1(G,W_n(L))=0$.

> [!hint]- Hint 2
> Use the $G$-equivariant short exact sequence of additive groups $0\to W_{n-1}(L)\xrightarrow V W_n(L)\xrightarrow{a\mapsto a_0}L\to0$ to eliminate the first coordinate of a cocycle.

## Solution

> [!success]- Independent derivation
> Continuity follows from the coordinatewise action: a Witt vector has finitely many coordinates, contained in a finite separable extension, so its stabilizer is open. Invariants are also identified coordinatewise, giving $A^{G_L}=W_n(L)$.
>
> For any finite Galois extension $L/K$, prove $H^1(G(L/K),W_n(L))=0$. The case $n=1$ is the additive Hilbert 90 proved independently in the preceding exercise. For $n>1$, the first coordinate of Witt addition is ordinary addition, and Verschiebung gives the $G$-equivariant short exact sequence of additive groups
> $$
> 0\longrightarrow W_{n-1}(L)\xrightarrow V W_n(L)\xrightarrow{\pi_0}L\longrightarrow0.
> $$
> Exactness follows directly from $V(a_0,\ldots)=(0,a_0,\ldots)$ and the triangular form of Witt addition.
>
> Let $z:G\to W_n(L)$ be a cocycle. Its first coordinate $\pi_0z$ is an additive cocycle in $L$, hence has the form $b_0^{\sigma}-b_0$. Choose any $b\in W_n(L)$ with first coordinate $b_0$. Then
> $$
> z'(\sigma)=z(\sigma)-(b^\sigma-b)
> $$
> has first coordinate zero, so it is uniquely $Vz''(\sigma)$. Since $V$ is injective and commutes with the action, $z''$ is a cocycle in $W_{n-1}(L)$. Induction gives $z''(\sigma)=c^\sigma-c$. Hence
> $$
> z(\sigma)=(b+Vc)^\sigma-(b+Vc),
> $$
> This completes the induction.
>
> If $G$ is cyclic with generator $\sigma$, a norm-zero element $a$ defines the cocycle $z(\sigma^j)=\sum_{i=0}^{j-1}a^{\sigma^i}$. The condition $Na=0$ makes the formula well defined modulo the group order. This cocycle is a coboundary, so $a=(\sigma-1)b$. Thus $\ker N=(\sigma-1)W_n(L)$, precisely the additive form of axiom (3.1). The axiom appears in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, printed p. 278, PDF p. 297].

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[05 - Galois Theory/Concepts/Normal Basis Theorem|Normal Basis Theorem]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 2, printed p. 283, PDF p. 302]. This is an independent induction eliminating cocycle coordinates; the Artin–Schreier–Witt classification itself is not used as an input.
- **Boundary:** Witt addition is not generally coordinatewise addition. Ordinary addition is used only for the first coordinate; the remaining coordinates are handled by the actual additive homomorphism $V$.
