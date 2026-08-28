---
title: Dirichlet Convolution and Mobius Inversion
aliases:
  - Dirichlet Convolution
  - Möbius Inversion
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - dirichlet-convolution
  - mobius-inversion
created: 2026-08-28
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Exercise 12, printed p. 116, PDF p. 131"
---

# Dirichlet Convolution and Mobius Inversion

## Definition

> [!info] Definition
> For arithmetic functions $f,g:\mathbb Z_{>0}\to K$ with values in a commutative ring $K$, their **Dirichlet convolution** is
>
> $$
> (f*g)(n)=\sum_{d\mid n}f(d)g(n/d).
> $$

The convolution identity is the function $\delta$ with $\delta(1)=1$ and $\delta(n)=0$ for $n>1$.

## Intuition

Ordinary multiplication combines additive indices; Dirichlet convolution combines multiplicative factorizations. Associativity comes from regrouping triples $abc=n$.

## Key Properties

- Convolution is associative, commutative, and distributive over pointwise addition.
- Arithmetic functions form a commutative ring under pointwise addition and convolution.
- The convolution of two multiplicative functions is multiplicative.
- If $\varphi_1(n)=1$ for all $n$, then the Möbius function $\mu$ satisfies

$$
\mu*\varphi_1=\delta.
$$

- Consequently, $g=\varphi_1*f$ is equivalent to $f=\mu*g$; this is Möbius inversion.

## Examples

> [!example] A convolution value
> For any $f,g$,
>
> $$
> (f*g)(6)
> =f(1)g(6)+f(2)g(3)+f(3)g(2)+f(6)g(1).
> $$

> [!example] Prime powers
> For $k\ge1$,
>
> $$
> (\mu*\varphi_1)(p^k)
> =\mu(1)+\mu(p)=0.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Definition|Ring Definition]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definition, multiplicativity statement, and Möbius inverse identity were visually checked at [S2, Ch. II, Ex. 12, printed p. 116, PDF p. 131]. The ring-law and inversion derivations are independent.

