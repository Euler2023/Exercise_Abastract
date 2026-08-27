---
title: Formal Power Series
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - formal-power-series
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Exercises 2.2, 3.10, 7.4, printed pp. 354–357, PDF pp. 366–369; polynomial-ring background in §11.2, printed pp. 325–328, PDF pp. 337–340"
created: 2026-08-27
---

# Formal Power Series

## Definition

> [!info] Definition
> For a ring $R$, the formal power series ring $R[[t]]$ consists of expressions
>
> $$
> \sum_{n=0}^{\infty}a_nt^n,\qquad a_n\in R,
> $$
>
> with coefficientwise addition and Cauchy-product multiplication. No convergence is required.

## Intuition

A formal series is an infinite coefficient sequence equipped with algebraic operations. The coefficient of $t^n$ in a product depends on only the finitely many pairs $i+j=n$, so multiplication is well defined without limits.

## Key Properties

- A series is a unit exactly when its constant coefficient is a unit of $R$.
- If $F$ is a field, every nonzero series is uniquely $t^n u$ with $u$ a unit.
- Consequently, the ideals of $F[[t]]$ are exactly $(0)$ and $(t^n)$ for $n\ge0$.
- The fraction field of $F[[t]]$ is the Laurent-series field $F((t))$, whose exponents are bounded below.

## Examples

> [!example] Geometric inverse
> In any formal series ring,
>
> $$
> (1-t)^{-1}=1+t+t^2+t^3+\cdots,
> $$
>
> because every coefficient of the product is determined by a finite cancellation.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The formal-series definition is stated in [S1, Ch. 11, Ex. 2.2, printed p. 354, PDF p. 366], using the coefficientwise construction developed for polynomial rings in §11.2.
- The unit, ideal, and fraction-field claims are independently derived in the linked notes from Artin Exercises 2.2, 3.10, and 7.4.
