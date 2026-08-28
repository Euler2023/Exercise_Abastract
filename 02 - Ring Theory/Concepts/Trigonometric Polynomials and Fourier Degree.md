---
title: Trigonometric Polynomials and Fourier Degree
aliases:
  - Trigonometric Polynomial Ring
  - Trigonometric Degree
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - trigonometric-polynomials
  - fourier-series
created: 2026-08-28
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, §5 and Exercise 11, printed pp. 114-115, PDF pp. 129-130"
---

# Trigonometric Polynomials and Fourier Degree

## Definition

> [!info] Definition
> A real **trigonometric polynomial** is a function
>
> $$
> f(x)=a_0+\sum_{m=1}^n(a_m\cos mx+b_m\sin mx)
> $$
>
> with real coefficients. For $f\ne0$, its trigonometric degree is the largest $m$ for which $(a_m,b_m)\ne(0,0)$; a nonzero constant has degree $0$.

## Intuition

With $z=e^{ix}$, the identities

$$
\cos mx=\frac{z^m+z^{-m}}2,
\qquad
\sin mx=\frac{z^m-z^{-m}}{2i}
$$

identify trigonometric polynomials with Laurent polynomials satisfying a reality symmetry. Trigonometric degree is the largest absolute Laurent exponent.

## Key Properties

- The finite Fourier expression is unique.
- For nonzero $f,g$,

$$
\deg_{\mathrm{tr}}(fg)
=\deg_{\mathrm{tr}}(f)+\deg_{\mathrm{tr}}(g).
$$

- The trigonometric polynomial ring has no zero divisors.
- Its units are exactly the nonzero real constants.
- Every degree-one element is irreducible; in particular, $\sin x$ and $1-\cos x$ are irreducible.

## Examples

> [!example] Product-to-sum as multiplication
> The identity
>
> $$
> \sin^2x=(1+\cos x)(1-\cos x)
> $$
>
> is a factorization inside the trigonometric polynomial ring. Degree gives $2=1+1$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The ring example and Exercise 11 were visually checked at [S2, Ch. II, §5 and Ex. 11, printed pp. 114-115, PDF pp. 129-130]. The printed source leaves $\deg_{\mathrm{tr}}(0)$ undefined; this note restricts the degree law to nonzero factors. The Laurent-polynomial proof is independent.

