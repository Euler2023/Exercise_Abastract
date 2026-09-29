---
title: "Exercise LA425: Nilpotence Detected by Traces of Powers"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - trace
  - nilpotent-matrices
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 9, printed p. 568, PDF p. 583"
created: 2026-09-29
---

# Exercise LA425: Nilpotence Detected by Traces of Powers

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 9
> Let $k$ be a field of characteristic $0$, and let $M$ be an $n\times n$ matrix in $k$. Show that $M$ is nilpotent if and only if $\operatorname{tr}(M^\nu)=0$ for $1\leq\nu\leq n$.

## Hints

> [!hint]- Hint 1: Compare powers with symmetric functions
> Over an algebraic closure, let $\lambda_1,\ldots,\lambda_n$ be the eigenvalues counted with algebraic multiplicity. Then $\operatorname{tr}(M^\nu)=\sum_i\lambda_i^\nu$.

> [!hint]- Hint 2: Recover the characteristic coefficients
> Differentiate $D(z)=\prod_i(1-\lambda_i z)$ formally. Compare coefficients in $-zD'(z)=D(z)\sum_{\nu\geq1}(\sum_i\lambda_i^\nu)z^\nu$.

## Solution

> [!success]- Solution
> If $M$ is nilpotent, every positive power $M^\nu$ is nilpotent. Exercise LA422 then gives $\operatorname{tr}(M^\nu)=0$ for every $\nu\geq1$.
>
> Conversely, suppose the stated first $n$ traces vanish. Work in an algebraic closure $\overline k$, and list the roots $\lambda_1,\ldots,\lambda_n$ of $P_M(t)$ with algebraic multiplicity. By Lang's Theorem 3.10 applied to the polynomial $t^\nu$ over $\overline k$,
>
> $$
> s_\nu:=\sum_{i=1}^n\lambda_i^\nu=\operatorname{tr}(M^\nu).
> $$
>
> Define
>
> $$
> D(z)=\prod_{i=1}^n(1-\lambda_i z)=1+c_1z+\cdots+c_nz^n.
> $$
>
> Each factor has constant term $1$ and is invertible in the formal power-series ring over $\overline k$. Formal differentiation and geometric-series expansion give
>
> $$
> -\frac{zD'(z)}{D(z)}
> =\sum_{i=1}^n\frac{\lambda_i z}{1-\lambda_i z}
> =\sum_{\nu\geq1}s_\nu z^\nu.
> $$
>
> Multiplying by $D(z)$ and comparing the coefficient of $z^m$, for $1\leq m\leq n$, yields the Newton recursion
>
> $$
> -m c_m=s_m+c_1s_{m-1}+\cdots+c_{m-1}s_1.
> $$
>
> Every term on the right is zero by hypothesis. Since $k$ has characteristic zero, $m$ is a nonzero field element and can be cancelled, giving $c_m=0$ for every $1\leq m\leq n$. Therefore
>
> $$
> P_M(t)=\prod_{i=1}^n(t-\lambda_i)
> =t^n+c_1t^{n-1}+\cdots+c_n=t^n.
> $$
>
> Cayley–Hamilton now gives $M^n=0$. This matrix equation over $\overline k$ is also an equation over $k$, because the field embedding is injective. Thus $M$ is nilpotent. The zero-dimensional case is immediate.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA422 - Nilpotent Endomorphisms Have Zero Trace|Exercise LA422]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 9, printed p. 568, PDF p. 583]. The characteristic-zero hypothesis and the range $1\leq\nu\leq n$ were checked visually. The proof is independent. The spectral trace formula is the field case of [S2, Ch. XIV, Theorem 3.10, printed pp. 566–567, PDF pp. 581–582], also checked on the original images. Newton's recursion is derived above; Cayley–Hamilton is a named prior input.
- **Boundary:** The same proof works in characteristic $p>n$. The unrestricted positive-characteristic assertion is false: $M=I_p$ over $\mathbb F_p$ has $\operatorname{tr}(M^\nu)=p=0$ for every positive $\nu$, but is not nilpotent.
