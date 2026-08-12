---
title: "Exercise R19: Translation Orbits as an Invariant Ring Basis"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - invariant-theory
source: "Alibaba Global Mathematics Competition 2021 Final, Problem 2 (user-supplied image; English translation)"
created: 2026-08-12
---

# Exercise R19: Translation Orbits as an Invariant Ring Basis

## Problem Statement

> [!question] Problem 2
> Let $p$ be a prime and let $\mathbb{F}_p$ be the field with $p$ elements. Define an automorphism $\tau$ of the polynomial ring $\mathbb{F}_p[x]$ by
>
> $$
> \tau(f)(x)=f(x+1).
> $$
>
> Let
>
> $$
> R=\{f\in\mathbb{F}_p[x]:\tau(f)=f\}
> $$
>
> be the invariant subring. Find a polynomial $g\in\mathbb{F}_p[x]$ such that
>
> $$
> g,\tau(g),\ldots,\tau^{p-1}(g)
> $$
>
> form a basis of $\mathbb{F}_p[x]$ as an $R$-module.

## Hints

> [!hint]- Hint 1
> The polynomial $t=x^p-x$ is fixed by $\tau$.

> [!hint]- Hint 2
> Regard $\mathbb{F}_p[x]$ as a module over $\mathbb{F}_p[t]$ and use the relation $x^p=x+t$.

> [!hint]- Hint 3
> Try $g=x^{p-1}$. Expand $(x+a)^{p-1}$ for $a\in\mathbb{F}_p$ and recognize a Vandermonde matrix.

## Solution

> [!success]- Solution
> Put
>
> $$
> t=x^p-x.
> $$
>
> In characteristic $p$,
>
> $$
> (x+1)^p-(x+1)=x^p+1-x-1=x^p-x,
> $$
>
> so $t$ is fixed by $\tau$. We first prove that
>
> $$
> R=\mathbb{F}_p[t].
> $$
>
> Since $t$ is monic of degree $p$, repeated division by $t$ gives a unique decomposition
>
> $$
> f(x)=\sum_{j=0}^{p-1}a_j(t)x^j,
> \qquad
> a_j(t)\in\mathbb{F}_p[t].
> $$
>
> Thus $1,x,\ldots,x^{p-1}$ form a basis of $\mathbb{F}_p[x]$ over $\mathbb{F}_p[t]$. Suppose that $f$ is fixed by $\tau$, and let $j>0$ be maximal with $a_j\neq0$. Because $t$ is fixed,
>
> $$
> \tau(f)-f
> =\sum_{r=0}^{p-1}a_r(t)\bigl((x+1)^r-x^r\bigr).
> $$
>
> For $1\leq r\leq p-1$, the highest power of $x$ in $(x+1)^r-x^r$ is $x^{r-1}$ with coefficient $r$, which is nonzero in $\mathbb{F}_p$. Hence the coefficient of $x^{j-1}$ contributed by the maximal term is $j a_j(t)\neq0$, a contradiction. Therefore every invariant has $a_j=0$ for $j>0$, proving $R=\mathbb{F}_p[t]$.
>
> Now take
>
> $$
> g=x^{p-1}.
> $$
>
> Since $\tau^a(f)(x)=f(x+a)$ for $a\in\mathbb{F}_p$, its orbit is
>
> $$
> \tau^a(g)=(x+a)^{p-1},
> \qquad
> a\in\mathbb{F}_p.
> $$
>
> Express these $p$ polynomials in the $R$-basis $1,x,\ldots,x^{p-1}$. Their coefficient matrix is
>
> $$
> C_{r,a}=\binom{p-1}{r}a^{p-1-r},
> \qquad
> 0\leq r\leq p-1,quad a\in\mathbb{F}_p.
> $$
>
> Every row factor is nonzero because
>
> $$
> \binom{p-1}{r}\equiv(-1)^r\pmod p.
> $$
>
> After reversing the rows and removing these nonzero factors, $C$ becomes the Vandermonde matrix $(a^r)$. Its determinant is
>
> $$
> \prod_{a<b}(b-a),
> $$
>
> which is nonzero because the elements of $\mathbb{F}_p$ are distinct. Thus $C$ is invertible over $\mathbb{F}_p$, and hence over $R$.
>
> Consequently
>
> $$
> x^{p-1},(x+1)^{p-1},\ldots,(x+p-1)^{p-1}
> $$
>
> form an $R$-basis of $\mathbb{F}_p[x]$. Therefore $g=x^{p-1}$ is a valid answer.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Subrings|Subrings]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- The problem statement is an English translation of the user-supplied image; the screenshot contains only text and formulas, so it is not retained as an attachment.
- The solution is independently derived. No classification theorem for invariant rings is imported: both $R=\mathbb{F}_p[x^p-x]$ and the orbit-basis assertion are proved directly.

