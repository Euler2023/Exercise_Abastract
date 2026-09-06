---
title: Integer-Valued Polynomials
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-09-06
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Exercise 18, printed p. 216, PDF p. 231"
source_status: partially-verified
status: not-started
---

# Integer-Valued Polynomials

## Definition

> [!info] Definition
> The ring of integer-valued polynomials is
> $$
> \operatorname{Int}(\mathbb Z)=\{P\in\mathbb Q[X]:P(n)\in\mathbb Z\text{ for every }n\in\mathbb Z\}.
> $$
> The binomial polynomials are $\binom X0=1$ and $\binom Xr=X(X-1)\cdots(X-r+1)/r!$ for $r\ge1$.

## Intuition

Integer coefficients guarantee integer values, but are not necessary. Consecutive integer products have enough divisibility to cancel factorial denominators. Differences, rather than derivatives, make these polynomials easy to organize.

## Key Properties

- Sums and products of integer-valued polynomials are integer valued, so the set is a subring of $\mathbb Q[X]$ containing $\mathbb Z[X]$.
- It is a free abelian group with basis $\binom Xr$ for $r\ge0$: existence follows by the difference induction in the linked exercise, and uniqueness follows from their distinct degrees and nonzero leading coefficients.
- Eventual integer values already force integer values at every integer. The same induction subtracts a binomial-polynomial antiderivative and leaves an integer constant.
- For forward difference $\delta P(X)=P(X+1)-P(X)$, one has $\delta\binom X{r+1}=\binom Xr$.
- For backward difference $\Delta P(X)=P(X)-P(X-1)$, one has $\Delta\binom{X+1}{r+1}=\binom Xr$. Thus integer-valued polynomials have integer-valued discrete antiderivatives.

## Examples

> [!example] Examples
> $X(X-1)/2$ lies in $\operatorname{Int}(\mathbb Z)$ but not in $\mathbb Z[X]$.
>
> At negative integers, $\binom{-m}{r}=(-1)^r\binom{m+r-1}{r}$ for $m>0$, which directly verifies integrality on that half of the domain.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Bernoulli Numbers and Polynomials|Bernoulli Numbers and Polynomials]]
- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definition and all three parts of Exercise 18 were checked at [S2, Ch. IV, printed p. 216, PDF p. 231]. The binomial basis, eventual-integrality criterion, and discrete antiderivatives are independently proved in the linked exercise. The common ring notation used here is explanatory terminology.
