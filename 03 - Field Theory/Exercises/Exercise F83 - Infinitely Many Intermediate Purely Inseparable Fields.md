---
title: "Exercise F83: Infinitely Many Intermediate Purely Inseparable Fields"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 24, printed p. 255, PDF p. 270"
created: 2026-09-06
---

# Exercise F83: Infinitely Many Intermediate Purely Inseparable Fields

## Problem Statement

> [!question] Lang, Chapter V, Exercise 24
> Let $k$ be a field of characteristic $p$ and let $t,u$ be algebraically independent over $k$. Prove the following:
>
> (a) $k(t,u)$ has degree $p^2$ over $k(t^p,u^p)$.
>
> (b) There exist infinitely many extensions between $k(t,u)$ and $k(t^p,u^p)$.

## Hints

> [!hint]- Hint 1
> Use the monomials $t^iu^j$ with $0\le i,j<p$.

> [!hint]- Hint 2
> For $c$ in the infinite base field $K=k(t^p,u^p)$, consider $K(t+cu)$.

## Solution

> [!success]- Solution and proof status
> Set $K=k(t^p,u^p)$ and $E=k(t,u)$.
>
> **(a)** The $p^2$ monomials $t^iu^j$, $0\le i,j<p$, are linearly independent over $K$. Indeed, clearing denominators in a relation gives a polynomial identity
> $$
> \sum_{0\le i,j<p}P_{ij}(t^p,u^p)t^iu^j=0,\qquad P_{ij}\in k[T,U].
> $$
> The summands use disjoint pairs of exponent residues modulo $p$, so algebraic independence forces every $P_{ij}$ to be zero.
>
> Their $K$-span is closed under multiplication because $t^p,u^p\in K$. It is a finite-dimensional domain, hence a field by injectivity and surjectivity of multiplication by a nonzero element. It contains $K,t,u$, so equals $E$. Thus the monomials form a basis and $[E:K]=p^2$.
>
> **(b)** For every $c\in K$, put $v_c=t+cu$ and $M_c=K(v_c)$. Its $p$th power is in $K$, whereas basis independence gives $v_c\notin K$. Its purely inseparable minimal polynomial therefore has degree $p$ (the one-root minimal-polynomial argument of V.15), so $[M_c:K]=p$.
>
> If $c\ne d$ and $M_c=M_d$, then
> $$
> u=\frac{v_c-v_d}{c-d}\in M_c,\qquad t=v_c-cu\in M_c.
> $$
> This would give $M_c=E$, contradicting $p\ne p^2$. Therefore the $M_c$ are distinct proper intermediate fields. The field $K$ is infinite even when $k$ is finite, since $t^p$ is transcendental over $k$.

## Related Concepts

- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 24, printed p. 255, PDF p. 270]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
