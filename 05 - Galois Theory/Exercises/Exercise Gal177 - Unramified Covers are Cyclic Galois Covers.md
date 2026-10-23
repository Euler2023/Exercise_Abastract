---
title: 'Exercise Gal177: Unramified Covers are Cyclic Galois Covers'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 16, printed p. 309, PDF p. 328
source_refs:
- S4/ch-IV/sec-6/ex-16
created: '2026-10-23'
---

# Exercise Gal177: Unramified Covers are Cyclic Galois Covers

## Problem Statement

> [!question] Neukirch IV.6.16
> An unramified map $f:X\to Y$ of connected finite $G$-sets is Galois, and $d$ induces an isomorphism
> $$
> G(X|Y)\simeq\mathbb Z/f_{X|Y}\mathbb Z.
> $$
> Let $\varphi_{X|Y}\in G(X|Y)$ be the element which is mapped to $1\bmod f_{X|Y}\mathbb Z$.

## Hints

> [!hint]- Hint 1
> Put $H=G_x\subset K=G_y$. The condition $e=1$ is equivalent to $I_H=I_K$, so $H$ is the full preimage of $d(H)$ under $d|_K$.

> [!hint]- Hint 2
> Closed subgroups of $\widehat{\mathbb Z}$ are normal, giving $H\triangleleft K$. Compute the quotient using the normalized degree $d_K$.

## Solution

> [!success]- Independent derivation
> Let $I_K=\ker(d|_K)$ and $I_H=H\cap I_K$. By the unramified condition $[I_K:I_H]=1$, we have $I_K\subset H$. If $k\in K$ and $d(k)\in d(H)$, choose $h\in H$ with $d(h)=d(k)$. Then $kh^{-1}\in I_K\subset H$, and hence $k\in H$. Therefore
> $$
> H=(d|_K)^{-1}(d(H)).
> $$
> Since $d(K)$ is abelian, $H$ is normal in $K$. This is precisely the condition that the map $G/H\to G/K$ of transitive $G$-sets be Galois. Its deck group is isomorphic to $K/H$, using the source's convention for deck actions, and $d$ induces
> $$
> K/H\simeq d(K)/d(H).
> $$
> Write $d(K)=m_K\widehat{\mathbb Z}$ and $d(H)=m_Kf\widehat{\mathbb Z}$. Using $d_K=d/m_K$ gives
> $$
> d(K)/d(H)\simeq\widehat{\mathbb Z}/f\widehat{\mathbb Z}\simeq\mathbb Z/f\mathbb Z.
> $$
> Here $f=f_{X|Y}$. Thus the Frobenius $\varphi_{X|Y}$ is the unique element sent to $1$ by normalized degree and generates the deck group. For degree $1$, it is the identity of the trivial group, and the conclusion remains valid. The unnormalized $d$ sends a generator to $m_K$ rather than $1$; this is why the normalization $d_K$ must be specified.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Quotients]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 16, printed p. 309, PDF p. 328]. An independent stabilizer-subgroup proof. The isomorphism said to be induced by $d$ includes normalization on $G_y$.
- **Scope:** For a general ramified cover, $I_K$ need not contain $H$, so the normality and cyclicity conclusions do not extend directly.
