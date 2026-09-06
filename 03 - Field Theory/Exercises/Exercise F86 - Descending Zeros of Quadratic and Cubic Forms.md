---
title: "Exercise F86: Descending Zeros of Quadratic and Cubic Forms"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 28, printed p. 256, PDF p. 271"
created: 2026-09-06
---

# Exercise F86: Descending Zeros of Quadratic and Cubic Forms

## Problem Statement

> [!question] Lang, Chapter V, Exercise 28
> Let $f(X_1,\ldots,X_n)$ be a homogeneous polynomial of degree $2$ (resp. $3$) over a field $k$. Show that if $f$ has a non-trivial zero in an extension of odd degree (resp. degree $2$) over $k$, then $f$ has a non-trivial zero in $k$.

## Hints

> [!hint]- Hint 1
> For a quadratic form, use a smallest odd-degree simple extension admitting a zero and compare polynomial degrees.

> [!hint]- Hint 2
> For a cubic form over a quadratic extension $k(\theta)$, write a zero as $a+\theta b$ with $a,b\in k^n$.

## Solution

> [!success]- Solution and proof status
> A nontrivial zero means a vector not all of whose coordinates vanish. No restriction on characteristic is imposed.
>
> **Quadratic forms: simple odd-degree extensions.** Suppose a quadratic form $q$ is anisotropic over $k$, meaning that $q(v)=0$ for $v\in k^n$ forces $v=0$, but becomes isotropic over a simple odd-degree extension. Choose such an extension $k(\theta)$ of smallest odd degree $m$, and let $p(T)$ be the monic irreducible polynomial of $\theta$.
>
> Represent a nonzero isotropic vector by $v_i(\theta)$ with $v_i\in k[T]$ of degree less than $m$. Divide the $v_i$ by their polynomial gcd; this does not destroy isotropy because that gcd, having degree less than $m$, is nonzero at $\theta$. Hence assume $\gcd(v_1,\ldots,v_n)=1$. Let $r=\max_i\deg v_i$. Their leading coefficient vector at degree $r$ is nonzero. Anisotropy over $k$ implies its value under $q$ is nonzero, so
> $$
> \deg q(v_1(T),\ldots,v_n(T))=2r.
> $$
> This polynomial vanishes at $\theta$, hence equals $p(T)h(T)$ with $h\ne0$. Thus
> $$
> \deg h=2r-m
> $$
> is odd and satisfies $1\le\deg h\le m-2$. Some irreducible factor $s(T)$ of $h$ has odd degree. Reducing the vector $(v_i)$ modulo $s$ gives a nonzero isotropic vector over the field $k[T]/(s)$: it is nonzero because $s$ cannot divide all $v_i$, and $q(v)=ph$ vanishes modulo $s$. This contradicts minimality of $m$. Therefore anisotropy survives every simple odd-degree extension.
>
> **Arbitrary finite odd-degree extensions.** Write the extension as a finite tower obtained by adjoining one algebraic element at a time. Each step has odd degree by the tower law. Apply the simple-extension result successively: anisotropy persists at each step. Taking the contrapositive proves the quadratic assertion for the given extension.
>
> **Cubic forms over quadratic extensions.** Let $E=k(\theta)$ have degree two and write a nonzero zero as $a+\theta b$, with $a,b\in k^n$. If $a,b$ are linearly dependent, this vector is a nonzero scalar multiple of a nonzero vector in $k^n$; homogeneity gives a nontrivial zero over $k$.
>
> Assume $a,b$ independent. If $f(b)=0$, we are done. Otherwise
> $$
> H(T)=f(a+Tb)\in k[T]
> $$
> has degree three, with leading coefficient $f(b)\ne0$. Since $H(\theta)=0$, the quadratic minimal polynomial of $\theta$ divides $H$, leaving a linear factor over $k$. Let $c\in k$ be its root. Then $f(a+cb)=0$ and $a+cb\ne0$ by independence. This proves the assertion even for inseparable quadratic extensions in characteristic two.

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]

## Notes

- **Routing:** Field Theory is primary: the argument descends roots through minimal polynomials and extension degrees, and the quadratic and cubic cases form one numbered exercise.
- **Proof boundary:** The quadratic assertion is the odd-degree isotropy theorem often called Springer’s theorem. The needed result is proved above, rather than imported as an unexplained standard input.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 28, printed p. 256, PDF p. 271]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
