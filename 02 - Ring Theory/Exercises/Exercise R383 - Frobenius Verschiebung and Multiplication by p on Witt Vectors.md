---
title: 'Exercise R383: Frobenius Verschiebung and Multiplication by p on Witt Vectors'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 5, printed p. 134, PDF p. 153
source_refs:
- S4/ch-II/sec-4/ex-5
created: '2026-10-23'
---

# Exercise R383: Frobenius Verschiebung and Multiplication by p on Witt Vectors

## Problem Statement

> [!question] Neukirch II.4.5
> Let $k$ be a field of characteristic $p$. Then $V$ is a homomorphism of the additive group of $W(k)$ and $F$ is a ring homomorphism, and $VFa=FVa=pa$.

## Hints

> [!hint]- Hint 1
> Prove additivity of $V$ over the universal torsion-free polynomial ring using ghost components.

> [!hint]- Hint 2
> Construct universal Witt Frobenius $\Phi$ by $W_n(\Phi a)=W_{n+1}(a)$, show $\Phi_i\equiv a_i^p\pmod p$, and use $\Phi V=p$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> In a universal torsion-free polynomial ring, the ghost coordinates of $V(a+b)$ and $Va+Vb$ coincide: the zeroth is zero, and the $n$-th for $n\ge1$ is $p(W_{n-1}(a)+W_{n-1}(b))$. Ghost injectivity and evaluation give additivity over all rings. Over $k$, Frobenius commutes with evaluation of every integral polynomial modulo $p$. Thus $F(S(a,b))=S(Fa,Fb)$ and $F(P(a,b))=P(Fa,Fb)$ coordinate by coordinate; it also preserves $(1,0,\ldots)$. Hence $F$ is a ring homomorphism.
>
> To verify multiplication by $p$, work over $R=\mathbb Z[a_0,a_1,\ldots]$. The ghost criterion proved in II.4.2 applies to $g_n=W_{n+1}(a)$ because $g_n-\phi(g_{n-1})=p^{n+1}a_{n+1}$. It gives integral polynomials $\Phi_i$ with $W_n(\Phi a)=W_{n+1}(a)$. We claim $\Phi_i\equiv a_i^p\pmod p$. For $i=0$, $\Phi_0=a_0^p+pa_1$. Assuming the claim through $n-1$, compare $W_n(\Phi a)$ and $W_n(Fa)$; their difference is $p^{n+1}a_{n+1}$. The lower-coordinate terms in this difference are divisible by $p^{n+1}$ by the binomial congruence used in II.4.2. The remaining term is $p^n(\Phi_n-a_n^p)$, proving the induction step.
>
> For every $n\ge0$,
> $$
> W_n(\Phi Va)=W_{n+1}(Va)=pW_n(a)=W_n(pa).
> $$
> Universal injectivity gives $\Phi Va=pa$. Reducing the integral coordinate identities in characteristic $p$ replaces $\Phi$ by the coordinate map $F$, and gives $FVa=pa$. Finally $F$ and $V$ commute visibly on coordinates, so $VFa=FVa=pa$. Here $pa$ means adding the Witt vector $a$ to itself $p$ times; it does not mean multiplying its coordinates by zero in $k$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 5, printed p. 134, PDF p. 153].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
