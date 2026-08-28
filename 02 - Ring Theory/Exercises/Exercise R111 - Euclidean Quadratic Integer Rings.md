---
title: "Exercise R111: Euclidean Quadratic Integer Rings"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - euclidean-domains
  - quadratic-integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 2, Unique Factorization Domains, Ex. 2.6, printed p. 379, PDF p. 391"
created: 2026-08-28
---

# Exercise R111: Euclidean Quadratic Integer Rings

## Problem Statement

> [!question] Exercise 2.6
> Prove that the following rings are Euclidean domains:
>
> **(a)** $\mathbb Z[\omega]$, where $\omega=e^{2\pi i/3}$;
>
> **(b)** $\mathbb Z[\sqrt{-2}]$.

## Hints

> [!hint]- Hint 1
> Use the complex norm $N(z)=z\overline z$ and approximate the two real coordinates of a quotient by nearest integers.

> [!hint]- Hint 2
> For $\mathbb Z[\omega]$, bound $u^2-uv+v^2$ when $|u|,|v|\le1/2$. For $\mathbb Z[\sqrt{-2}]$, bound $u^2+2v^2$ on the same square.

## Solution

> [!success]- Solution
> In both rings the norm is a nonnegative integer on nonzero ring elements and is multiplicative.
>
> **(a)** Since $\omega^2+\omega+1=0$ and $\overline\omega=\omega^2$,
>
> $$
> N(a+b\omega)
> =(a+b\omega)(a+b\overline\omega)
> =a^2-ab+b^2.
> $$
>
> Let $\alpha,\beta\in\mathbb Z[\omega]$ with $\beta\neq0$, and write
>
> $$
> \frac{\alpha}{\beta}=u+v\omega
> $$
>
> with $u,v\in\mathbb R$. Choose integers $m,n$ nearest to $u,v$ and put $q=m+n\omega$. Then $|u-m|,|v-n|\le1/2$. If $\delta=(u-m)+(v-n)\omega$, then
>
> $$
> N(\delta)
> =(u-m)^2-(u-m)(v-n)+(v-n)^2
> \le\frac34<1.
> $$
>
> Set $r=\alpha-\beta q=\beta\delta$. If $r\neq0$, multiplicativity gives
>
> $$
> N(r)=N(\beta)N(\delta)<N(\beta).
> $$
>
> Thus division with remainder is possible using $N$.
>
> **(b)** For $a,b\in\mathbb Z$,
>
> $$
> N(a+b\sqrt{-2})=a^2+2b^2.
> $$
>
> Write $\alpha/\beta=u+v\sqrt{-2}$ and choose nearest integers $m,n$. With $q=m+n\sqrt{-2}$ and $\delta=\alpha/\beta-q$,
>
> $$
> N(\delta)=(u-m)^2+2(v-n)^2
> \le\frac14+\frac12=\frac34<1.
> $$
>
> Hence $r=\alpha-\beta q$ is either zero or satisfies $N(r)<N(\beta)$. Therefore both rings are Euclidean domains.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Routing:** Ring Theory is primary because the proof establishes the Euclidean-domain axiom via multiplicative norms.
- **Method boundary:** The nearest-coordinate estimates prove existence of a quotient; they do not assert that the quotient is unique.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.2, Ex. 2.6, printed p. 379, PDF p. 391]. The proof is independent.

