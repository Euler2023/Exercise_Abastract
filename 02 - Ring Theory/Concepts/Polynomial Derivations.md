---
title: Polynomial Derivations
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-09-06
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Exercises 3-4 and 11, printed pp. 213-215, PDF pp. 228-230"
source_status: partially-verified
status: not-started
---

# Polynomial Derivations

## Definition

> [!info] Definition
> A derivation on a commutative ring $A$ is an additive map $D:A\to A$ satisfying $D(xy)=xD(y)+yD(x)$. For a polynomial algebra $k[X_1,\ldots,X_n]$, the formal partial derivative $\partial_i$ is $k$-linear, with $\partial_i(X_j)=1$ when $i=j$ and $0$ otherwise.

## Intuition

A derivation retains the algebraic product rule of differentiation. It depends on polynomial identities, without limits or convergence. Taylor coefficients can also be defined directly in positive characteristic, where factorial division may fail.

## Key Properties

- Every derivation has $D(1)=0$: applying the product rule to $1\cdot1$ gives $D(1)=2D(1)$.
- An additive derivation on a domain extends uniquely to its fraction field by $D(x/y)=(yD(x)-xD(y))/y^2$; the complete well-definedness proof is in the dynamically linked fraction-field exercise.
- For $u\ne0$ in a differential field, $L(u)=D(u)/u$ satisfies $L(uv)=L(u)+L(v)$ and $L(u^m)=mL(u)$ for every integer $m$.
- Hasse derivatives are defined by $f(X+T)=\sum_{i\ge0}H_i(f)(X)T^i$. Expanding monomials gives $H_i(X^j)=\binom jiX^{j-i}$. This is valid in every characteristic. In characteristic zero, $H_i=D^i/i!$.
- Mixed Taylor coefficients satisfy the analogous multi-index formula; the linked exercises prove existence by multiplying the binomial expansions.

## Examples

> [!example] Examples
> For $R(X)=(X-a)^3/(X-b)^2$ with $a,b\in k$, the logarithmic derivative is $3/(X-a)-2/(X-b)$, with integers interpreted in $k$.
>
> In characteristic $p$, $D(X^p)=0$ while $H_p(X^p)=1$. Thus formal differentiation and all Taylor coefficients carry different information.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The exercise statements and the definition of a derivation were checked against [S2, Ch. IV, Ex. 3-4 and 11, printed pp. 213-215, PDF pp. 228-230]. “Hasse derivative” is the conventional name for the coefficients constructed in Ex. 3; the name is explanatory terminology, not a quotation from that exercise. The formulas here are independently derived in the linked exercises. The zero-scalar omission in Ex. 11(c) is explicitly flagged there.
