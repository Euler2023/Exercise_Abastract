---
title: 'Exercise R379: The Ordered Value Group of an Arbitrary Valuation Ring'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 4, printed p. 123, PDF p. 142
source_refs:
- S4/ch-II/sec-3/ex-4
created: '2026-10-23'
---

# Exercise R379: The Ordered Value Group of an Arbitrary Valuation Ring

## Problem Statement

> [!question] Neukirch II.3.4
> Let $\mathfrak o$ be an arbitrary valuation ring with field of fractions $K$, and let $\Gamma=K^*/\mathfrak o^*$. Then $\Gamma$ becomes a totally ordered group if we define $x\bmod\mathfrak o^*\ge y\bmod\mathfrak o^*$ to mean $x/y\in\mathfrak o$.
>
> Write $\Gamma$ additively and show that $v:K\to\Gamma\cup\{\infty\}$, $v(0)=\infty$, $v(x)=x\bmod\mathfrak o^*$ for $x\in K^*$, satisfies (1) $v(x)=\infty\Longleftrightarrow x=0$; (2) $v(xy)=v(x)+v(y)$; (3) $v(x+y)\ge\min\{v(x),v(y)\}$. $v$ is called a Krull valuation.

## Hints

> [!hint]- Hint 1
> Changing representatives multiplies $x/y$ by a unit.

> [!hint]- Hint 2
> For the triangle inequality, divide $x+y$ by whichever of $x,y$ has smaller value.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> If $x'=xu$ and $y'=yw$ with $u,w\in\mathfrak o^*$, then $x'/y'=(x/y)(u/w)$ belongs to $\mathfrak o$ exactly when $x/y$ does. Thus the relation is well-defined. It is reflexive and transitive because $1\in\mathfrak o$ and the ring is closed under products. If both $x/y$ and its inverse belong to $\mathfrak o$, then $x/y$ is a unit, so the two cosets coincide; this proves antisymmetry. For every nonzero $x/y$ the defining valuation-ring property says that it or its inverse belongs to the ring. Thus the order is total. Multiplying both representatives by $z\in K^*$ leaves their ratio unchanged, proving compatibility with the group law, which becomes translation invariance in additive notation.
>
> Define $\infty$ to be larger than every element of $\Gamma$, with $\infty+\gamma=\infty$. The first property is by definition, and the second is the quotient homomorphism property, including zero by this convention. For the third, assume $x,y\ne0$ and $v(x)\ge v(y)$. Then $x/y\in\mathfrak o$ and $(x+y)/y=1+x/y\in\mathfrak o$. If $x+y\ne0$, this says $v(x+y)\ge v(y)$; if the sum is zero, its value is $\infty$ and the same inequality holds. Zero arguments are immediate. Finally $\mathfrak o=\{x:v(x)\ge0\}$ and $\mathfrak o^*=\{x:v(x)=0\}$, showing that the construction recovers the given ring. The ordered group need not embed in $\mathbb R$; no rank-one assumption was made.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §3, Exercise 4, printed p. 123, PDF p. 142].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
