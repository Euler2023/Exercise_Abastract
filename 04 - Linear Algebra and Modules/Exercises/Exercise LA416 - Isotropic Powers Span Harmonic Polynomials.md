---
title: "Exercise LA416: Isotropic Powers Span Harmonic Polynomials"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - harmonic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 34, printed p. 551, PDF p. 566"
created: 2026-09-26
---

# Exercise LA416: Isotropic Powers Span Harmonic Polynomials

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 34 (continuation of Exercise 33)
> Let $k$ be algebraically closed of characteristic $0$, and let $n\ge3$. Prove that $\operatorname{Har}(n,d)$ is spanned over $k$ by the polynomials
>
> $$
> H_c^d(X)=(c_1X_1+\cdots+c_nX_n)^d,
> \qquad c\in k^n,\quad \sum_i c_i^2=0.
> $$
>
> **Printed hint.** If $Q\in\operatorname{Har}(n,d)$ is orthogonal to every such $H_c^d$, use Exercise 33(h) to show that $r^2\mid Q$. Exercise 33(j) gives $Q(c)=0$ on the zero set of $r^2$; the Hilbert Nullstellensatz gives $Q^s=r^2F$ for some $s>0$. Since $n\ge3$, $r^2$ is irreducible, so $r^2\mid Q$.

## Hints

> [!hint]- Hint 1
> Let $W$ be the span of the indicated powers. Exercise 33(i) puts $W$ inside $\operatorname{Har}(n,d)$. Test the orthogonal complement of $W$ within that space.

> [!hint]- Hint 2
> For $Q$ of degree $d$, the Fischer pairing gives $\langle Q,H_c^d\rangle=d!Q(c)$. Thus an orthogonal $Q$ vanishes on the isotropic quadric.

> [!hint]- Hint 3
> The quadratic polynomial $r^2=\sum_iX_i^2$ is irreducible for $n\ge3$. Apply the Nullstellensatz, then the direct sum from Exercise 33(h).

## Solution

> [!success]- Independently expanded solution of the printed proof route
> Put $r^2=\sum_{i=1}^nX_i^2$ and $W=\operatorname{span}_k\{H_c^d:r^2(c)=0\}$. Exercise 33(i), proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA415 - Fischer Pairing and Harmonic Decomposition|Exercise LA415]], gives $W\subseteq\operatorname{Har}(n,d)$.
>
> Let $Q\in\operatorname{Har}(n,d)$ be orthogonal to $W$ for the Fischer pairing. For any isotropic $c$, Exercise 33(j) with $m=d$ gives
>
> $$
> 0=\langle Q,H_c^d\rangle
> =Q(D)H_c^d(0)=d!Q(c).
> $$
>
> Characteristic $0$ makes $d!\ne0$, so $Q(c)=0$ whenever $r^2(c)=0$. By the Hilbert Nullstellensatz, $Q\in\sqrt{(r^2)}$: there are $s\ge1$ and $F\in k[X_1,\ldots,X_n]$ with $Q^s=r^2F$.
>
> We justify the irreducibility used in the source hint. A homogeneous quadratic factors nontrivially only as a product of two linear forms. The symmetric matrix of such a product has rank at most $2$, while the matrix of $r^2$ is the identity and has rank $n\ge3$. Thus $r^2$ is irreducible. Since $k[X_1,\ldots,X_n]$ is a unique factorization domain, this irreducible polynomial is prime. From $r^2\mid Q^s$ it follows that $r^2\mid Q$.
>
> As $Q$ is homogeneous, the quotient has degree $d-2$ when $d\ge2$. If $d<2$, the divisibility forces $Q=0$. In either case $Q\in\operatorname{Har}(n,d)\cap r^2\operatorname{Pol}(n,d-2)$, which is zero by the direct decomposition in Exercise 33(h). Therefore the orthogonal complement of $W$ inside $\operatorname{Har}(n,d)$ is zero.
>
> The Fischer pairing is non-degenerate on $\operatorname{Har}(n,d)$: Exercise 33(h) splits the whole non-degenerate polynomial space as an orthogonal direct sum with $r^2\operatorname{Pol}(n,d-2)$. In a finite-dimensional non-degenerate space, a subspace with zero orthogonal complement is the whole space. Hence $W=\operatorname{Har}(n,d)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Exercises/Exercise LA415 - Fischer Pairing and Harmonic Decomposition|Exercise LA415]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- **Source and proof status:** The theorem and full hint were checked on [S2, Ch. XIII, Ex. 34, printed p. 551, PDF p. 566]. The source states the Nullstellensatz route; the divisibility and orthogonal-complement steps are expanded independently here. The Hilbert Nullstellensatz is a named external standard input, not proved in this note.
- **Scope:** The original page reads $n\ge3$, not $n>3$. Both algebraic closure and characteristic $0$ are used; the former supports the Nullstellensatz step and the latter makes $d!$ invertible.
