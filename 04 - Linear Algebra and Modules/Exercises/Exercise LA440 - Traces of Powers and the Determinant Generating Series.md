---
title: "Exercise LA440: Traces of Powers and the Determinant Generating Series"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - formal-power-series
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 24, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA440: Traces of Powers and the Determinant Generating Series

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 24
> Let $V$ be a finite dimensional vector space over a field $k$. Let $A$ be an endomorphism of $V$. Let $\operatorname{Tr}(A^m)$ be the trace of $A^m$ as an endomorphism of $V$. Show that the following power series in the variable $t$ are equal:
>
> $$
> \exp\left(\sum_{m=1}^{\infty}-\operatorname{Tr}(A^m)\frac{t^m}{m}\right)
> =\det(I-tA)
> \quad\text{or}\quad
> -\frac{d}{dt}\log\det(I-tA)
> =\sum_{m=1}^{\infty}\operatorname{Tr}(A^m)t^m.
> $$
>
> Compare with Exercise 23 of Chapter XVIII.

> [!warning] Source issues: characteristic and the power of $t$
> The page prints $t^m$ on the right of the derivative formula. Differentiation of the preceding expression gives $t^{m-1}$ there. Equivalently, retain $t^m$ and multiply the derivative on the left by $t$. Also, the ordinary formal logarithm and exponential, with coefficients $1/m$ and $1/m!$, require characteristic $0$ for these unrestricted formulas over a field. The exponential identity is proved below for $\operatorname{char}k=0$. In every characteristic, the valid statement is the quotient identity
>
> $$
> -\frac{\frac{d}{dt}\det(I-tA)}{\det(I-tA)}
> =\sum_{m=1}^{\infty}\operatorname{Tr}(A^m)t^{m-1}.
> $$
>
> The quotient is defined in $k[[t]]$ because the determinant has constant term $1$.

## Hints

> [!hint]- Hint 1: Work over an algebraic closure
> Put $A$ in upper triangular form over an algebraic closure. If its diagonal entries are $\lambda_1,\ldots,\lambda_n$, then $\operatorname{Tr}(A^m)=\sum_i\lambda_i^m$ and $\det(I-tA)=\prod_i(1-\lambda_i t)$.

> [!hint]- Hint 2: Differentiate the product before integrating
> Compute the logarithmic derivative as a quotient and expand $(1-\lambda_i t)^{-1}$ geometrically. In characteristic $0$, integration with zero constant term gives the formal logarithm.

## Solution

> [!success]- Independent solution with the source issues corrected explicitly
> Let $n=\dim_kV$, and extend scalars to an algebraic closure $\overline k$. Trace and determinant are given by polynomials in the matrix entries, so this does not change their values. An endomorphism over $\overline k$ has an upper triangular matrix: choose an eigenvector, pass to the induced map on the quotient by its invariant line, and induct on dimension, lifting a triangularizing basis of the quotient. The eigenvector exists because a positive-degree characteristic polynomial has a root.
>
> Let $\lambda_1,\ldots,\lambda_n$ be the diagonal entries in such a basis, including multiplicities. Powers of an upper triangular matrix have diagonal entries $\lambda_i^m$, hence
>
> $$
> s_m:=\operatorname{Tr}(A^m)=\sum_{i=1}^n\lambda_i^m,
> \qquad f(t):=\det(I-tA)=\prod_{i=1}^n(1-\lambda_i t).
> $$
>
> Formal differentiation and the product rule give, in every characteristic,
>
> $$
> -\frac{f'(t)}{f(t)}
> =\sum_{i=1}^n\frac{\lambda_i}{1-\lambda_i t}
> =\sum_{i=1}^n\sum_{r=0}^{\infty}\lambda_i^{r+1}t^r
> =\sum_{m=1}^{\infty}s_m t^{m-1}.
> $$
>
> Every denominator here has constant term $1$, so all inverses exist as formal series. Each coefficient involves only a finite sum over $i$, making the rearrangement legitimate. Both sides belong to $k[[t]]$; their equality in $\overline k[[t]]$ therefore proves their equality over $k$ itself. Multiplying by $t$ gives the alternative formula $-tf'(t)/f(t)=\sum_{m\ge1}s_m t^m$.
>
> Now assume $\operatorname{char}k=0$. For $u\in tk[[t]]$ define
>
> $$
> \log(1+u)=\sum_{r=1}^{\infty}\frac{(-1)^{r+1}u^r}{r},
> \qquad \exp(u)=\sum_{r=0}^{\infty}\frac{u^r}{r!}.
> $$
>
> These compositions are defined coefficient by coefficient because $u$ has zero constant term. Their formal differentiation rules give $(\log f)'=f'/f$. The quotient identity, together with $f(0)=1$, yields
>
> $$
> \log f(t)=-\sum_{m=1}^{\infty}s_m\frac{t^m}{m}.
> $$
>
> Indeed, the two sides have equal derivatives and zero constant terms, and in characteristic $0$ those two data determine a formal series. Exponential and logarithm are inverse formal series, so exponentiating gives the first printed identity. Alternatively, this inverse relation follows by differentiating $\exp(\log f)/f$: its derivative is zero and its constant term is $1$, hence it is the constant series $1$.
>
> The printed derivative identity already fails for a one-dimensional $A=I$ over $\mathbb Q$: its left side is $1/(1-t)$ while its printed right side is $t/(1-t)$. In characteristic $p>0$, take $A=I$ on $k^p$. Then every $s_m=p=0$ in $k$, but $f(t)=(1-t)^p=1-t^p$ is nonconstant. Thus traces and the quotient identity do not recover the determinant by characteristic-$0$ integration in general. For $V=0$, the determinant is $1$, all traces are $0$, and the stated valid identities remain true.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 24, printed p. 570, PDF p. 585], checked on the page image, including the printed derivative exponent. The proof and counterexamples are independent; the additional characteristic hypothesis and corrected exponent are explicitly identified.
- **Proof inputs:** Basic formal-series arithmetic, the formal product and chain rules, and the determinant criterion for an eigenvalue are used. The required triangularization and the characteristic-$0$ integration step are explained above. No analytic convergence is asserted or needed.
- **Source cross-reference:** The printed comparison with Chapter XVIII, Exercise 23 is preserved as a source cross-reference; that later exercise is not needed or verified as a proof input here.
