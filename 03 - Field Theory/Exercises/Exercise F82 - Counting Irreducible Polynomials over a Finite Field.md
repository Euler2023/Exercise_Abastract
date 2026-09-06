---
title: "Exercise F82: Counting Irreducible Polynomials over a Finite Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 22, printed pp. 254-255, PDF pp. 269-270"
created: 2026-09-06
---

# Exercise F82: Counting Irreducible Polynomials over a Finite Field

## Problem Statement

> [!question] Lang, Chapter V, Exercise 22
> Let $k$ be a finite field with $q$ elements. Let $f(X)\in k[X]$ be irreducible. Show that $f(X)$ divides $X^{q^n}-X$ if and only if $\deg f$ divides $n$. Show the multiplication formula
> $$
> X^{q^n}-X=\prod_{d\mid n}\ \prod_{f_d\ {\rm irr}} f_d(X),
> $$
> where the inner product is over all irreducible polynomials of degree $d$ with leading coefficient $1$. Counting degrees, show that
> $$
> q^n=\sum_{d\mid n}d\psi(d),
> $$
> where $\psi(d)$ is the number of irreducible polynomials of degree $d$. Invert by Exercise 21 and find that
> $$
> n\psi(n)=\sum_{d\mid n}\mu(d)q^{n/d}.
> $$

## Hints

> [!hint]- Hint 1
> The roots of $X^{q^n}-X$ form a field with $q^n$ elements.

> [!hint]- Hint 2
> Use tower degrees for necessity and the divisibility $q^d-1\mid q^n-1$ for sufficiency.

## Solution

> [!success]- Solution and proof status
> Let $K_n$ be the roots of $X^{q^n}-X$ in an algebraic closure of $k$. The derivative is $-1$, so it has $q^n$ distinct roots. Frobenius shows that the roots are closed under addition and multiplication; a nonzero root has its inverse among them. They contain $k$, because $a^q=a$ for $a\in k$. Thus $K_n$ is a field and $[K_n:k]=n$.
>
> Let $\alpha$ be a root of the irreducible $f$ and put $d=\deg f$. Then $k(\alpha)$ has $q^d$ elements. If $f\mid X^{q^n}-X$, then $k(\alpha)\subseteq K_n$, so the tower law gives $d\mid n$.
>
> Conversely if $d\mid n$, every nonzero $\beta\in k(\alpha)$ satisfies $\beta^{q^d-1}=1$. Since $q^d-1\mid q^n-1$, all its elements satisfy $\beta^{q^n}=\beta$. In particular $\alpha$ is a root, so $f$ divides $X^{q^n}-X$.
>
> Unique factorization and the absence of repeated roots prove the displayed product over monic irreducibles. Taking degrees yields $q^n=\sum_{d\mid n}d\psi(d)$. Apply V.21 to $u(n)=q^n$ and $v(n)=n\psi(n)$:
> $$
> n\psi(n)=\sum_{d\mid n}\mu(n/d)q^d
> =\sum_{d\mid n}\mu(d)q^{n/d}.
> $$
> For example $\psi(1)=q$ and $\psi(2)=(q^2-q)/2$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion|Dirichlet Convolution and Mobius Inversion]]

## Notes

- **Counting convention:** In the source’s last two formulas, “irreducible polynomials” means monic irreducible polynomials, as specified in the preceding product. Without normalization, each has $q-1$ nonzero scalar multiples.
- **Dependency:** Möbius inversion is proved for abelian-group values in [[02 - Ring Theory/Exercises/Exercise R251 - Mobius Inversion with Abelian Group Values|V.21 / R251]].

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 22, printed pp. 254-255, PDF pp. 269-270]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
