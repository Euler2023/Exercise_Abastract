---
title: 'Exercise R380: Integral Universal Polynomials for Witt Addition and Multiplication'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 2, printed p. 134, PDF p. 153
source_refs:
- S4/ch-II/sec-4/ex-2
created: '2026-10-23'
---

# Exercise R380: Integral Universal Polynomials for Witt Addition and Multiplication

## Problem Statement

> [!question] Neukirch II.4.2
> Let $X_0,X_1,\ldots$ be an infinite sequence of unknowns, $p$ a fixed prime, and $W_n=X_0^{p^n}+pX_1^{p^{n-1}}+\cdots+p^nX_n$, $n\ge0$. Show there exist $S_0,S_1,\ldots;P_0,P_1,\ldots\in\mathbb Z[X_0,X_1,\ldots;Y_0,Y_1,\ldots]$ such that
> $$
> W_n(S)=W_n(X)+W_n(Y),\qquad W_n(P)=W_n(X)W_n(Y).
> $$

## Hints

> [!hint]- Hint 1
> The triangular equations determine rational polynomials recursively; the issue is integrality.

> [!hint]- Hint 2
> Use the endomorphism $\phi$ sending every variable to its $p$-th power. A sequence $g_n$ is a ghost sequence precisely when $g_n\equiv\phi(g_{n-1})\pmod{p^n}$.

## Solution

> [!success]- Independent derivation and stated source corrections
> Work in the torsion-free polynomial ring $R=\mathbb Z[X_0,X_1,\ldots,Y_0,Y_1,\ldots]$, with $\phi$ fixing integers and raising each variable to its $p$-th power. Fermat's theorem gives $\phi(a)\equiv a^p\pmod p$ for every $a\in R$. We use the elementary binomial fact that $u\equiv v\pmod p$ implies $u^{p^r}\equiv v^{p^r}\pmod{p^{r+1}}$, proved by iterating $(v+p^kh)^p\equiv v^p\pmod{p^{k+1}}$ for $k\ge1$.
>
> **Ghost criterion.** A sequence $g_n\in R$ equals $W_n(a_0,a_1,\ldots)$ for uniquely determined $a_i\in R$ if and only if
> $$
> g_n\equiv\phi(g_{n-1})\pmod{p^n}\quad(n\ge1).
> $$
> Necessity follows termwise: for $i<n$, $a_i^{p^{n-i}}$ and $\phi(a_i)^{p^{n-1-i}}$ differ by a multiple of $p^{n-i}$, which becomes divisible by $p^n$ after multiplication by $p^i$. The remaining term is $p^na_n$. Conversely, having found $a_0,\ldots,a_{n-1}$, compare $\sum_{i<n}p^ia_i^{p^{n-i}}$ with $\phi(g_{n-1})$ by the same argument. The congruence implies that
> $$
> a_n=p^{-n}\left(g_n-\sum_{i<n}p^ia_i^{p^{n-i}}\right)
> $$
> belongs to $R$. This proves existence and uniqueness inductively, starting with $a_0=g_0$.
>
> The two sequences $W_n(X)$ and $W_n(Y)$ satisfy the criterion, since $W_n(X)-\phi(W_{n-1}(X))=p^nX_n$, and similarly for $Y$. Their sums and products satisfy it as well, because congruences are preserved by addition and multiplication and $\phi$ is a ring endomorphism. The criterion therefore produces the required integral $S_n,P_n$. For example $S_0=X_0+Y_0$, $P_0=X_0Y_0$, and $S_1=X_1+Y_1-( (X_0+Y_0)^p-X_0^p-Y_0^p)/p$; the binomial coefficients make the last expression integral. Each coordinate involves only finitely many variables, through index $n$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §4, Exercise 2, printed p. 134, PDF p. 153].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
