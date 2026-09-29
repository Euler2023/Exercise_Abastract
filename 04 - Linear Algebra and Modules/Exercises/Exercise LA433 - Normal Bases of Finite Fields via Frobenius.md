---
title: "Exercise LA433: Normal Bases of Finite Fields via Frobenius"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - normal-basis
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 17, printed p. 569, PDF p. 584"
created: 2026-09-29
---

# Exercise LA433: Normal Bases of Finite Fields via Frobenius

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 17
> Prove the normal basis theorem for finite extensions of a finite field.
>
> **Expanded meaning:** If $k=\mathbb F_q$ and $K/k$ has degree $n$, prove that there is $\alpha\in K$ such that
> $$
> \alpha,\alpha^q,\ldots,\alpha^{q^{n-1}}
> $$
> is a $k$-basis of $K$.

## Hints

> [!hint]- Hint 1: Regard Frobenius as one linear operator
> Let $\sigma(x)=x^q$. To show its minimal polynomial has degree $n$, turn an equation $\sum_{i=0}^d c_i\sigma^i=0$ into a polynomial vanishing on every element of $K$.

> [!hint]- Hint 2: Compare degree with dimension
> A nonzero polynomial $\sum_{i=0}^d c_i X^{q^i}$ with $d<n$ cannot have $q^n$ distinct roots. Then use the invariant-factor decomposition: its largest factor already has degree $\dim_kK$.

## Solution

> [!success]- Independent derivation
> Let $[K:k]=n\ge1$, so $K$ has $q^n$ elements. The map $\sigma(x)=x^q$ is additive in characteristic $p$ and fixes every element of $k$, hence is $k$-linear. It is injective, so bijective on the finite set $K$. Lagrange's theorem in $K^\times$ gives $x^{q^n}=x$ for every $x\in K$, including zero. Thus $\sigma^n=I$, and the monic minimal polynomial $m_\sigma(T)$ divides $T^n-1$.
>
> Suppose a nonzero polynomial $h(T)=\sum_{i=0}^d c_iT^i\in k[T]$ of degree $d<n$ annihilates $\sigma$. Then
> $$
> H(X)=\sum_{i=0}^d c_iX^{q^i}
> $$
> vanishes at every $x\in K$. Its exponents are distinct and $c_d\ne0$, so $H$ is nonzero of degree $q^d<q^n$. This contradicts the root bound for a polynomial over a field. Consequently $\deg m_\sigma=n$, and $m_\sigma(T)=T^n-1$.
>
> Apply the invariant-factor theorem for one endomorphism, Lang XIV Theorem 2.1, to $K$ with $T$ acting by $\sigma$. It gives
> $$
> K\simeq\bigoplus_{j=1}^r k[T]/(q_j),
> \qquad q_1\mid\cdots\mid q_r,\qquad q_r=m_\sigma,
> $$
> with each $q_j$ monic of positive degree. Since
> $$
> n=\dim_k K=\sum_{j=1}^r\deg q_j
> \quad\text{and}\quad\deg q_r=n,
> $$
> there is only one summand. The image $\alpha$ of $1\in k[T]/(T^n-1)$ is a cyclic vector, and the images of $1,T,\ldots,T^{n-1}$ give the required basis.
>
> To verify that these are all the Galois conjugates, note that $K$ is the splitting field of $X^{q^n}-X$ over $k$: all its $q^n$ elements are roots and the polynomial has derivative $-1$. Hence $K/k$ is Galois. The order of $\sigma$ is exactly $n$, for otherwise $T^d-1$ would annihilate it with $d<n$. Since a degree-$n$ field extension has at most $n$ distinct $k$-automorphisms, its Galois group is precisely $\langle\sigma\rangle$. The basis above is therefore a normal basis.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[05 - Galois Theory/Concepts/Normal Basis Theorem|Normal Basis Theorem]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Finite Fields Galois]]

## Notes

- **Source and proof status:** The one-sentence exercise was checked on [S2, Ch. XIV, Ex. 17, printed p. 569, PDF p. 584]. The expanded statement and proof here are independently supplied; the normal basis theorem is not assumed in its own proof.
- **Imported input:** [S2, Ch. XIV, §2, Theorem 2.1, printed p. 557, PDF p. 572], visually verified, supplies the cyclic invariant-factor decomposition. Polynomial root bounds, Lagrange's theorem, and the bound on the number of field embeddings are elementary prior inputs.
- **Routing:** The decisive step is the minimal polynomial and cyclic-vector criterion for the Frobenius operator, so the note belongs in Linear Algebra and Modules and cross-links the Galois concepts.
- No assumption that $\operatorname{char}k$ is coprime to $n$ is made. If the characteristic divides $n$, $T^n-1$ has repeated roots, but the cyclic-module argument still works.
