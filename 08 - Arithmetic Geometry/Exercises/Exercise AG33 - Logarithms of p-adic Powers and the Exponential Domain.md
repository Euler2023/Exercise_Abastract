---
title: 'Exercise AG33: Logarithms of p-adic Powers and the Exponential Domain'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 3, printed p. 142, PDF p. 161
source_refs:
- S4/ch-II/sec-5/ex-3
created: '2026-10-23'
---

# Exercise AG33: Logarithms of p-adic Powers and the Exponential Domain

## Problem Statement

> [!question] Neukirch II.5.3
> Under the above hypotheses one has $(1+x)^z=\exp(z\log(1+x))$ and $\log(1+x)^z=z\log(1+x)$.

> [!warning] Source issue
> The first identity is false for arbitrary $1+x\in U^{(1)}$ under the hypotheses of Exercise 2. It is valid on $U^{(r)}$ for $r>e/(p-1)$. The second formula needs parentheses around the powered argument of $\log$ and is valid on the full principal-unit group.

## Hints

> [!hint]- Hint 1
> The second expression means $\log((1+x)^z)$. Test the first identity at the principal unit $-1\in\mathbb Q_2$.

> [!hint]- Hint 2
> On a sufficiently deep principal-unit group, logarithm and exponential are inverse; use integer approximants for $z$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation and stated source corrections
>
> Interpret the second printed expression as $\log((1+x)^z)$, which is the intended homomorphism identity. Put $u=1+x\in U^{(1)}$ and $z\in\mathbb Z_p$. For nonnegative integers $m$, the logarithm homomorphism gives $\log(u^m)=m\log u$. Taking $m_j\to z$ and using continuity of the power action and logarithm proves
> $$
> \log(u^z)=z\log u
> $$
> for every principal unit. This includes torsion units, whose logarithm is zero because the additive target has characteristic zero.
>
> The exponential identity as printed requires a smaller domain. Choose an integer $r>e/(p-1)$ and assume $u\in U^{(r)}$. The series estimates give a pair of inverse homeomorphisms $\log:U^{(r)}\to\mathfrak p^r$ and $\exp:\mathfrak p^r\to U^{(r)}$; the precise source statement is (5.5), printed pp. 137–139 / PDF pp. 156–158. Since $z\in\mathbb Z_p$, $z\log u\in\mathfrak p^r$. Apply the inverse exponential to the already proved logarithm identity to obtain $u^z=\exp(z\log u)$.
>
> To see why the restriction matters, take $K=\mathbb Q_2$, $u=-1=1-2\in U^{(1)}$, and $z=1$. Then $\log u=0$ while $u=-1\ne1=\exp0$. More generally a nontrivial $p$-power root of unity in a ramified $p$-adic field gives the same obstruction. Principal-unit exponentiation exists on all of $U^{(1)}$; identifying it with exponential of the logarithm requires its torsion-free small disc.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §5, Exercise 3, printed p. 142, PDF p. 161].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
